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