$(function () {
    // jqeury 기능. 이렇게 쓰면 html최상단에 스크립트 태그 작성 가능 : html로드가 다 될떄까지 기다리겠다는 뜻

    // Trigger
    $(".trigger").click(function () {
        $(this).toggleClass("active");
        $(".gnb").toggleClass("active");
    });
    $(".gnb a").click(function () {
        $(".gnb, .trigger").removeClass("active");
    });

    // Sliding jQuery
    $(".gnb a, .gototop").click(function (e) {
        $.scrollTo(this.hash || 0, 800);
        e.preventDefault();
    });

    // Header Scroll Change
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $("header, .gototop").addClass("active");
        } else {
            $("header, .gototop").removeClass("active");
        }
    });

    // Slick.js - 이부분이 중요
    $(".myslider").slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,

        // 반응형
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});
