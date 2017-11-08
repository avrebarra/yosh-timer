$(document).ready(function(){
    // Screen listing
    var inputScreen = $("#input-time");
    var runnerScreen = $("#timerun");
    var invokeScreen = $("#invoked");

    // Timer variables
    var currentTimer = null;
    var tickTarget = 0;

    // Input preprocessor
    $("#time-input input").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    $("#time-input input").focusout(function() {
        var self = $(this);

        if(self.val()>60){
            self.val(60);
        }else if(self.val() == 0){
            self.val('');
        }else{
            self.val(("0" + Number(self.val())).slice(-2));
        }
    });
    
    // Section initiators
    var initHomeSection = function(){
        $("#timerun").hide();
        $("#invoked").hide();
    };
    
    var initTimerRunSection = function(){
        $("#timerun #resume-button").hide();
        $("#timerun #stop-button").hide();
    };
    
    var initFinishedSection = function(){
    };

    // Buttons listeners
    $("#dispatch-button").click(function(){
        startTimer();
        initTimerRunSection();
    });   

    $("#stop-button").click(function(){
        stop();
        inputScreen.show();
        runnerScreen.hide();

        $("#resume-button").hide();
        $("#pause-button").show();

        if(!$("#timerun #icon").hasClass("infinite")){
            $("#timerun #icon").addClass("infinite");
        }
    });

    $("#pause-button").click(function(){
        pause();

        $("#pause-button").hide();
        $("#resume-button").show();
        $("#stop-button").show();

        $("#timerun #icon").removeClass("infinite");
    });

    $("#dismiss-button").click(function(){
        dismiss();

        inputScreen.show();
        invokeScreen.hide();
    });

    $("#resume-button").click(function(){
        start();

        $("#resume-button").hide();
        $("#stop-button").hide();
        $("#pause-button").show();

        $("#timerun #icon").addClass("infinite");
    });

    $("#close-button").click(function(){
        window.close();
    });

    $('#time-input input').keypress(function (e) {
        var key = e.which;
        if(key == 13)
        {
            startTimer();
        }
    });   

    // Timer Entity invoker functions
    var pause = function(){
        currentTimer.pause();
    };
    var start = function(tickNumber){
        if(currentTimer == null){
            yoshcore.create({timerid: 0, tickcount:tickNumber, soundtarget:"../asset/alarm.mp3", callback:{updateCallback, finishCallback}});
            currentTimer = yoshcore.getTimer({timerid:0});
        }
        currentTimer.start();
    };
    var stop = function(){
        currentTimer.stop();
        currentTimer = null;
    };
    var dismiss = function(){
        currentTimer.dismiss();
        currentTimer = null;
    };

    // Inner invoker
    var submitTime = function(){
        var timeInput = $("#time-input");
        tickTarget = (Number(timeInput.children(".hour").val()*60*60) + Number(timeInput.children(".minute").val()*60) + Number(timeInput.children(".second").val()));
    };

    var startTimer = function(){
        submitTime();

        if(tickTarget > 0){
            inputScreen.hide();
            runnerScreen.show();
            start(tickTarget);
        }
    };

    // Callback
    var updateCallback = function(){
        var tickLeft = (currentTimer.getTickLeft() > 0) ? currentTimer.getTickLeft() : 0;

        var htick =  Math.floor(tickLeft / 3600);
        var mtick =  Math.floor(Number(tickLeft % 3600) / 60);
        var stick =  Math.floor(Number(tickLeft % 3600) % 60);

        // Reformatting
        var htick = ("0" + htick).slice(-2);
        var mtick = ("0" + mtick).slice(-2);
        var stick = ("0" + stick).slice(-2);

        // DOM Update
        $("#timer .hour").text(htick);
        $("#timer .minute").text(mtick);
        $("#timer .second").text(stick);
    };

    var finishCallback = function(){
        runnerScreen.hide();
        invokeScreen.show();
    };
    
    // Constructor
    initHomeSection();
});