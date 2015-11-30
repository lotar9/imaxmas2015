function setupDefaultLanguage(){
	c = document.cookie.split('; ');
	cookies = {};

	for(i=c.length-1; i>=0; i--){
		 C = c[i].split('=');
		 cookies[C[0]] = C[1];
	}
	if (cookies['language']){
		changeLan(cookies['language']);
	}
	else {
		tokens = navigator.language.split("-");
    var lang = tokens[0].toUpperCase();
    if (lang != "ES" && lang != "PT"){
      lang = "EN";
    }
		changeLan(lang);
	}
}

function changeLan(lan) {
  console.log("Cambiando idioma a "+lan);
	$.getJSON("trads.txt", function(data) {
                $.each(data[lan], function(id,trad) {
					$('#'+id).html(trad);
                });
            });
	document.cookie="language="+lan;
}
