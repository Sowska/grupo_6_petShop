function selectDiscount(hasDiscount) {
    var discount = document.getElementById('discount');

    if (hasDiscount) {
      discount.disabled = false;
    } else {
      discount.disabled = true;
    }
  }