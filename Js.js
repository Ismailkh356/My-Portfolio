document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        hamburger.classList.toggle("active");
    });
    
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mailto form submission (just for demo logging)
const mailtoForm = document.getElementById('mailto-form');
mailtoForm.addEventListener('submit', (e) => {
    console.log('Mailto form triggered - opens email client');
    // No need to preventDefault; it’ll open the email client naturally
});

// Formspree form submission
const formspreeForm = document.getElementById('formspree-form');
formspreeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(formspreeForm);
    try {
        const response = await fetch(formspreeForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            alert('Message sent successfully!');
            formspreeForm.reset();
        } else {
            alert('Something went wrong. Try again later.');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

