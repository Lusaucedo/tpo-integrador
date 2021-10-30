const inputEmail = document.getElementById("radEmail");
const inputTel = document.getElementById("radTel");
const contact = document.getElementById("contact");

inputEmail.addEventListener('change', (event) => {
    if (inputEmail.checked) {
        contact.setAttribute("placeholder", "Ingrese su correo electrónico");
        contact.setAttribute("type", "email");
    }
})

inputTel.addEventListener('change', (event) => {
    if (inputTel.checked) {
        contact.setAttribute("placeholder", "Ingrese su teléfono");
        contact.setAttribute("type", "text");
    }
})

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
// });

var fields = {};
document.addEventListener("DOMContentLoaded", function() {
    fields.name = document.getElementById('name');
    fields.lastname = document.getElementById('lastname');
    fields.contact = document.getElementById('contact');
    fields.comments = document.getElementById('comments');
})

function sendForm() {
    var validForm = true;

    validForm &= validateField(fields.name);
    validForm &= validateField(fields.lastname);
    validForm &= validateField(fields.contact);
    validForm &= validateField(fields.comments);

    if (inputEmail.checked) {
        validForm &= isEmail(fields.contact.value);
    } else if (inputTel.checked) {
        validForm &= isNumber(fields.contact.value);
    }

    if (validForm) {
        // MENSAJE 
        alert("TODO OK");
    } else {
        // form invalido
        alert("TODO MAL");
    }
}

function validateField(field) {
    if (isNotEmpty(field.value)) {
        (field).classList.remove('placeholderRed');
        return true;
    } else {
        (field).classList.add('placeholderRed');
        return false;
    }
}

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}