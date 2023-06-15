var promoCode;
var promoPrice;
var fadeTime = 300;

document.querySelectorAll(".quantity input").forEach(function (input) {
    input.addEventListener("change", function () {
        updateQuantity(this);
    });
});

document.querySelectorAll(".remove button").forEach(function (button) {
    button.addEventListener("click", function () {
        removeItem(this);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    updateSumItems();
});

document.querySelector(".promo-code-cta").addEventListener("click", function () {
    promoCode = document.getElementById("promo-code").value;

    if (promoCode === "10off" || promoCode === "10OFF") {
        if (!promoPrice) {
            promoPrice = 10;
        } else if (promoCode) {
            promoPrice = promoPrice * 1;
        }
    } else if (promoCode !== "") {
        alert("Codigo de descuento Invalido");
        promoPrice = 0;
    }

    if (promoPrice) {
        document.querySelector(".summary-promo").classList.remove("hide");
        document.querySelector(".promo-value").textContent = promoPrice.toFixed(2);
        recalculateCart(true);
    }
});

/* Recalculate cart */
function recalculateCart(onlyTotal) {
    var subtotal = 0;

    /* Sum up row totals */
    document.querySelectorAll(".basket-product").forEach(function (product) {
        subtotal += parseFloat(product.querySelector(".subtotal").textContent);
    });

    /* Calculate totals */
    var total = subtotal;

    var promoPrice = parseFloat(document.querySelector(".promo-value").textContent);
    if (promoPrice) {
        if (subtotal >= 10000) {
            total -= promoPrice;
        } else {
            alert("Tu compra debe ser mayor a 10000 para aplicar el descuento");
            document.querySelector(".summary-promo").classList.add("hide");
        }
    }

    if (onlyTotal) {
        /* Update total display */
        var totalValue = document.querySelector(".total-value");
        totalValue.style.display = "none";
        totalValue.innerHTML = total.toFixed(2);
        totalValue.style.display = "block";
    } else {
        /* Update summary display */
        var finalValue = document.querySelector(".final-value");
        finalValue.style.display = "none";
        document.querySelector("#basket-subtotal").innerHTML = subtotal.toFixed(2);
        document.querySelector("#basket-total").innerHTML = total.toFixed(2);
        if (total === 0) {
            document.querySelector(".checkout-cta").style.display = "none";
        } else {
            document.querySelector(".checkout-cta").style.display = "block";
        }
        finalValue.style.display = "block";
    }
}

/* Update quantity */
function updateQuantity(quantityInput) {
    var productRow = quantityInput.parentNode.parentNode;
    var price = parseFloat(productRow.querySelector(".price").textContent);
    var quantity = quantityInput.value;
    var linePrice = price * quantity;

    productRow.querySelectorAll(".subtotal").forEach(function (subtotal) {
        subtotal.style.display = "none";
        subtotal.textContent = linePrice.toFixed(2);
        recalculateCart();
        subtotal.style.display = "block";
    });

    productRow.querySelector(".item-quantity").textContent = quantity;
    updateSumItems();
}

function updateSumItems() {
    var sumItems = 0;
    document.querySelectorAll(".quantity input").forEach(function (input) {
        sumItems += parseInt(input.value);
    });
    document.querySelector(".total-items").textContent = sumItems;
}

function removeItem(elemento) {
    var contenedorPadre = elemento.closest('.basket-product'); 
    if (contenedorPadre) {
      contenedorPadre.remove();
    }
  }