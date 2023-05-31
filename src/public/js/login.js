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

       

        function validation(field,  message) {
            const value = form[field].value
            if (! value ) {
                errors.push({ field, message })
            }
        }

        function validateImg(field,messge){
            const image = form[profile_pic].files[0]
            if(!image>1000){
                errors.push({field,messge})
            }
        }


  
        validation('email', 'Debe ingresar un email valido');
        validation('password','Debe Ingresar la contraseña')


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