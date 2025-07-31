document.getElementById('form-registro').addEventListener('submit', function (e) {
    e.preventDefault();

    const numero = document.getElementById('numero').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    const mensaje = document.getElementById('mensaje');

    // ✅ Obtener idioma actual
    const idiomaActual = localStorage.getItem('idioma') || 'es';
    const traducciones = textos[idiomaActual];

    // Validación en frontend (opcional pero recomendado)
    if (!numero || !correo || !password) {
        mensaje.innerText = traducciones.msgCamposRegistro;
        mensaje.style.color = 'red';
        return;
    }

    fetch('/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numero, correo, password })
    })
    .then(async response => {
        const data = await response.json();
        mensaje.innerText = data.message || data.error;

        // Color del mensaje según éxito o error
        //mensaje.style.color = response.ok ? 'green' : 'red';

        if (response.ok) {
            mensaje.innerText = traducciones.msgRegistroExito;
            mensaje.style.color = 'green';

            // ✅ Redirigir después de 1.5 segundos
            setTimeout(() => {
                window.location.href = '/sesion'; // Cambia '/login' por tu ruta real
            }, 1500);
        } else {
            let errorTraducido = traducciones.msgErrorRegistro; // Por defecto
            if (data.error?.includes("Todos los campos")) {
                errorTraducido = traducciones.msgCamposRegistro;
            }

            mensaje.innerText = errorTraducido;
            mensaje.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mensaje.innerText =  traducciones.msgErrorRegistro;
        mensaje.style.color = 'red';
    });
});
