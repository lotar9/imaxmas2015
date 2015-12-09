function setupDefaultLanguage(){
	changeLan(getLangValue());
}

function getLangValue(){
	c = document.cookie.split('; ');
	cookies = {};

	for(i=c.length-1; i>=0; i--){
		 C = c[i].split('=');
		 cookies[C[0]] = C[1];
	}
	if (cookies['language']){
		return cookies['language'];
	}
	tokens = navigator.language.split("-");
	var lang = tokens[0].toUpperCase();
	var country = tokens[0].toUpperCase();
	if (lang != "ES" && lang != "PT"){
		if (country == 'ES'){
			return 'ES';
		}
		lang = "EN";
	}
	return lang;
}

function changeLan(lan) {
  console.log("Cambiando idioma a "+lan);
	$.getJSON("trads.txt", function(data) {
          $.each(data[lan], function(id,trad) {
					if (id.indexOf('game.') == -1){
						$('#'+id).html(trad);
					}
                });
            }).error(function(data){
				alert("Error JSON");
			});
	document.cookie="language="+lan;
	changeNavBarLanguage(lan);
}

function changeNavBarLanguage(lan){
 $('#lang-dropdown-nav').html(
	 "<img class='flag' src='img/flag_"+lan.toLowerCase()+".png'> - "+lan+"</a> <span class='caret'></span>"
 );
}

function getTranslation(key) {
	lan = getLangValue();
	var tradFinal = key;
	$.ajax({
		url: "trads.txt",
		dataType: 'json',
		async: false,
		success: function(data) {
			$.each(data[lan], function(id,trad) {
				if (id.indexOf(key) == 0){
					tradFinal = trad;
				}
			});
		}
	});
	return tradFinal;
}
