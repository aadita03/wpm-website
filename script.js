const startBtn = document.getElementById('start-btn');
const typingTest = document.getElementById('typing-test');
const targetTextElement = document.getElementById('target-text');
const wpmElement = document.getElementById('wpm');
const inputArea = document.getElementById('input-area');
const completionMessage = document.getElementById('completion-message');

let targetText = '';
let startTime;

const texts = [
    "Thanks for joining in the test, I hope you have fun!",
    "Giving out some sample texts to type, so that its not boring for you guys",
    "This is another sample, btw do you guys like studies about space?",
    "Also engineering is fun, just do it with heart and you will like it for sure."
];

function loadText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

function calculateWPM() {
    const elapsedTime = (Date.now() - startTime) / 1000 / 60;
    const wordsTyped = inputArea.value.trim().split(/\s+/).length;
    return Math.round(wordsTyped / elapsedTime);
}

startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    typingTest.classList.remove('hidden');
    targetText = loadText();
    targetTextElement.innerText = targetText;
    inputArea.value = '';
    inputArea.focus();
    startTime = Date.now();
});

inputArea.addEventListener('input', () => {
    const typedText = inputArea.value;
    const wpm = calculateWPM();
    wpmElement.innerText = wpm;

    if (typedText === targetText) {
        typingTest.classList.add('hidden');
        completionMessage.classList.remove('hidden');
        document.addEventListener('keydown', () => {
            location.reload();
        }, { once: true });
    }
});
