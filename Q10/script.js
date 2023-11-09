// Add JavaScript code to handle interactions and form validation
document.addEventListener('DOMContentLoaded', function () {
    const expandButtons = document.querySelectorAll('.expand-button');
    expandButtons.forEach(button => {
      button.addEventListener('click', function () {
        const memberContent = this.previousElementSibling;
        memberContent.classList.toggle('expanded');
      });
    });
  
    const contactForm = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
  
    contactForm.addEventListener('submit', function (e) {
      let isValid = true;
  
      if (!nameField.value.trim()) {
        nameError.textContent = 'This field is required';
        isValid = false;
      } else {
        nameError.textContent = '';
      }
  
      if (!emailField.value.trim()) {
        emailError.textContent = 'This field is required';
        isValid = false;
      } else if (!isValidEmail(emailField.value)) {
        emailError.textContent = 'Please use a valid email address';
        isValid = false;
      } else {
        emailError.textContent = '';
      }
  
      if (!messageField.value.trim()) {
        messageError.textContent = 'This field is required';
        isValid = false;
      } else {
        messageError.textContent = '';
      }
  
      if (!isValid) {
        e.preventDefault();
      }
    });
  
    function isValidEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
    }
  });
  