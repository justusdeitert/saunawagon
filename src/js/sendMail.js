// Sending Transactional Emails with sendinblue API
// --------------------------------------------------------->
const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY || '';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

const apiInstance = new SibApiV3Sdk.SMTPApi();
let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email


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

    // Define the campaign settings\
    sendSmtpEmail = {
        sender: {
            name: formArray.first_name + ' ' + formArray.last_name,
            email: formArray.email
        },
        htmlContent: formArray.message,
        subject: formArray.subject,
        to: [
            { email: 'info@saunawagon.de', name: 'Saunawagon' }
        ]
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
        console.log('API called successfully. Returned data: ' + data);

        M.toast({
            html: 'Ihre Nachricht wurde versendet!',
            classes: 'green'
        });

        $('form button').addClass('disabled').html('<i class="material-icons green-text">done</i>');

    }, function(error) {
        console.error(error);
    });
}