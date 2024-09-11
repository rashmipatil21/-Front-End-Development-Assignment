document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Stop form from submitting
  
  // Get email and password values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Simple validation
  if (!email.includes('@')) {
    alert('Please enter a valid email');
    return;
  }
  
  if (password.length < 6) {
    alert('Password must be at least 6 characters long');
    return;
  }

  // API Call 
  alert('Logging in...'); // Show loading alert

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: email, password: password })
  })
  .then(response => response.json())
  .then(data => alert('Login successful!')) // Success message
  .catch(error => alert('Login failed. Please try again.')); // Error message
});

// Show/Hide password functionality
document.getElementById('showPassword').addEventListener('change', function() {
  const passwordField = document.getElementById('password');
  passwordField.type = this.checked ? 'text' : 'password'; // Toggle password visibility
});
