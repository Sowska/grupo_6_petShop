window.addEventListener('load', () => {

    const buttonCheckout = document.getElementById('checkout');

    buttonCheckout.addEventListener('click', async () => {
        const response = await fetch('pago/create-order', {
            method: 'POST'
        });
        const data = await response.json();
        console.log();
        window.location.href = data.init_point;
    })
})

