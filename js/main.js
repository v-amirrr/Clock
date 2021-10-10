// ! load function
function load() {
    document.body.style.opacity = 1;
}




// ! footer
// const year = new Date();
// document.querySelector("footer").innerHTML = `${year.getFullYear()} &#169; Copyright`;




// ! dark and light switch button
const modeSwitch = document.querySelector("#mode-switch");
const modeSwitchIcon = document.querySelector("#mode-switch span");
let mode = "dark";

modeSwitch.addEventListener("click", () => {
    if(mode === "dark"){

        document.documentElement.setAttribute("data-theme", "light");
        modeSwitchIcon.style.transform = "scale(0)";
        setTimeout(() => {
            modeSwitchIcon.innerHTML = "mode_night";
            modeSwitchIcon.style.transform = "scale(1)";
        }, 200);
        document.querySelectorAll(".ripples-light").forEach(item => {
            item.classList.replace("ripples-light", "ripples-dark");
        });
        mode = "light";

    } else if(mode === "light"){

        document.documentElement.setAttribute("data-theme", "dark");
        modeSwitchIcon.style.transform = "scale(0)";
        setTimeout(() => {
            modeSwitchIcon.innerHTML = "light_mode";
            modeSwitchIcon.style.transform = "scale(1)";
        }, 200);
        document.querySelectorAll(".ripples-dark").forEach(item => {
            item.classList.replace("ripples-dark", "ripples-light");
        });
        mode = "dark";

    }
});




// ! clock switch
const analogSwitch = document.querySelector("#analog-switch");
const digitalSwitch = document.querySelector("#digital-switch");

const analogClock = document.querySelector("#analog-clock");
const digitalClock = document.querySelector("#digital-clock");

analogSwitch.addEventListener("click", () => {
    analogSwitch.classList.add("switch-select");
    digitalSwitch.classList.remove("switch-select");
    
    digitalClock.style.transform = "translateY(5rem)";
    digitalClock.style.opacity = 0;

    analogClock.style.transform = "translateY(0)";
    analogClock.style.opacity = 1;

});

digitalSwitch.addEventListener("click", () => {
    analogSwitch.classList.remove("switch-select");
    digitalSwitch.classList.add("switch-select");

    analogClock.style.transform = "translateY(5rem)";
    analogClock.style.opacity = 0;

    digitalClock.style.transform = "translateY(0)";
    digitalClock.style.opacity = 1;
});




// ! digital clock
const digitalClockHour = document.querySelector("#digital-clock-hour");
const digitalClockMinute = document.querySelector("#digital-clock-minute");
const digitalClockSecond = document.querySelector("#digital-clock-second");
const digitalClockSession = document.querySelector("#digital-clock-session");

setInterval(() => {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h === 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;
    
    digitalClockHour.innerHTML = h;
    digitalClockMinute.innerHTML = m;
    digitalClockSecond.innerHTML = s;
    digitalClockSession.innerHTML = session;

}, 1000);




// ! analog clock
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 + 90);
    secondHand.style.transition = "all .2s";
    if(secondsDegrees == 90){
        secondHand.style.transition = "none";
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);




// ! pages
const clockPage = document.querySelector("#clock-page");
const stopwatchPage = document.querySelector("#stopwatch-page");
const timerPage = document.querySelector("#timer-page");

const clockBtn = document.querySelector("#clock-btn");
const stopwatchBtn = document.querySelector("#stopwatch-btn");
const timerBtn = document.querySelector("#timer-btn");

stopwatchBtn.addEventListener("click", () => {
    clockBtn.classList.remove("select");
    stopwatchBtn.classList.add("select");
    timerBtn.classList.remove("select");

    clockPage.style.transform = "translateX(-5rem)";
    clockPage.style.opacity = 0;
    clockPage.style.zIndex = "-2";

    stopwatchPage.style.transform = "translateX(0)";
    stopwatchPage.style.opacity = 1;
    stopwatchPage.style.zIndex = "2";

    timerPage.style.transform = "translateX(5rem)";
    timerPage.style.opacity = 0;
    timerPage.style.zIndex = "-2";
});


