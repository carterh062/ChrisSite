var enteringSlide;
var currentSlide = "#home-slide";
$(document).ready(function($) {
	// moveLeftAndOut(leavingSlide);
	moveRightAndIn('body');
	$('#home-link').click(function(){
		if(currentSlide != "#home-slide"){
		slideLeftTransition("#home-slide");
	}
	})
	$('#music-link').click(function(){
		if(currentSlide != "#music-slide"){
		slideLeftTransition("#music-slide");
	}
	})
	$('#photos-link').click(function(){
		if(currentSlide != "#photos-slide"){
		slideLeftTransition("#photos-slide");
	}
	})
	$('#performances-link').click(function(){
		if(currentSlide != "#performances-slide"){
		slideLeftTransition("#performances-slide");
	}
	})
	$('#about-link').click(function(){
		if(currentSlide != "#about-slide"){
		slideLeftTransition("#about-slide");
	}
	})
	$('#contact-link').click(function(){
		if(currentSlide != "#contact-slide"){
		slideLeftTransition("#contact-slide");
	}
	})
});
function setDisplayOn(noneElement){
	$(noneElement).css('display','inline-block');
}
function slideLeftTransition(newSlide){
		enteringSlide = newSlide;
		setDisplayOn(enteringSlide);
		moveLeftAndIn(enteringSlide);
		moveLeftAndOut(currentSlide);
		currentSlide = enteringSlide;
}
function moveLeftAndOut(leavingSlide) {
    var left = $(leavingSlide).offset().left;  // Get the calculated left position
	console.log("out");
	$(leavingSlide).css({left:left})  // Set the left to its calculated position
             .animate({"left":"-2000px"},{ duration: 1300, queue: false });
    
}
function moveLeftAndIn(enteringSlide) {
    var left = $(enteringSlide).offset().left;  // Get the calculated left position
    $(enteringSlide).css('left','2000px');
	$(enteringSlide).animate({left:'0px'},{ duration: 1300, queue: false });
	console.log("in",left);
}
function moveRightAndIn(enteringSlide) {
    var left = $(enteringSlide).offset().left;  // Get the calculated left position
    $(enteringSlide).css('left','-2000px');
	$(enteringSlide).animate({left:'0px'},{ duration: 1300, queue: false });
	console.log("in",left);
}
