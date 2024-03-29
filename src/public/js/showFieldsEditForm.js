window.onload = () => {
    let categoryField = document.querySelector(".category-field").innerText;
    switch (categoryField) {
        case "Accesorios":
            document.getElementById('color-div').style.display = 'grid';
            document.getElementById('material-div').style.display = 'grid';
            document.getElementById('fragrance-div').style.display = 'none';
            document.getElementById('flavor-div').style.display = 'none';
            document.getElementById('size-div').style.display = 'none';
            break;

        case "Alimentos":
            document.getElementById('color-div').style.display = 'none';
            document.getElementById('material-div').style.display = 'none';
            document.getElementById('fragrance-div').style.display = 'none';
            document.getElementById('flavor-div').style.display = 'grid';
            document.getElementById('size-div').style.display = 'none';
            break;

        case "Higiene":
            document.getElementById('color-div').style.display = 'none';
            document.getElementById('material-div').style.display = 'none';
            document.getElementById('fragrance-div').style.display = 'grid';
            document.getElementById('flavor-div').style.display = 'none';
            document.getElementById('size-div').style.display = 'none';
            break;

        case "Indumentaria":
            document.getElementById('color-div').style.display = 'grid';
            document.getElementById('material-div').style.display = 'grid';
            document.getElementById('fragrance-div').style.display = 'none';
            document.getElementById('flavor-div').style.display = 'none';
            document.getElementById('size-div').style.display = 'grid';
            break;
    }
};

/* document.addEventListener('DOMContentLoaded', function () {
    // Código JavaScript que se ejecuta cuando el DOM se ha cargado completamente
    // Aquí puedes acceder y manipular elementos del DOM
    var elemento = document.querySelector(".category-field");
    var valor = elemento.textContent;
    console.log(valor);
}); */