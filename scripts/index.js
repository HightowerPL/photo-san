$(document).ready(function() {
    $('.js-burger').on('click', function() {
        $('.js-nav').fadeToggle(400);
    });

    $('.js-nav').on('click', function() {
        console.log('klik');
        if ($(window).innerWidth() < 1276) {
            console.log('klik2');

            $('.js-nav').fadeToggle(400);
        }
    })

    $(window).on('resize', function() {
        if ($(window).innerWidth() > 1276 && $('.js-nav').css('display') == 'none') {
            $('.js-nav').show();
        }
    })
    
});
