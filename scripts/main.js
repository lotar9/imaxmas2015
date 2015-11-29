var KG_GOAL = 50000;
var KG_MESSAGE = 20;
$(function(){
	$.scrollify({
		section: '.panel',
		offset: 0
	});
	getLocation();
	data[0].value = kg_obtained;
	data[1].value = KG_GOAL-kg_obtained;
	var ctx = document.getElementById("myChart").getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
	var gameFrame = $('#game-frame');
	var width =($(window).width())*0.99;
	var height = ($(window).height())*0.99;
	gameFrame.width( width );
	gameFrame.height( height );
	setupDefaultLanguage();
	//gameFrame.attr('src','game/index.html');

});

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

function endGame(punctuation) {
	$.ajax({
		type: "POST",
		url: "functions.php",
		data: { "score": punctuation, "location": $('#message_location').val()},
		dataType : "json",
		success: function (msg) {
			if (msg.status == 'OK'){
				$('#message_id').val( msg.id );
				$('span.punctuation').text(punctuation);
				$('iframe.video-frame').attr('src','https://www.youtube.com/embed/ZkJpzTNeaZQ?autoplay=1');
				location.hash = "#4";
			}
			else {
				alert(msg.error);
			}
		}
	   });
}

function formSubmit(){
	var formulario	= $('#formulario');
	var nombre	= $('#person_name').val();
	var mensaje	= $('#message_text').val();
	$('#extra_kg').val( KG_MESSAGE );

	if ( nombre.length > 0 && mensaje.length > 0 ){
		formulario.submit();
		return true;
	} else {
		alert("Por favor rellena los dos campos");
		return false;
	}
}
