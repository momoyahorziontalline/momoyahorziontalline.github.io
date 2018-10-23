// section_navbar 滾動效果

var intViewportHeight = window.innerHeight;
var navFixHeight = intViewportHeight - 5;

window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > navFixHeight || document.documentElement.scrollTop > navFixHeight) {
        /*當卷軸滾動超過50px時，執行以下程式*/
        document.querySelector('.navbar').classList.add('fixed');
        document.querySelector('#section_banner').classList.add('fixed');
        document.querySelector('.logo').classList.add('show');

    } else {
        document.querySelector('.navbar').classList.remove('fixed');
        document.querySelector('#section_banner').classList.remove('fixed');
        document.querySelector('.logo').classList.remove('show');

    }
}

//section_banner
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 100,
        }
    },

});

const grid = new Muuri('.grid',
    {
        dragEnabled: true, //拖拉移動
        dragAxis: 'xy'
    });