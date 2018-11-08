$(document).ready(function () {

    var swiperH = new Swiper('.swiper-container-h', {
        spaceBetween: -1,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        watchOverflow: true,
        followFinger: false,
        initialSlide: 2,
        speed: 600,
        pagination: {
            el: '.swiper-pagination-h',
            clickable: true,
        },
        preventClicks: true,
        resistance: false,
        preloadImages: true,
        touchStartPreventDefault: false,
        noSwipingSelector: '.swiper-container-h',
        
    });

    var swiperV = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        speed: 600,
        watchSlidesProgress: true,
        spaceBetween: -1,
        preventInteractionOnTransition: true,
        watchOverflow: true,
        nested: true,
        followFinger: false,
        initialSlide: 0,
        pagination: {
            el: '.swiper-pagination-v',
            clickable: true,
        },
        mousewheel: {
            invert: false,
        },
        preventClicks: true,
        resistance: false,
        preloadImages: true,
        touchStartPreventDefault: false,
        
    });

    $('#range').on('input', function (e) {
        // e.preventDefault();
        var slideno = $(this).val();
        $('.range').css({'background':' -webkit-linear-gradient(left, #d1eaff 0%, #d1eaff '+slideno+'% ,#435063 0%,#435063 100%)'});
        if (slideno >= 0 && slideno <= 33) {
            console.log(slideno);
            swiperH[1].slideTo(0, 1000, false);
        } else if (slideno >= 34 && slideno <= 66) {
            console.log(slideno);
            swiperH[1].slideTo(1, 1000, false);
        } else if (slideno >= 67 && slideno <= 100) {
            console.log(slideno);
            swiperH[1].slideTo(2, 1000, false);
        } 
    });

});