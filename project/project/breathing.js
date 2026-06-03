const textElement = document.getElementById('instruction-text');
const inhaleText = document.getElementById('txt-inhale').innerText;
const exhaleText = document.getElementById('txt-exhale').innerText;

const cycleTime = 4000; 
const instructions = [inhaleText, exhaleText];
let currentIndex = 0;

function updateInstruction() {
    textElement.innerText = instructions[currentIndex];
    currentIndex = (currentIndex + 1) % instructions.length;
}

updateInstruction();
setInterval(updateInstruction, cycleTime);