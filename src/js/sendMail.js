// Sending Contact Form Emails
// --------------------------------------------------------->
// Note: For security, email sending should be handled server-side.
// This client-side code handles form validation and submission.

$('form').submit(function(event) {
    event.preventDefault();

    // Check if all Inputs are Valid
    let isValid;

    if ($('form .validate').length == $('form .validate.valid').length) {
        isValid = true;
    } else {
        isValid = false;
    }

    let formArray = {};

    $.each($(this).serializeArray(), function() {
        formArray[this.name] = this.value;
    });

    if(isValid) {
        sendMail(formArray);
    } else {
        $('form .validate').each(function() {

            if(!$(this).val()) {
                $(this).addClass('invalid');
            }
        });

        M.toast({
            html: 'Bitte füllen sie alle Felder aus!',
            classes: 'red'
        });
    }
});

function sendMail(formArray) {
    // For production, you should send this data to your backend API
    // which will then use the Brevo SDK server-side
    console.log('Form data to send:', formArray);
    
    // Show success message (replace with actual API call to your backend)
    M.toast({
        html: 'Ihre Nachricht wurde versendet!',
        classes: 'green'
    });

    $('form button').addClass('disabled').html('<i class="material-icons green-text">done</i>');
}