$(function() {
    function performLayout() {
        var w = $(window).width();
        //var h = $(window).height();

        var textContainer = $('.billboard-home .text-container');
        textContainer.css('fontSize', (w  / 375.0) + 'em');
    }

    performLayout();

    $(document).ready(function() {
        performLayout();
    });

    $(window).resize(function() {
        performLayout();
    });
});
