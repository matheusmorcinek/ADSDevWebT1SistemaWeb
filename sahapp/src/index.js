function inputEmailValidation(event) {

    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(event.target.value)) {


        document.getElementById('email-error').style.display = 'none';
        document.getElementById('entrar-btn').disabled = false;
    } else {

        document.getElementById('email-error').style.display = 'inline';
    }

}

let inputEmailElement = document.getElementById('email');
inputEmailElement.addEventListener('input', inputEmailValidation);
inputEmailElement.addEventListener('change', inputEmailValidation);

