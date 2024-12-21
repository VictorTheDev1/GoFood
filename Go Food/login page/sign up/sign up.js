// Get the login form
const loginForm = document.getElementById('login-form');

// Add an event listener for form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Simulate login success
    alert('Login successful! (Backend functionality will be added later)');
});
// Get the sign-up form
const signUpForm = document.getElementById('sign-up-form');

// Add an event listener for form submission
signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Send data to the backend
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        // Handle response
        if (!response.ok) {
            const error = await response.text();
            alert(error);
        } else {
            alert('Sign-up successful! You can now log in.');
            window.location.href = '../index.html'; // Redirect to login page
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
