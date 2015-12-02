var KG_GOAL = 50000;
var KG_MESSAGE = 20;
$(function(){
	$.scrollify({
		section: '.panel',
		offset: 0
	});
	getLocation();
	getTotalKgObtained();
	setupDefaultLanguage();
	p = gup('punctuation',document.location);
	v = gup('message_id',document.location);
	if (p != null && p != ''){
		$('.punctuation').html(p);
		if (v != null && v != ''){
			$('#message_id').val(v);
		}
		$.scrollify.move("#4");
	}
	socialText = getTranslation('social_initial');
	if(socialText != '') changeSocialLinks(socialText);
	else changeSocialLinks('social');

});

function gup( name, url ) {
  if (!url) url = location.href;
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url );
  return results == null ? null : results[1];
}

function getLocation(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function (position){
				$('#message_location').val(position.coords.latitude +','+position.coords.longitude);
			}
		);
	}
}
var data = [
        {
                value: 0,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
        },
        {
                value: 0,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
        },
];
var options = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : true,
        //String - The colour of each segment stroke
        segmentStrokeColor : "#fff",
        //Number - The width of each segment stroke
        segmentStrokeWidth : 2,
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 50, // This is 0 for Pie charts
        //Number - Amount of animation steps
        animationSteps : 150,
        //String - Animation easing effect
        animationEasing : "easeOutElastic",
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,
};

function formSubmit(){
	var formulario	= $('#formulario');
	var nombre	= $('#person_name').val();
	var mensaje	= $('#message_text').val();
	$('#extra_kg').val( KG_MESSAGE );

	if ( nombre.length == 0 || mensaje.length == 0) {
		if ( nombre.length == 0 ) {
			$('#person_name').parents(':eq(1)').removeClass("has-success");
			$('#person_name').parents(':eq(1)').addClass("has-error");
		} else {
			$('#person_name').parents(':eq(1)').removeClass("has-error");
			$('#person_name').parents(':eq(1)').addClass("has-success");
		}
		if ( mensaje.length == 0 ) {
			$('#message_text').parents(':eq(1)').removeClass("has-success");
			$('#message_text').parents(':eq(1)').addClass("has-error");
		} else {
			$('#message_text').parents(':eq(1)').removeClass("has-error");
			$('#message_text').parents(':eq(1)').addClass("has-success");
		}
		return false;
	} else {
		formulario.submit();
		return true;
	}
}

function getTotalKgObtained(){
	$.ajax({
		type: "POST",
		url: "functions.php",
		data: { "get_kg_obtained":1 },
		dataType : "json",
		success: function (msg) {
			if (msg.status == 'OK'){
				data[0].value = msg.value;
				data[1].value = KG_GOAL-msg.value;
			}
			else {
				data[0].value = 0;
				data[1].value = KG_GOAL;
			}
			var ctx = document.getElementById("myChart").getContext("2d");
			var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			data[0].value = 0;
			data[1].value = KG_GOAL;
			var ctx = document.getElementById("myChart").getContext("2d");
			var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
		}
	   });
}

function changeSocialLinks(newtext) {
	$('.twitter-intent').attr('href','https://twitter.com/intent/tweet?text='+newtext+'&url=http://example.com');
	$('.facebook-intent').attr('href','https://www.facebook.com/dialog/feed?app_id=&display=popup&caption='+newtext+'&link=http://example.com');
}
