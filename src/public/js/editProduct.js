const form = document.querySelector('form');

let imgField = document.querySelector("#new-product");
form.addEventListener('submit', (e) => {
    e.preventDefault();

    imgField.addEventListener('change', (e) => {
        const field = e.target
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        const fileExtension = e.target.files[0].name.split(".").pop().toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            field.classList.add("is-invalid")
            field.nextElementSibling.classList.add("text-danger")
            field.nextElementSibling.innerText = `Las extensiones de archivo válidas son ${allowedExtensions.join(", ")}`;
            errors.push("image","Extensiones invalidas")
        }else {
            field.classList.remove("is-invalid")
            field.nextElementSibling.classList.remove("text-danger")
            field.nextElementSibling.innerText = "";
           /*  errors = errors.filter(function(msg){ return msg !== "image","Extensiones invalidas"}) */
        } 
    })

    const allErrorLabels = document.querySelectorAll('.error-message');
    allErrorLabels.forEach(element => {
        element.innerHTML = '';
    });

    const errors = [];

    function validation(field, reg, message, messageRgx) {
        const value = form[field].value;
        if (value === null) {
            errors.push({ field, message });
        } else if (!reg.test(value)) {
            errors.push({ field, messageRgx });
        }
    }


    validation('name', /^[a-zA-Z ]+$/, 'Debe ingresar un nombre valido', 'Debe tener una letra mayuscula');
    validation('description', /^[a-zA-Z ]{20}$/, 'Debe ingresar descricion', 'Debe tener mas de 20 caracteres');
    validation('price', /^[0-9]+$/, 'Debe ingresar un precio valido', 'Debe ser numero');
    validation('material', /^[a-zA-Z ]+$/, 'Debe ingresar un material valido', 'Debe tener una mayuscula');
    validation('size', /^[a-zA-Z ]+$/, 'Debe ingresar una talla valida', 'Debe tener una mayuscula');
    validation('category', /^[a-z]+$/, 'Debe ingresar un categoria valida', 'Debe seleccionar una categoria');

    validation('password', /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/, 'La contraseña debe tener mas de 8 caracteres e incluir caracteres especiales')

    
    errors.forEach(error => {
        const fieldLabel = document.querySelector('#' + error.field);
        fieldLabel.classList.add('is-invalid');
        console.log(fieldLabel);
        const errorLabel = document.querySelector('#error-' + error.field);
        errorLabel.innerHTML = error.message;
    })
    if (errors.length === 0) {
        form.submit();
    }


});
