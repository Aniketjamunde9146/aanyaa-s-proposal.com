const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const nextPageUrl = 'main.html'; // Page after login

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Accept any input
    resultDiv.innerHTML = `Welcome, ${codeInput.value}! 💖`;
    window.location.href = nextPageUrl; // Always redirect
});
