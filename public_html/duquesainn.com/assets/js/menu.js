$(document).ready(function(){



if ($(window).width() < 814) {
   
   $('[id^="linked-"]').removeClass("on");
	$('[id^="linked-"]').removeClass("off");
}
else {
   


$('.menu-open-button').click(function(){
	$(this).toggleClass('open');

	if($(this).hasClass("open") ){
		$('[id^="linked-"]').removeClass("on");
		}
		else{
		$('[id^="linked-"]').removeClass("off");

	}
	
});

	$('#link_home').click(function(){
		$('#linked-home').addClass("on");
		$('#linked-home').removeClass("off");
		$('#linked-home').siblings().addClass("off");
		$('#linked-home').siblings().removeClass("on");


	});

	$('#link_house').click(function(){
		$('#linked-house').addClass("on");
		$('#linked-house').removeClass("off");
		$('#linked-house').siblings().addClass("off");
		$('#linked-house').siblings().removeClass("on");

	});


	$('#link_local').click(function(){
		$('#linked-local').addClass("on");
		$('#linked-local').removeClass("off");
		$('#linked-local').siblings().addClass("off");
		$('#linked-local').siblings().removeClass("on");

	});

	$('#link_contact').click(function(){
		$('#linked-contact').addClass("on");
		$('#linked-contact').removeClass("off");
		$('#linked-contact').siblings().addClass("off");
		$('#linked-contact').siblings().removeClass("on");

	});
}
});
