function additionalImages(checked) {
    var additionalImagesInputs = document.querySelectorAll('.add-img-input');
  
    additionalImagesInputs.forEach(function(input) {
      input.disabled = !checked;
    });
  }