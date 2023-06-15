document.getElementById('edit-product-img').onchange = function (evt) {
    console.log("se obtuvo el edit")
    var selectedImage = evt.currentTarget.files[0];
    var imageWrapper = document.querySelector('.image-wrapper'); //selecciona el div donde esta la img
    var theImage = document.createElement('img');
    imageWrapper.innerHTML = '';

    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png)$/;
    if (regex.test(selectedImage.name.toLowerCase())) {
        if (typeof (FileReader) != 'undefined') {
            console.log("se ingreso al regex")
            var reader = new FileReader();
            reader.onload = function (e) {
                theImage.id = 'new-selected-image';
                theImage.src = e.target.result;
                imageWrapper.appendChild(theImage);
            }
            //
            reader.readAsDataURL(selectedImage);
        } else {
            console.log('browser support issue');
        }
    } else {
        $(this).prop('value', null);
        console.log('please select and image file');
    }

};

