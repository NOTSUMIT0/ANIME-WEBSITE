document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Retrieve stored credentials (for demo purposes)
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem('loggedIn', 'true');  // Simulate user login
            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
