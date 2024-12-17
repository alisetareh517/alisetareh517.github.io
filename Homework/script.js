// Select elements
const brightnessSlider = document.getElementById('brightness');
const colorPicker = document.getElementById('color');
const toggleButton = document.getElementById('toggleLight');
const lightStatus = document.getElementById('lightStatus');

// Initialize light state
let isLightOn = false;

// Toggle light on/off
toggleButton.addEventListener('click', () => {
    isLightOn = !isLightOn;
    updateLightStatus();
});

// Update light status based on the state
function updateLightStatus() {
    if (isLightOn) {
        lightStatus.textContent = `Light is on. Brightness: ${brightnessSlider.value}%`;
        document.body.style.backgroundColor = colorPicker.value;
    } else {
        lightStatus.textContent = 'Light is off';
        document.body.style.backgroundColor = '#f4f4f4';
    }
}

// Update brightness when slider is adjusted
brightnessSlider.addEventListener('input', () => {
    if (isLightOn) {
        lightStatus.textContent = `Light is on. Brightness: ${brightnessSlider.value}%`;
    }
});
