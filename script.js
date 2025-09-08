const form = document.getElementById('login-form');
const nameInput = document.getElementById('name');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = nameInput.value.trim();

    if (userName) {
        // Show quick fade-in welcome message
        resultDiv.classList.remove('fade-in');
        resultDiv.innerHTML = `Welcome beautiful girl ${userName} 💖`;
        void resultDiv.offsetWidth; // restart animation
        resultDiv.classList.add('fade-in');

        // Store name for main.html
        localStorage.setItem('userName', userName);

        // Redirect immediately after a short delay for fade effect
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 500); // 0.5 seconds fade before redirect
    } else {
        resultDiv.innerHTML = 'Please enter your name!';
    }
});
