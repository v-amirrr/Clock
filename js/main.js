// ! load function
function load() {
    document.body.style.opacity = 1;
}




// ! footer
const date = new Date();
document.querySelector("footer").innerHTML = `${date.getFullYear()} &#169; Copyright`;




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
        }, 300);
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
        }, 300);
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