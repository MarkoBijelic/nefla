
//top-menu on scroll
jQuery(function ($) {
    var $document = $(document),
            $element = $('.top-menu'),
            className = 'scrolled';

    $document.scroll(function () {
        $element.toggleClass(className, $document.scrollTop() >= 50);
    });
    $document.ready(function () {
        $element.toggleClass(className, $document.scrollTop() >= 50);
    });
});

// smooth scroll- start
var jump = function (e)
{
    if (e) {
        e.preventDefault();
        var target = jQuery(this).attr("href");

    } else {
        var target = location.hash;
    }

    jQuery('html,body').animate(
            {
                scrollTop: jQuery(target).offset().top
            }, 1000, function ()
    {
        location.hash = target;
    });

}

jQuery('html, body').hide();

jQuery(document).ready(function ()
{

    jQuery(document).delegate('click', 'a[href*="#"]:not([href="#"])', jump);

    if (location.hash) {
        setTimeout(function () {
            jQuery('html, body').scrollTop(0).show();
            jump();

        }, 1000);
    } else {
        jQuery('html, body').show();
    }



});

jQuery(function ($) {
    $('a[href*="#"]:not([href="#"])').click(function () {
        var w = $(window).innerWidth();

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                if (w < 991) {
                    $('.navbar-collapse').removeClass('in');
                    $('.navbar-toggler').addClass('collapsed');
                }
                return false;
            }
        }
    });
});
// smooth scroll - END	

jQuery(function ($) {
    $('.input-holder').click(function () {
        $(this).find('label').addClass('stayTop');
        $(this).find('input').focus();
        $(this).find('textarea').focus();
    });
    $('.input-holder').focusout(function () {
        if ($(this).find('input').val() == '') {
            $(this).find('label').removeClass('stayTop');
        }
        if ($(this).find('textarea').val() == '') {
            $(this).find('label').removeClass('stayTop');
        }
    });
    $('input').focusin(function () {
        $(this).prev('label').addClass('stayTop');
    });
    $('textarea').focusin(function () {
        $(this).prev('label').addClass('stayTop');
    });


});
if (jQuery('.testimonial-slider').length >= 1) {
    jQuery('.testimonial-slider').slick({
        centerMode: true,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        adaptiveHeight: false,
        centerPadding: '0.01%',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerPadding: '0'
                }
            }]
    });
}




