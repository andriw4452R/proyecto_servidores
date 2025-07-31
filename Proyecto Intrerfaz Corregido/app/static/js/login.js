document.getElementById('form-login').addEventListener('submit', function (e) {
    e.preventDefault();

    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    const mensaje = document.getElementById('mensaje');

    // ✅ Obtener idioma actual
    const idiomaActual = localStorage.getItem('idioma') || 'es';
    const traducciones = textos[idiomaActual];

    // Validación en frontend (igual que en registro)
    if (!correo || !password) {
        mensaje.innerText = traducciones.msgCamposRequeridos;
        mensaje.style.color = 'red';
        return;
    }

    // Petición al endpoint de login
    fetch('/usuarios/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo, password })
    })
    .then(async response => {
        const data = await response.json();
        //mensaje.innerText = data.message || data.error;

        // Color del mensaje según éxito o error
        if (response.ok) {
            mensaje.innerText = traducciones.msgExito; // ✅ Mensaje de éxito
            mensaje.style.color = 'green';
            console.log('Usuario autenticado:', data.usuario);

            setTimeout(() =>{
                if(data.usuario.role === 'admin') {
                    window.location.href = '/administrador';
                } else{
                    // Redirigir (opcional)
                    window.location.href = '/sesion';

                }    
            },1600);
            
        } else {
            // ✅ Detectar error del backend y traducirlo
            let errorTraducido = traducciones.msgError; // Por defecto
            if (data.error.includes("Usuario no encontrado")) {
                errorTraducido = traducciones.msgUsuarioNoEncontrado;
            } else if (data.error.includes("Contraseña incorrecta")) {
                errorTraducido = traducciones.msgPasswordIncorrecta;
            } else if (data.error.includes("Correo y contraseña")) {
                errorTraducido = traducciones.msgCamposRequeridos;
            }
            mensaje.innerText = errorTraducido;
            mensaje.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mensaje.innerText = traducciones.msgError; // ✅ Mensaje de error
        mensaje.style.color = 'red';
    });
});