timerBtn.addEventListener("click", () => {
    clockBtn.classList.remove("select");
    stopwatchBtn.classList.remove("select");
    timerBtn.classList.add("select");
    
    clockPage.style.transform = "translateX(-5rem)";
    clockPage.style.opacity = 0;
    clockPage.style.zIndex = "-2";

    stopwatchPage.style.transform = "translateX(-5rem)";
    stopwatchPage.style.opacity = 0;
    stopwatchPage.style.zIndex = "-2";

    timerPage.style.transform = "translateX(0)";
    timerPage.style.opacity = 1;
    timerPage.style.zIndex = "2";
});


clockBtn.addEventListener("click", () => {
    clockBtn.classList.add("select");
    stopwatchBtn.classList.remove("select");
    timerBtn.classList.remove("select");

    clockPage.style.transform = "translateX(0)";
    clockPage.style.opacity = 1;
    clockPage.style.zIndex = "2";

    stopwatchPage.style.transform = "translateX(5rem)";
    stopwatchPage.style.opacity = 0;
    stopwatchPage.style.zIndex = "-2";

    timerPage.style.transform = "translateX(5rem)";
    timerPage.style.opacity = 0;
    timerPage.style.zIndex = "-2";
});




// ! stopwatch
const stopwatchBtn1 = document.querySelector("#stopwatch-btn1");
const stopwatchBtn1P = document.querySelector("#stopwatch-btn1 p");
const stopwatchBtn2 = document.querySelector("#stopwatch-btn2");

stopwatchBtn1.addEventListener("click", () => {
    if(stopwatchBtn1P.innerText == "Start"){        
        stopwatchBtn2.style.opacity = 1;
        stopwatchBtn2.style.transform = "translate(0)";
    
        changeButtonText("Stop");

        stopwatchStart();
    }

    if(stopwatchBtn1P.innerText == "Stop"){
        changeButtonText("Resume");

        stopwatchStop();
    }

    if(stopwatchBtn1P.innerText == "Resume"){
        changeButtonText("Stop");

        stopwatchStart();
    }
});

stopwatchBtn2.addEventListener("click", () => {
    stopwatchBtn2.style.transform = "translate(2rem)";
    stopwatchBtn2.style.opacity = 0;

    changeButtonText("Start");

    stopwatchReset();
});

function changeButtonText(text){
    stopwatchBtn1P.style.transform = "translateX(-5rem)";
    stopwatchBtn1P.style.opacity = 0;

    setTimeout(() => {
        stopwatchBtn1P.innerHTML = text;
        stopwatchBtn1P.style.transition = "none";
        stopwatchBtn1P.style.transform = "translateX(5rem)";
        setTimeout(() => {
            stopwatchBtn1P.style.transition = "all .5s";
            stopwatchBtn1P.style.transform = "translateX(0)";
            stopwatchBtn1P.style.opacity = 1;
        }, 50); 
    }, 500);   
}

const stopwatchH = document.querySelector("#stopwatch-h");
const stopwatchM = document.querySelector("#stopwatch-m");
const stopwatchS = document.querySelector("#stopwatch-s");

let stopwatchHour = 0;
let stopwatchMinute = 0;
let stopwatchSecond = 0;
let stopwatch;

function lessThan10(val, elm){
    if(val < 10){
        elm.innerHTML = `0${val}`;
    }else{
        elm.innerHTML = val;
    }
}

function stopwatchStart(){
    document.querySelector("#stopwatch").style.animationPlayState = "running";

    stopwatch = setInterval(() => {

        if(stopwatchSecond < 60){
            stopwatchSecond += 1;
            lessThan10(stopwatchSecond, stopwatchS);
        }else{
            stopwatchSecond = 0;
            if(stopwatchMinute < 60){
                stopwatchMinute += 1;
                lessThan10(stopwatchMinute, stopwatchM);
            }else{
                stopwatchHour += 1;
                lessThan10(stopwatchHour, stopwatchH);
            }
        }

    }, 1000);
}

