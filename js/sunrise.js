/***************************************************************************************************

    Main javascript file

***************************************************************************************************/


$(document).ready(function() {

/*
	Sunrise - Coming Soon Page
	by Alex Shnayder
    Countdown
=================================================================*/
    var date = new Date(config.countdown.year,
                        config.countdown.month - 1,
                        config.countdown.day,
                        config.countdown.hours,
                        config.countdown.minutes,
                        config.countdown.seconds),
        $body = $('body'),
        $countdown = $('#countdown');

    $countdown.countdown(date, function(event) {
        if(event.type == 'finished') {
            $countdown.fadeOut();
        } else {
            $('.countdown-' + event.type, $countdown).text(event.value);
        }
    });

/*
    Slider Sequence
=================================================================*/
    var options = {
        autoPlay: true,
        nextButton: true,
        prevButton: true,
        preloader: true,
        navigationSkip: false
    };
    var sequence = $("#sequence").sequence(options).data("sequence");

    sequence.afterLoaded = function(){
        $(".sequence-prev, .sequence-next").fadeIn(500);
    }
});