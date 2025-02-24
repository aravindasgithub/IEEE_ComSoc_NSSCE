document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Show success message
    alert(`Thank you, ${name}. Your message has been sent!`);
    
    // Reset the form
    document.getElementById('contactForm').reset();
});