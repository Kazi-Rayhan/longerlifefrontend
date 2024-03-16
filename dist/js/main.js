$(document).ready(function () {
    $(".newses").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.news-prev'),
        nextArrow: $('.news-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".partners").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        
        prevArrow: $('.partner-prev'),
        nextArrow: $('.partner-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

window.addEventListener('scroll', function () {
    var nav = document.getElementById('navbar');
    var logo = document.getElementById('nav-logo');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 500) { // Change 100 to the scroll position where you want the background to change
        //   nav.style.background = '#fff'; // Change to desired background color
        nav.classList.add('white-nav');
        logo.src = 'assets/logo/black-header-logo.png';
    } else {
        logo.src = 'assets/logo/white-header-logo.png';
        nav.classList.remove('white-nav');
        
    }
});