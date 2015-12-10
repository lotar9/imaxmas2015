var KG_GOAL = 50000;
var KG_MESSAGE = 20;
$(function(){
	getLocation();
	setupDefaultLanguage();
	getTotalKgObtained();
	p = punctuation;
	v = message_id;
	if (p > 0 ){
		$('.punctuation').html(p);
		if (v > 0){
			$('#message_id').val(v);
		}
		clickMenu(4);
	}
	socialText = encodeURIComponent(getTranslation('social_initial'));
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
	c = document.cookie.split('; ');
	cookies = {};

	for(i=c.length-1; i>=0; i--){
		 C = c[i].split('=');
		 cookies[C[0]] = C[1];
	}
	if (cookies['location'] && cookies['location_expires']){
		var locExpDate = new Date( cookies['location_expires']);
		var expDate = new Date();
		if (locExpDate.getTime() > expDate.getTime()){
			return;
		}
	}


	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function (position){
				var d = new Date();
				d.setDate( d.getDate() +1);
				document.cookie="location="+position.coords.latitude +','+position.coords.longitude;
				document.cookie="location_expires="+d;
			}
		);
	}
}


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
var data = [
		{
				value: 0,
				color: "green",
				highlight: "#08330e",
				label: "collected"
		},
		{
				value: 0,
				color:"#a01127",
				highlight: "#651127",
				label: "remaining"
		},
];
var options = {
		tooltipFontSize: 11,
		//Boolean - Whether we should show a stroke on each segment
		segmentShowStroke : true,
		//String - The colour of each segment stroke
		segmentStrokeColor : "#ddd",
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
			repaintDoughnut(true);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			data[0].value = 0;
			data[1].value = KG_GOAL;
			repaintDoughnut(true);
		}
	   });
}

function repaintDoughnut(first){
	data[0].label = getTranslation('graphic.collected');
	data[1].label = getTranslation('graphic.remaining');
	var ctx = document.getElementById("myChart").getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
}

function clickMenu(id){
	$(document).scrollTop( $("#section"+id+"]").offset().top );
}

function changeSocialLinks(newtext) {

	$('.twitter-intent').attr('href','https://twitter.com/intent/tweet?text='+newtext+'&url=http://www.imaweb.net/xmas2015').attr('target','_blank');
	$('.facebook-intent').attr('href','https://www.facebook.com/dialog/feed?app_id=&display=popup&caption='+newtext+'&link=http://example.com').attr('target','_blank');
}
