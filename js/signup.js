document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        // Save user credentials to localStorage (for demo purposes)
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);
        
        alert('Registration successful! Please log in.');
        window.location.href = 'login.html';
    });
});
