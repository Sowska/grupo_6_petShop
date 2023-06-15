window.onload = function () {

    //------VALIDACIONES DEL FORMULARIO //
    const form = document.querySelector('form');

    console.log(form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const allErrorLabels = document.querySelectorAll('.error-message');
        allErrorLabels.forEach(element => {
            element.innerHTML = '';
        });

        const errors = [];

       

        function validation(field, reg, message) {
            const value = form[field].value
            if (! reg.test(value) ) {
                errors.push({ field, message })
            }
        }

        function validateImg(field,messge){
            const image = form[profile_pic].files[0]
            if(!image>1000){
                errors.push({field,messge})
            }
        }


        validation('name', /^[a-zA-Z ]+$/, 'Debe ingresar un nombre valido')
        validation('lastName', /^[a-zA-Z ]+$/, 'Debe ingresar un apellido valido')
        validation('email', /^\S+@\S+\.\S+$/, 'Debe ingresar un email valido');
        validation('password', /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/,'La contraseña debe tener mas de 8 caracteres e incluir caracteres especiales')
        /* validateImg('profile_pic','La imagen es demasiado grande') */

        errors.forEach(error=>{
            const fieldLabel = document.querySelector('#'+error.field);
            fieldLabel.classList.add('is-invalid');
            console.log(fieldLabel);
            const errorLabel = document.querySelector('#error-'+error.field);
            errorLabel.innerHTML=error.message;
        })
        if(errors.length === 0){
            form.submit();
        }

    });
}