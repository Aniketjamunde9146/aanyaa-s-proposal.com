@@ -3,7 +3,7 @@ const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'anuu'; // Replace with your secret code
const secretCode = 'baykoo'; // Replace with your secret code
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
@@ -13,6 +13,6 @@ form.addEventListener('submit', (e) => {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	} else {
		resultDiv.innerHTML = 'Naa Tum meri baby nhi hoo kon hooo tum kaha hai meri rani';
		resultDiv.innerHTML = 'Naa Tum meri baby nhi hoo kon hooo tum kaha hai meri baby';
	}
});
});
