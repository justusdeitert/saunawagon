// Sending Contact Form Emails
// --------------------------------------------------------->
// Note: For security, email sending should be handled server-side.
// This client-side code handles form validation and submission.

document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Check if all Inputs are Valid
            const validateFields = form.querySelectorAll('.validate');
            const validFields = form.querySelectorAll('.validate.valid');
            const isValid = validateFields.length === validFields.length;

            // Collect form data
            const formData = new FormData(form);
            const formArray = {};
            formData.forEach(function(value, key) {
                formArray[key] = value;
            });

            if (isValid) {
                sendMail(formArray, form);
            } else {
                validateFields.forEach(function(field) {
                    if (!field.value) {
                        field.classList.add('invalid');
                    }
                });

                M.toast({
                    html: 'Bitte füllen sie alle Felder aus!',
                    classes: 'red'
                });
            }
        });
    });
});

function sendMail(formArray, form) {
    // For production, you should send this data to your backend API
    // which will then use the Brevo SDK server-side
    console.log('Form data to send:', formArray);
    
    // Show success message (replace with actual API call to your backend)
    M.toast({
        html: 'Ihre Nachricht wurde versendet!',
        classes: 'green'
    });

    const button = form.querySelector('button');
    if (button) {
        button.classList.add('disabled');
        button.innerHTML = '<i class="material-icons green-text">done</i>';
    }
}