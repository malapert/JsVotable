require.config({
    paths: {
        "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    },
    waitSeconds: 0
});

/**
 * Mizar widget main
 */
require(["jquery","./app"], function($, VotableWidget) {

    var widget = new VotableWidget('myWidget');
    $('.button').on('click', function(e) {
        widget.do_work();
        e.preventDefault();
    });    

});