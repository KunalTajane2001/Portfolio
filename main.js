
var typed = new Typed('.text', {
    strings: ['Frontend Developer.' , 'Web Developer.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

// Contact Form 

(function() {
    emailjs.init("fSqtIT4wmwAcOnrHS"); // Replace with your EmailJS User ID
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    const data = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        from_subject:formData.get('subject'),
        message: formData.get('message')
    };

    emailjs.send("service_r6o102h", "template_miicgll", data) // Replace with your Service ID and Template ID
        .then((response) => {
            console.log('Success:', response);
            form.reset();
            showMessage('Your message has been sent successfully!', 'success');
        })
        .catch((error) => {
            console.error('Error:', error);
            showMessage('There was a problem sending your message.', 'error');
        });
});

function showMessage(message, type) {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = message;
    responseMessage.className = `message ${type}`;
    responseMessage.style.display = 'block';
}