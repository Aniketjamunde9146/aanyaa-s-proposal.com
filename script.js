const form = document.getElementById('login-form');
const nameInput = document.getElementById('name');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = nameInput.value.trim();

    if (userName) {
        resultDiv.classList.remove('fade-in');
        resultDiv.innerHTML = `
            Welcome beautiful girl ${userName} 💖<br>
            <button id="continue-btn">Continue</button>
        `;
        void resultDiv.offsetWidth; // restart animation
        resultDiv.classList.add('fade-in');

        localStorage.setItem('userName', userName);

        // Add click event for the Continue button
        const continueBtn = document.getElementById('continue-btn');
        continueBtn.addEventListener('click', () => {
            window.location.href = 'main.html';
        });
    } else {
        resultDiv.textContent = 'Please enter your name!';
    }
});
