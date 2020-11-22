//$("body").niceScroll();
$("body").niceScroll({
    cursorwidth: 12,
    cursoropacitymin: 0.4,
    cursorcolor: 'linear-gradient(to bottom, #e68282 0%, #f0d68a 100%)',
    cursorborder: 'none',
    cursorborderradius: 4,
    autohidemode: 'leave'
});
//end ice scrool
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
/*Scroll to top when arrow up clicked END*/