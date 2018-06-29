$(document).ready(function () {

    'use strict';

    $('.confirm').click(function () {
       return confirm('Are You Sure Delete Item?');
    });

    $('.confirm_inactive').click(function () {
       return confirm('Are You Sure Inactivation Item?');
    });

    $('.confirm_active').click(function () {
       return confirm('Are You Sure Activation Item?');
    });

});