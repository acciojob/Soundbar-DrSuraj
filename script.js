//your JS code here. If required.
// script.js

// Function to play a sound
function playSound(soundFileName) {
    var audio = new Audio('sounds/' + soundFileName);
    audio.play();
}

// Function to stop all sounds
function stopAllSounds() {
    var allAudioElements = document.querySelectorAll('audio');
    allAudioElements.forEach(function(audio) {
        audio.pause();
        audio.currentTime = 0;
    });
}
