document.getElementById('showSignup').addEventListener('click', function() {
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'flex';
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.querySelector('.form-container').style.display = 'flex';
    document.getElementById('signupContainer').style.display = 'none';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Signup successful!');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
