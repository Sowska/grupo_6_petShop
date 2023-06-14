const decrementarBtn = document.getElementById('down');
const incrementarBtn = document.getElementById('up');
const cantidadInput = document.getElementById('quantity');

decrementarBtn.addEventListener('click', () => {
    if (parseInt(cantidadInput.value) > 1) {
        cantidadInput.value = parseInt(cantidadInput.value) - 1;
    }
});

incrementarBtn.addEventListener('click', () => {
    if (parseInt(cantidadInput.value) < 10) {
        cantidadInput.value = parseInt(cantidadInput.value) + 1;
    }
});