var yoshcore = {};

(function(context) {
    // Variables
    var activeTimerPool = [];

    // Methods
    yoshcore.create = function(param) {
        var timerid = (param.timerid != null)? param.timerid : activeTimerPool.length;
        var newTimer = new TimerEntity({
            id: timerid,
            timespan: Number(param.tickcount*1000),
            callback: param.callback,
            soundtarget: param.soundtarget
        });
        activeTimerPool[timerid] = newTimer;
        return timerid;
    };

    yoshcore.start = function(param) {
        var timer = activeTimerPool[param.timerid];
        timer.start();
    };
    yoshcore.pause = function(param) {
        var timer = activeTimerPool[param.timerid];
        timer.pause();
    };
    yoshcore.stop = function(param) {
        var timer = activeTimerPool[param.timerid];
        timer.stop();
    };
    yoshcore.dismiss = function(param) {
        var timer = activeTimerPool[param.timerid];
        timer.dismiss();
    };    
    yoshcore.reset = function(param) {
        var timer = activeTimerPool[param.timerid];
        timer.reset();
    };
    yoshcore.getTimer = function(param) {
        var timer = activeTimerPool[param.timerid];
        return timer;
    };

    yoshcore.fetchList = function(param) {};
    yoshcore.load = function(param) {};
    yoshcore.store = function(param) {};
}).apply(yoshcore);

// Helper Objects Classes
function TimerEntity(param) {
    // Variables
    var id = param.id;
    var timespan = param.timespan;
    var soundtarget = param.soundtarget;
    var tickcount = 0;
    var tickspan = timespan/1000;
    var tock = new Tock();
    var sound = new Audio();
    var updatecallback = param.callback.updateCallback;
    var finishcallback = param.callback.finishCallback;

    // Flags
    var invoked = false;
    var ticking = false;
    var paused = false;
    var finished = false;

    // Callbacks
    var onStart = function(){
        ticking = true;
        paused = false;
    };
    var onResume = function(){
        ticking = true;
        paused = false;
    };
    var onTick = function(){

        if(updatecallback != null){
            updatecallback();
        }

        tickcount++;
    };
    var onPause = function(){
        ticking = false;
        paused = true;
    };
    var onReset = function(){
        finished = false;
    };
    var onDismiss = function(){
        invoked = false;
    };
    var onStop = function(){
        ticking = false;
    };
    var onFinish = function(){
        invoked = true;
        finished = true;
        ticking = false;

        if(finishcallback != null){
            finishcallback();
        }

        sound.play();
    };

    // Constructor
    var init = function(){
        tock = new Tock({
            countdown: true,
            interval: 1000,
            callback: onTick,
            complete: onFinish
        });

        if(soundtarget != null){
            sound = new Audio(soundtarget);
        }else{
            sound = new Audio("res/asset/alarm.mp3");
        }
        sound.addEventListener('ended', function() {
            sound.currentTime = 0;
            sound.play();
        }, false);
    }

    // Accessories functions
    this.isTicking = function() {
        return ticking;
    };
    this.getTickLeft = function() {
        return Number(tickspan - tickcount);
    };
    this.getCurrentTick = function() {
        return tickcount;
    };
    this.setUpdateCallback = function(callbackFx) {
        updatecallback = callbackFx;
    };
    this.setFinishCallback = function(callbackFx) {
        finishcallback = callbackFx;
    };


    // Core functions
    this.start = function() {
        if(!ticking && !finished){
            tock.start((tickspan-tickcount)*1000);
            if(paused){
                onResume();
            }else{
                onStart();
            }
        }
    };
    this.pause = function() {
        if(ticking){
            tock.pause();
            onPause();
        }
    };
    this.stop = function() {
        if(ticking){
            tock.stop();
            tickcount = 0;
            onStop();
        }
    };
    this.dismiss = function() {
        if(invoked){
            tock.stop();
            sound.pause();
            sound.currentTime = 0;
            onDismiss();
        }
    };
    this.reset = function() {
        if(!ticking){
            tock.reset();
            tickcount = 0;
            onReset();
        }
    };

    // Accessories
    this.getID = function() {
        return id;
    };

    // Initialization
    init();
}
