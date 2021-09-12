// ! load function
function load() {
    document.body.style.opacity = 1;
}


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