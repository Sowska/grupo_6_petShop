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
        function validation2(field,  message) {
            const value = form[field].value
            if ( value!='Perro'||value!='Gato' ) {
                errors.push({ field, message })
            }
        }
        console.log(form[category]);

        function validateImg(field,messge){
            const image = form[profile_pic].files[0]
            if(!image>1000){
                errors.push({field,messge})
            }
        }


  
        validation('name', 'Debe ingresar Nombre del producto');
        validation('price','Debe ingresar precio unitario');
        validation('material','Debe agregar material');
        validation('size','Debe ingresar la talla');
        validation('description','Ingrese una description Min 20 Characteres');
        validation2('category','Debe Ingresar la categoria'); 

        


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