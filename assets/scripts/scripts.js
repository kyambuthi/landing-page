/** landing-page scripts.js | MIT LICENSE 2021 | kyambuthi */

const clientEmail = document.getElementById('emailInput');

clientEmail.addEventListener('input', function(e){
    console.log(e);
    if(clientEmail.validity.typeMismatch) {
        clientEmail.setCustomValidity('please enter a valid email address.');
    }
});