function stopwatchStop(){
    clearInterval(stopwatch);
    document.querySelector("#stopwatch").style.animationPlayState = "paused";
}

function stopwatchReset(){
    stopwatchStop();
    stopwatchHour = 0;
    stopwatchMinute = 0;
    stopwatchSecond = 0;
    stopwatchH.innerHTML = "00";
    stopwatchM.innerHTML = "00";
    stopwatchS.innerHTML = "00";
}




// ! timer
const timerBtn1 = document.querySelector("#timer-btn1");
const timerBtn1P = document.querySelector("#timer-btn1 p");
const timerBtn2 = document.querySelector("#timer-btn2");

const timerButtons = document.querySelector("#timer-buttons");
const timerLine = document.querySelector("#timer-line");

const timerInputDiv = document.querySelectorAll("#timer-input div");
const timerInputHr = document.querySelectorAll("#timer-input hr");

const timerInputHour = document.querySelector("#hour input");
const timerInputMinute = document.querySelector("#minute input");
const timerInputSecond = document.querySelector("#second input");

let hour = document.querySelector("#hour input");
let minute = document.querySelector("#minute input");
let second = document.querySelector("#second input");

const lineCopy = document.querySelector("#timer-line-copy");

let hourValue;
let minuteValue;
let secondValue;

let timer;

let timerCheck = /^([0-5]?[0-9]|60)$/;

timerBtn1.addEventListener("click", () => {
    let time = `${hour.value}${minute.value}${second.value}`;

    if(timerBtn1P.innerText == "Start" && time != 0 && timerCheck.test(minute.value) && timerCheck.test(second.value) && timerCheck.test(hour.value)){        
        timerBtn2.style.opacity = 1;
        timerBtn2.style.transform = "translate(0)";
    
        changeTimerButtonText("Stop");

        timerButtons.style.bottom = "2rem";

        setTimeout(() => {
            timerLine.style.bottom = ".5rem";
            timerLine.style.opacity = 1;

            timerInputDiv.forEach(div => {
                div.style.margin = 0;
            });

            timerInputHour.style.borderRadius = "25px 0 0 25px";
            timerInputMinute.style.borderRadius = 0;
            timerInputSecond.style.borderRadius = "0 25px 25px 0";

            timerInputHour.disabled = true;
            timerInputMinute.disabled = true;
            timerInputSecond.disabled = true;


        }, 500);

        startTimer();
    } else if (!(timerCheck.test(minute.value) && timerCheck.test(second.value) && timerCheck.test(hour.value)) || time == 0){
        timerError();
    }

    if(timerBtn1P.innerText == "Stop"){
        changeTimerButtonText("Resume");
        stopTimer();
    }

    if(timerBtn1P.innerText == "Resume"){
        changeTimerButtonText("Stop");
        resumeTimer();
    }
});

timerBtn2.addEventListener("click", () => {
    timerBtn2.style.transform = "translate(2rem)";
    timerBtn2.style.opacity = 0;

    changeTimerButtonText("Start");

    timerLine.style.bottom = "5rem";
    timerLine.style.opacity = 0;

    timerButtons.style.bottom = "5rem";

    timerInputDiv.forEach(div => {
        div.style.margin = "1rem";
    });

    timerInputHour.style.borderRadius = "25px";
    timerInputMinute.style.borderRadius = "25px";
    timerInputSecond.style.borderRadius = "25px";

    timerInputHour.disabled = false;
    timerInputMinute.disabled = false;
    timerInputSecond.disabled = false;

    resetTimer();
});

function changeTimerButtonText(text){
    timerBtn1P.style.transform = "translateX(-5rem)";
    timerBtn1P.style.opacity = 0;

    setTimeout(() => {
        timerBtn1P.innerHTML = text;
        timerBtn1P.style.transition = "none";
        timerBtn1P.style.transform = "translateX(5rem)";
        setTimeout(() => {
            timerBtn1P.style.transition = "all .5s";
            timerBtn1P.style.transform = "translateX(0)";
            timerBtn1P.style.opacity = 1;
        }, 50); 
    }, 500);   
}


