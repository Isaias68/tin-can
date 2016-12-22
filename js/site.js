/*====================================
=            DOM IS READY            =
====================================*/
$(function() {
    $('.pagination .active a').click(function() {
        return false;
    });
});
// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});


/*========================================
=            WINDOW IS LOADED            =
========================================*/
$(window).load(function() {

});


/*=========================================
=            WINDOW IS RESIZED            =
=========================================*/
/*$(window).resize(function() {

});*/


/*==========================================
=            WINDOW IS SCROLLED            =
==========================================*/
/*$(window).scroll(function() {

});*/