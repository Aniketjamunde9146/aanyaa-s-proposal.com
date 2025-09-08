const form = document.getElementById('login-form');
const nameInput = document.getElementById('name');
const resultDiv = document.getElementById('result');
const nextPageUrl = 'main.html'; // Page to redirect

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = nameInput.value.trim();
    if (userName) {
        resultDiv.innerHTML = `Welcome beautiful girl ${userName} 💖`;
        
        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = main.html;
        }, 2000);
    } else {
        resultDiv.innerHTML = 'Please enter your name!';
    }
});

