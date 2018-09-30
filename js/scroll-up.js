
$(document).ready(function(){
	
	$('body').append('<a href="#top" class="scroll-up" title="Revenir en haut de page"><i class="mdi mdi-chevron-up"></i></a>');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('.scroll-up').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});