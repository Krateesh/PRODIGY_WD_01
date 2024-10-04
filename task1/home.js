// JavaScript code to handle the contact form submission
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Retrieve form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple validation check
        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
            return;
        }

        // You can replace this with actual form submission logic (e.g., AJAX request)
        alert("Thank yOU!Your message has been received.");

        // Clear the form
        contactForm.reset();
    });
});