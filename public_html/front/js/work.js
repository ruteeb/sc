$(document).ready(function () {

    'use strict';


    $(".hand-hold-white").click(function () {
        $(this).fadeOut(0);
        $(".hand-hold-red").fadeIn(0);
        // rain hand
    });

    $(".hand-hold-red").click(function () {
        $(this).fadeOut(0);
        $(".hand-hold-white").fadeIn(0);
    });

});