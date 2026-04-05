// 1. Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Change button text based on mode
    if(body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
});

// 2. Newsletter Form Validation
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('newsEmail');
    const feedback = document.getElementById('formFeedback');
    
    // Simple Email Regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(emailInput.value)) {
        feedback.style.color = "#90ee90"; // Light green
        feedback.textContent = "Thank you for subscribing!";
        emailInput.value = ""; // Clear input
    } else {
        feedback.style.color = "#ffcccb"; // Light red
        feedback.textContent = "Please enter a valid email address.";
    }
});