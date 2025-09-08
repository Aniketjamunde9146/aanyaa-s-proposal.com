const form = document.getElementById('login-form');
const nameInput = document.getElementById('name');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = nameInput.value.trim();
    if (userName) {
        // Remove existing fade class to restart animation if needed
        resultDiv.classList.remove('fade-in');

        // Add new message
        resultDiv.innerHTML = `Welcome beautiful girl ${userName} 💖`;

        // Trigger fade-in animation
        void resultDiv.offsetWidth; // reflow to restart animation
        resultDiv.classList.add('fade-in');
    } else {
        resultDiv.innerHTML = 'Please enter your name!';
    }
});
