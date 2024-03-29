/*
*
* Template Name: Mixer
* Template URI: http://www.pebasdesign.com/themes/mixer/
* Template Author: Predrag Stojanovic
* License: GNU General Public License version 3.0
* License URI: http://www.gnu.org/licenses/gpl-3.0.html
* Version: 1.0.0
*
* Designed & Coded by Predrag Stojanovic http://www.pebasdesign.com
* All files, unless otherwise stated, are released under the GNU General Public License
* version 3.0 (http://www.gnu.org/licenses/gpl-3.0.html)
*
* PLEASE DO NOT EDIT THIS FILE!
* 
*/

/* --------------------------------------------------------------------------
/* --------------------------------------------------------------------------
/* --------------------- ****** CUSTOM JS SETTINGS *****---------------------
/* --------------------------------------------------------------------------
/* --------------------------------------------------------------------------


/* --------------------------------------------------------------------------
/* --------------------------------------------------------------------------
* YOU SHOULD CHANGE THIS PART BEFORE START OF USING MIXER THEME:
* ------*/

/* --------------------------------------------------------------------------
* GOOGLE MAP
* ------*/

$(document).ready(function(){
$(function(){
$('#map').gmap3( // google map container
{ 
action: 'addMarker', // to show marker on specific address
address: "Novi Sad, Turgenjeva 4", // type your address here
map: // map type (leave empty to stay same)
{
center: true, // center map
zoom: 14, // choose zoom
mapTypeId: google.maps.MapTypeId.ROADMAP
}
}
);
});
});

/* --------------------------------------------------------------------------
* LATEST TWEETS
* -------------*/
jQuery(document).ready(function(){
$(".tweet").tweet({ // twitter container
username: "pebasdesign", // twitter username
join_text: "", // text of joining, empty fior this theme
avatar_size: 0, // 0 avatarsize (no avatar) for this theme
count: 2, // how many tweets will show
loading_text: "<p class='twenty'>Please wait, tweets still loading...</p>", // message for loading tweets
refresh_interval: 60000, // refresh rate, how much often tweets udate
template: "{text}{time}" // template, show text and time of tweets
});
});



/* ------------------------------
* YOU SHOULD NOT CHANGE THIS PART 
* ------*/

 
/* --------------------------------------------------------------------------
* ANIMATE BACKGROUND
* ------*/

jQuery(document).ready(function(){
$('.social a')
.css( {backgroundPosition: "0px -21px"} )
.mouseover(function(){
$(this).stop().animate({backgroundPosition:"(0px 0px)"}, {
duration:60,
easing: 'easeInSine'
})
})
.mouseout(function(){
$(this).stop().animate({backgroundPosition:"(0px -21px)"}, {
duration:800,
easing: 'easeOutBounce'
})
})

$('.cat-list ul li')
.css( {backgroundPosition: "0px -14px"} )
.mouseover(function(){
$(this).stop().animate({backgroundPosition:"(0px 3px)"}, {
duration:60,
easing: 'easeInSine'
})
})
.mouseout(function(){
$(this).stop().animate({backgroundPosition:"(0px -14px)"}, {
duration:800,
easing: 'easeOutBounce'
})
})
});


/* --------------------------------------------------------------------------
* MENU ROTATE
* ------*/

jQuery(document).ready(function(){
if ($.browser.msie && parseInt($.browser.version) < 9) {  // stop IE8 to load rotate script
$("ul.main-nav li a").mouseover (function() { 
$(this).children('span.nav-icon').css({'color':'#0daaef'}) }); //choose hover color for icons
$("ul.main-nav li a").mouseout(function(){ 
$(this).children('span.nav-icon').css({'color':'#e7e4e4'}) }); //choose hover color for icons
} else {
$("ul.main-nav li a").mouseover (function() {  
$(this).children('span.nav-icon').rotate({angle:360,animateTo:360,easing: $.easing.easeInOutExpo})
$(this).children('span.nav-icon').css({'color':'#0daaef'})
});
$("ul.main-nav li a").mouseout(function(){
$(this).children('span.nav-icon').rotate({animateTo:0})
$(this).children('span.nav-icon').not('.active').css({'color':'#e7e4e4'}) 
});	
} 
});


/* --------------------------------------------------------------------------
* FEATURED ROTATE
* ------*/

