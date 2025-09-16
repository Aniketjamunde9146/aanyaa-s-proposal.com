const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const resultDiv = document.getElementById('result');
const nextPageUrl = 'main.html'; // Change if you have another page

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = codeInput.value.trim();

  if (userInput) {
    resultDiv.innerHTML = `✨ Welcome, <strong>${userInput}</strong>! Redirecting...`;
    setTimeout(() => {
      window.location.href = nextPageUrl;
    }, 2000); // Redirect after 2 seconds
  } else {
    resultDiv.innerHTML = '⚠️ Please enter your name!';
  }
});
