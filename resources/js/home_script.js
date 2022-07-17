$(document).ready(function() {
    
    $('.js--scroll-to-contact-us').click(function(){
        $('html, body').animate({scrollTop: $('.js--contact-us').offset().top}, 500);
    });
    
    $('.js--scroll-to-about-us').click(function(){
        $('html, body').animate({scrollTop: $('.js--about-us').offset().top}, 500);
    });
    
    $('.js--scroll-to-gallery').click(function(){
        $('html, body').animate({scrollTop: $('.js--gallery').offset().top}, 500);
    });
    
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200)
        if (icon.hasClass('fa-bars')){
            icon.addClass('fa-minus');
            icon.removeClass('fa-bars');
        } else {
            icon.removeClass('fa-minus');
            icon.addClass('fa-bars');
        }
    });
});