jQuery(document).ready(function(){
if ($.browser.msie && parseInt($.browser.version) < 9) {  // stop IE8 to load rotate script
$(".featured a").mouseover (function() { 
$(this).css({'background':'#3b3b3b'});
$(this).children('span.box-icon, span.box-title, span.box-descript').css({'color':'#ffffff'}) }); //choose hover color for icons
$(".featured a").mouseout(function(){ 
$(this).css({'background':'#ffffff'});
$(this).children('span.box-icon').css({'color':'#3b3b3b'}) //choose hover color for icons
$(this).children('span.box-title').css({'color':'#0daaef'}); //choose hover color for title
$(this).children('span.box-descript').css({'color':'#a7a7a7'}); }); //choose hover color for description
} else {
$(".featured a").mouseover (function() { 
$(this).css({'background':'#3b3b3b'});
$(this).children('span.box-icon').rotate({angle:360,animateTo:360,easing: $.easing.easeInOutExpo})
$(this).children('span.box-icon, span.box-title, span.box-descript').css({'color':'#ffffff'}); });
$(".featured a").mouseout(function(){
$(this).css({'background':'#ffffff'});
$(this).children('span.box-icon').rotate({animateTo:0});
$(this).children('span.box-icon').css({'color':'#3b3b3b'});
$(this).children('span.box-title').css({'color':'#0daaef'});
$(this).children('span.box-descript').css({'color':'#a7a7a7'});
});	
}
});

/* --------------------------------------------------------------------------
* CS SLIDER
* ------*/

jQuery(document).ready(function(){
$(function() {
$('#da-slider').cslider({
bgincrement	: 300,	// increment the bg position (parallax effect) when sliding
autoplay	: true,// slideshow on / off
interval	: 6000  // time between transitions
});
});
});

/* --------------------------------------------------------------------------
* BUTTONS
* ------*/
jQuery(document).ready(function(){
$(".button, a.tag, ul.pagination li a").animate({"opacity": "1"}, "slow");
$(".button, a.tag, ul.pagination li a").hover(
function() {
$(this).stop().animate({"opacity": "0.8"}, "slow");
},
function() {
$(this).stop().animate({"opacity": "1"}, "slow");	 
});
});

/* --------------------------------------------------------------------------
* LATEST TWEETS
* -------------*/
jQuery(document).ready(function(){
$(".tweet").tweet({ // twitter container
username: "pebasdesign", // twitter username
join_text: "", // text of joining, empty fior this theme
avatar_size: 0, // 0 avatarsize (no avatar) for this theme
count: 2, // how many tweets will show
loading_text: "<p class='twenty'>Please wait, tweets still loading...</p>", // message for loading tweets
refresh_interval: 60000, // refresh rate, how much often tweets udate
template: "{text}{time}" // template, show text and time of tweets
});
});

/* --------------------------------------------------------------------------
* TOOLTIPS
* -------------*/
jQuery(document).ready(function(){
$(function() {
   $('a[rel=tipsy]').tipsy({fade: true, gravity: 's'});
});
});

/* -----------------------------------------------------------------------------
* SCROLL
* -------------*/

/* TO TOP */

