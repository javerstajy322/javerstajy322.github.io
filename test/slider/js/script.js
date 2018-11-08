
// var inputRange = document.querySelector('input[type="range"');
// inputRange.addEventListener('change', function(e){
//     e.preventDefault();
//     var slide = event.target.value;

// })

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
});