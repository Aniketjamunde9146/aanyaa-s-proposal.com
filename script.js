const form = document.getElementById('login-form');
const nameInput = document.getElementById('name');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = nameInput.value.trim();

    if (userName) {
        // Show welcome message
        resultDiv.classList.remove('fade-in');
        resultDiv.textContent = `Welcome beautiful girl ${userName} 💖`;
        void resultDiv.offsetWidth; // restart animation
        resultDiv.classList.add('fade-in');

        // Save username for main.html
        localStorage.setItem('userName', userName);

        // Use window.location.assign() for more reliable redirect
        setTimeout(() => {
            window.location.assign('main.html');
        }, 800); // 0.8 seconds so fade-in is visible
    } else {
        resultDiv.textContent = 'Please enter your name!';
    }
});
