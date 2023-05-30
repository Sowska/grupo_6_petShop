
let errors = [];
let nameField = document.querySelector("[name=name]");
let descriptionField = document.querySelector("[name=description]");
let priceField = document.querySelector("[name=price]");
let imgField = document.querySelector("[name=new-product-img]");

const setErrors = (message, field, isError) => {
    if(isError){
        field.classList.add("is-invalid")
        field.nextElementSibling.classList.add("text-danger")
        field.nextElementSibling.innerText = message;
        errors.push(message)
    } else {
        field.classList.remove("is-invalid")
        field.nextElementSibling.classList.remove("text-danger")
        field.nextElementSibling.innerText = "";
        errors = errors.filter(function(msg){ return msg !== message})
    }
}

const validateEmptyField = (message, charlim, e) => {
        const field = e.target
        const fieldValue = e.target.value;
        if(fieldValue.trim().length < charlim){
            setErrors(message, field, true)
        } else {
            setErrors(message, field, false)
        }
}

nameField.addEventListener("blur", (e) => validateEmptyField("El nombre del producto debe tener al menos 5 caracteres",5, e));

descriptionField.addEventListener("blur", (e) => validateEmptyField("Debes incluir una descripción de al menos 20 caracteres",20, e));

priceField.addEventListener("blur", (e) => validateEmptyField("Debes incluir el precio para tu producto",1, e));

imgField.addEventListener("change", (e) => {
    const field = e.target
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const fileExtension = e.target.files[0].name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
        field.classList.add("is-invalid")
        field.nextElementSibling.classList.add("text-danger")
        field.nextElementSibling.innerText = `Las extensiones de archivo válidas son ${allowedExtensions.join(", ")}`;
        errors.push("Extensiones invalidas")
    }else {
        field.classList.remove("is-invalid")
        field.nextElementSibling.classList.remove("text-danger")
        field.nextElementSibling.innerText = "";
        errors = errors.filter(function(msg){ return msg !== "Extensiones invalidas"})
    }
})

