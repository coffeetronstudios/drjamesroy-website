$(function() {
    var currentSlide = -1;
    var tid;

    function performLayout() {
        var w = $(window).width();
        //var h = $(window).height();

        var textContainer = $('.billboard-home .text-container');
        textContainer.css('fontSize', (w  / 375.0) + 'em');
    }

    performLayout();

    $(document).ready(function() {
        performLayout();

        var cont = $('.carousel');
        var slides = $('.slide', cont);
        var dots = $('.dot', cont);

        function setCarouselIndex(i) {
            if (i === currentSlide) {
                return;
            }

            currentSlide = i;

            slides.fadeOut();
            $(slides.get(currentSlide)).fadeIn();

            dots.removeClass('active');
            $(dots.get(currentSlide)).addClass('active');
        }

        function setupCarouselTimer() {
            tid = window.setInterval(function() {
                setCarouselIndex((currentSlide + 1) % slides.size());
            }, parseInt(cont.data('delay'), 10));
        }

        setCarouselIndex(0);
        setupCarouselTimer();
        dots.each(function(i) {
            $(this).click(function () {
                window.clearInterval(tid);
                setupCarouselTimer();
                setCarouselIndex(i);
            });
        });
    });

    $(window).resize(function() {
        performLayout();
    });
});
