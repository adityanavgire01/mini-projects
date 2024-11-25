console.log("Metronome App Initialized");

// Placeholder variables for BPM and interval
let bpm = 120; // Beats per minute
let isRunning = false;
let intervalId = null; // Holds the timer for the metronome

// Select DOM elements
const bpmDisplay = document.getElementById("bpm-display");
const startStopButton = document.getElementById("start-stop");
const increaseBpmButton = document.getElementById("increase-bpm");
const decreaseBpmButton = document.getElementById("decrease-bpm");
const beatIndicator = document.querySelector(".beat-indicator");
const resetBpmButton = document.getElementById("reset-bpm");

// Load the ticking sound
const tickSound = new Audio("./tick.mp3"); // Adjust path if needed

// Function to update BPM display
function updateBpmDisplay() {
    bpmDisplay.textContent = bpm;
}

// Function to play a tick sound
function playTick() {
    tickSound.currentTime = 0;
    tickSound.play();

    // Flash the beat indicator
    beatIndicator.classList.add("beat-active");
    setTimeout(() => {
        beatIndicator.classList.remove("beat-active");
    }, 200); // Remove the flash after 200ms for better visibility
}

// Function to start the metronome
function startMetronome() {
    const interval = (60 / bpm) * 1000; // Convert BPM to milliseconds
    intervalId = setInterval(() => {
        playTick();
    }, interval);
}

// Function to stop the metronome
function stopMetronome() {
    clearInterval(intervalId);
    intervalId = null;
}

// Event listeners for buttons
increaseBpmButton.addEventListener("click", () => {
    if (bpm < 300) { // Set max BPM
        bpm++;
        updateBpmDisplay();
        if (isRunning) {
            stopMetronome();
            startMetronome(); // Restart with new BPM
        }
    }
});

decreaseBpmButton.addEventListener("click", () => {
    if (bpm > 20) { // Set min BPM
        bpm--;
        updateBpmDisplay();
        if (isRunning) {
            stopMetronome();
            startMetronome(); // Restart with new BPM
        }
    }
});

startStopButton.addEventListener("click", () => {
    isRunning = !isRunning;
    startStopButton.textContent = isRunning ? "Stop" : "Start";
    if (isRunning) {
        startMetronome();
    } else {
        stopMetronome();
    }
});

resetBpmButton.addEventListener("click", () => {
    bpm = 120;
    updateBpmDisplay();
    if (isRunning) {
        stopMetronome();
        startMetronome(); // restart with default BPM
    }
});