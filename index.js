const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const timer = document.querySelector("#timer");
const themeToggle = document.querySelector("#checkbox");

const menuBtn = document.querySelector(".menu > button");
const menu = document.querySelector(".menu");

const hamburgerSidebar = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

let minutes = 25;
let seconds = 0;

function Timer() {
    let intervalId = null;

    function start() {
        if(intervalId) return;

        intervalId = setInterval(() => {
            seconds--;
            if(seconds < 0)
            {
                minutes--;
                seconds = 59;
            }
            setTimerText(minutes,seconds);

            if(minutes === 0 && seconds === 0)
            {
                clearInterval(intervalId);
            }
        }, 1000);
    }

    function stop() {
        clearInterval(intervalId);
        intervalId = null;
        
    }

    function reset() {
        minutes = 25;
        seconds = 0;
        clearInterval(intervalId);
        intervalId = null;
        setTimerText(minutes,seconds);
    }
    
    return {start, stop, reset};
}

function setTimerText(minutes, seconds) {
    timer.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
}

const myTimer = Timer();
startBtn.addEventListener("click", myTimer.start);
stopBtn.addEventListener("click", myTimer.stop);
resetBtn.addEventListener("click", myTimer.reset);
themeToggle.addEventListener("change", ()=>{
    document.body.classList.toggle("dark", checkbox.checked);
})
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
});
hamburgerSidebar.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
})