$(document).ready(function(){

// hide #back-top first
$("a.scrollup").hide();

// fade in #back-top
$(function () {
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
$('a.scrollup').fadeIn();
} else {
$('a.scrollup').fadeOut();
}
});

// scroll body to 0px on click
$('a.scrollup').click(function () {
$('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});
});

/* -----------------------------------------------------------------------------
* PRETTY PHOTO
* -----------*/
$(document).ready(function(){
$("a[rel^='prettyPhoto']").prettyPhoto({
"theme": 'light_square' /* light_rounded / dark_rounded / light_square / dark_square */	
});
});

/* --------------------------------------------------------------------------
* NAVIGATION
* ------*/

jQuery(document).ready(function(){
$('ul.main-nav li').children('ul.sub-hide').hide();
$('ul.main-nav li').hover(
function () {
$(this).children('ul.sub-hide').stop(true, true).fadeIn({
duration:400,
easing: 'easeInSine'
});
},
function () {
$(this).children('ul.sub-hide').stop(true, true).fadeOut({
duration:400,
easing: 'easeOutSine'
});
}
);
});

jQuery(document).ready(function(){
$('ul.sub-sub-hide').hide();
$('ul.sub-hide li').hover(
function () {
$(this).children('ul.sub-sub-hide').stop(true, true).fadeIn({
duration:400,
easing: 'easeInSine'
});
},
function () {
$(this).children('ul.sub-sub-hide').stop(true, true).fadeOut({
duration:400,
easing: 'easeOutSine'
});
}
);
});

jQuery(document).ready(function(){
$('ul.main-nav li ul').hover(
function () {
$(this).parent('li').children('a').addClass('active');
},
function () {
$(this).parent('li').children('a').removeClass('active');
}
);
});

jQuery(document).ready(function(){
$(function() {
$(".responsive-menu select").change(function() {
window.location = $(this).find("option:selected").val();
});
});
});

jQuery(document).ready(function(){
if ($('ul.main-nav li a').hasClass('active'))
{
$('ul.main-nav li a.active').children('span.nav-icon').addClass('active');	
} else {
$('ul.main-nav li a.active').children('span.nav-icon').removeClass('active');
}
});

/* --------------------------------------------------------------------------
* IMAGE ZOOM
* ------*/

jQuery(document).ready(function(){
$('.img a').children('span').hide().animate({opacity: '0.6'});
$('.img a').hover(function() {
$(this).children('span').stop(true, true).fadeIn(500);
}, function() {
$(this).children('span').fadeOut(500);
});
});

/* --------------------------------------------------------------------------
* FLIP IMAGE
* ------*/

jQuery(document).ready(function(){
$('.portfolio-category').animate({opacity: '0.4'});
$('.portfolio-content').hide();
$('span.button').text('more');
$('span.button').click(function() {
$(this).parent('.image-holder').children('img, span.portfolio-category, .portfolio-content').stop(true,true).slideToggle({
duration:600,
easing: 'linear'
});
$(this).parent('.image-holder').children('span.button').text($(this).text() == 'less' ? 'more' : 'less'); 
});
});

/* --------------------------------------------------------------------------
* CAROUSEL
* ------*/

jQuery(document).ready(function(){
$('.testimonial').carousel({
slider: '.testimonial-carousel',
slide: '.slide',
nextSlide : '.next',
prevSlide : '.prev',
speed: 1000,
easing: 'easeInOutExpo'
});
});

/* -----------------------------------------------------------------------------
* ACCORDION
* ---------*/
$(document).ready( function() {  
var $container = $('.accordion > div'),
$trigger   = $('.accordion > h6');
$container.hide();
$trigger.first().addClass('active').next().show();
$trigger.on('click', function(e) {
if( $(this).next().is(':hidden') ) {
$trigger.removeClass('active').next().slideUp(300);
$(this).toggleClass('active').next().slideDown(300);
}
e.preventDefault();
});
});

/* -----------------------------------------------------------------------------
* TABS
* ---------*/

$(document).ready(function(){
$('.tab-filter').each(function(){
var $active, $content, $links = $(this).find('a');
$active = $links.first().addClass('active');
$content = $($active.attr('href'));
$links.not(':first').each(function () {
$($(this).attr('href')).hide();
});
$(this).on('click', 'a', function(e){
$active.removeClass('active');
$content.hide();
$active = $(this);
$content = $($(this).attr('href'));
$active.addClass('active');
$content.show();
e.preventDefault();
});
});
});

/* ---------------------------------------------------------------------------------
* FORMS
* -----*/

/*--------- Set Submitting With <a> Tag ------*/

$(document).ready(function(){
$("a[name=submit]").click( function(){
$(this).parents("form").submit();
});	

/*--------- Set Empty Fields On Click ------*/
$(document).ready(function(){
$('.textarea').val("Your message...");
$('.comment_form textarea').val("Your message...");
$('input, .textarea, .textarea_comment').each(function() {
var default_value = this.value;
$(this).focus(function() {
if(this.value == default_value) {
this.value = '';
}
});
$(this).blur(function() {
if(this.value == '') {
this.value = default_value;
}
});
});
});

/*--------- Set Neccessary Methods For JQ Validate ------*/
jQuery.validator.addMethod("notEqual", function(value, element, param) {
return this.optional(element) || value != param;
}, "Please choose a value!");

jQuery.validator.setDefaults({
errorPlacement: function(error, element) {
error.appendTo($(
$(element).val().errorLabel
));
}
});

/*--------- Newsletter Form ------*/

$("form.newsletter").validate({
debug: false,

email: {
required: true,
email: true
},

submitHandler: function(form) {

$.post('php/process.php', $("form.newsletter").serialize(), function(data) {
$("form.newsletter").fadeOut(),$('.success').fadeIn({duration: 800, easing: 'easeInOutExpo'}).html(data);
});
}
});


/*--------- Contact Form ------*/

$("form.contact_form").validate({
debug: false,
rules: {
	
name: {
minlength: 2,
maxlength: 15,	
notEqual: "Your name...",
required: true,
},


email: {
required: true,
email: true
},

subject: {
minlength: 3,	
notEqual: "Please type subject...",
required: true,
},

message: {
minlength: 5,	
notEqual: "Your message...",
required: true,
},

},

submitHandler: function(form) {

$.post('php/process_contact.php', $("form.contact_form").serialize(), function(data) {
$("form.contact_form").fadeOut(),$('.success_contact').fadeIn({duration: 800, easing: 'easeInOutExpo'}).html(data);
});
}
});

/*--------- Comment Form ------*/

$("form.comment_form").validate({
debug: false,
rules: {
	
name: {
minlength: 2,
maxlength: 15,	
notEqual: "Your name...",
required: true,
},


email: {
required: true,
email: true
},

comment: {
minlength: 5,	
notEqual: "Your message...",
required: true,
},

},

submitHandler: function(form) {

$.post('php/process_comment.php', $("form.comment_form").serialize(), function(data) {
$("form.comment_form").fadeOut(),$('.success_comment').fadeIn({duration: 800, easing: 'easeInOutExpo'}).html(data);
});
}
});

});