console.log("Metronome App Initialized")

// Placeholder variables for BPM and interval
let bpm = 120;
let isRunning = false

// Select elements
const bpmDisplay = document.getElementById("bpm-display");
const startStopButton = document.getElementById("start-stop");
const increaseBpmButton = document.getElementById("increase-bpm");
const decreaseBpmButton = document.getElementById("decrease-bpm");

// Event listners (to implemented later)
increaseBpmButton.addEventListener("click", ()=>{
    bpm++;
    bpmDisplay.textContent = bpm;
});

decreaseBpmButton.addEventListener("click", ()=>{
    bpm--;
    bpmDisplay.textContent = bpm;
});

startStopButton.addEventListener("click", ()=>{
    isRunning = !isRunning;
    startStopButton.textContent = isRunning ? "Stop" : "Start";
});