function startTimer(){
    hourValue = parseInt(hour.value);
    minuteValue = (parseInt(hour.value) * 60) + parseInt(minute.value);
    secondValue = (parseInt(minuteValue) * 60) + parseInt(second.value);

    let distance = (15 / secondValue);
    let line = 15;
    
    if(hour.value <= 10 && hour.value != 00){
        hour.value = `0${hour.value}`;
    }
    
    if(minute.value <= 10 && minute.value != 00){
        minute.value = `0${minute.value}`;
    }
    
    
    timer = setInterval(() => {
        line = line - distance;
        line.toFixed(2);
        lineCopy.style.transform = `translateX(-${line}rem)`;

        if(secondValue > 0){
            
            if(parseInt(second.value) > 0){
                
                if(second.value <= 10){
                    second.value = `0${second.value - 1}`;
                } else if (second.value > 10){
                    second.value = second.value - 1;
                }

            }else if(parseInt(second.value) == 0){

                if(secondValue >= 60){

                    second.value = 59;

                    if(parseInt(minute.value) > 0){

                        minuteValue--;

                        if(minute.value <= 10){
                            minute.value = `0${minute.value - 1}`;
                        } else if (minute.value > 10){
                            minute.value = minute.value - 1;
                        }

                    }else if(parseInt(minute.value) <= 0){
                        if(minuteValue >= 60){

                            minuteValue = minuteValue - 60;
                            minute.value = 59;

                            if(parseInt(hourValue) != 0 && parseInt(hour.value) != 0){

                                hourValue--;
        
                                if(hour.value <= 10){
                                    hour.value = `0${hour.value - 1}`;
                                } else if (hour.value > 10){
                                    hour.value = hour.value - 1;
                                }
                            }

                        } else if (minuteValue < 60){

                            minute.value = minuteValue;

                        }
                    }

                } else if(secondValue < 60){
                    second.value = secondValue;
                }

            }

            secondValue--;

        }else if (secondValue <= 0){
            timerFinish();
        }
        
    }, 1000);
}

function stopTimer(){
    clearInterval(timer);
}

function resumeTimer(){
    startTimer();
}

function resetTimer(){
    second.value = "00";
    minute.value = "00";
    hour.value = "00";

    clearInterval(timer);

    lineCopy.style.transform = "translateX(-15rem)";
}

let audio = new Audio("./audio/timer-sound.mp3");

function timerFinish(){
    audio.play();

    second.value = "00";
    minute.value = "00";
    hour.value = "00";

    clearInterval(timer);

    document.querySelector("#timer-window").style.zIndex = 999;
    document.querySelector("#timer-window").style.transform = "scale(1)";

    lineCopy.style.transform = "translateX(-15rem)";
}

document.querySelector("#timer-window-btn").addEventListener("click", () => {
    audio.pause();

    document.querySelector("#timer-window").style.transform = "scale(0)";
    setTimeout(() => {
        document.querySelector("#timer-window").style.zIndex = 999;
    }, 500);

    timerBtn2.style.transform = "translate(2rem)";
    timerBtn2.style.opacity = 0;

    changeTimerButtonText("Start");

    timerLine.style.bottom = "5rem";
    timerLine.style.opacity = 0;

    timerButtons.style.bottom = "5rem";

    timerInputDiv.forEach(div => {
        div.style.margin = "1rem";
    });

    timerInputHour.style.borderRadius = "25px";
    timerInputMinute.style.borderRadius = "25px";
    timerInputSecond.style.borderRadius = "25px";

    timerInputHour.disabled = false;
    timerInputMinute.disabled = false;
    timerInputSecond.disabled = false;
});

function timerError(){
    alert("You can only enter tow-digit integer numbers between 0 and 60.");
    resetTimer();
}