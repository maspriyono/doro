$(document).ready(function () {
    var isStart = false;
    var interval;
    var min = 25;
    var sec = 0;
        
    function start() {
        interval = setInterval(function () {
            if (sec === 0) {
                if (min === 0) {
                    $('#notif-sound')[0].play();
                    $("#alert").css("display","");
                    clearInterval(interval);
                } else {
                    min--;
                    sec = 59;
                }
            } else {
                sec--;
            }

            $('#clock-display').html(min + ":" + sec);
        }, 1000);
    }
    
    function stop() {
        clearInterval(interval);
        $('#clock-display').html("25:00");
    }
    
    $('#clock-start').click(function() {
        var icon = $(this).children();
        if (!isStart) {
            icon.attr({"class":"fa fa-stop"});
            start();
            isStart = true;
        } else {
            icon.attr({"class":"fa fa-play"});
            stop();
            isStart = false;
        }
    });
    
    $('#short-break').click(function() {
        min = 5;
        $("#alert").css("display","none");
        $('#clock-display').html(min + ":" + sec);
    });
    
    $('#long-break').click(function() {
        min = 15;
        $("#alert").css("display","none");
        $('#clock-display').html(min + ":" + sec);
    });
    
    $('#pomodoro').click(function() {
        min = 25;
        $("#alert").css("display","none");
        $('#clock-display').html(min + ":" + sec);
    });
});