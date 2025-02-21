document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing with the email: ${email}`);
    document.getElementById('newsletterForm').reset();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}. Your message has been sent!`);
    document.getElementById('contactForm').reset();
});