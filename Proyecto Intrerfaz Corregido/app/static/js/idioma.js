const textos = {
    es: {
        titulo: "Portal abierto con datos geológicos y riesgos naturales",
        descripcion: "Consulta información precisa y actualizada sobre zonas de riesgo en el país.",
        zonas: ["Zona 1: Región Andina", "Zona 2: Región Andina", "Zona 3: Región Andina"],
        detalles: "Datos geológicos y alertas disponibles.",
        boton: "Ver detalles",
        op1:"Inicio",
        op2:"Buscar zona",
        op3:"Visualizar datos",
        op4:"Descargar datos",
        op5:"Alertas recientes",
        op6:"Registrarse",
        idiomaBtn:"Idioma ▾",
        op7:"Español",
        op8:"Inglés",
        op9:"buscar",
        descripcionRegistro: "GeoDataLibre es una plataforma interactiva que te permite acceder a información detallada y actualizada sobre zonas con riesgos naturales en todo el país. Recibe alertas tempranas, consulta sobre datos geológicos y contribuye a la seguridad de tu comunidad. Para acceder a funcionalidades personalizadas y guardar tus consultas, te invitamos a registrarte o iniciar sesión en el sistema.",
        formTituloR: "Registrar Nuevo Usuario",
        labelTelefono: "Número de Teléfono:",
        labelCorreo: "Correo Electrónico:",
        labelPassword: "Contraseña:",
        btnRegistrar: "Registrar",
        formTitulo: "Iniciar Sesión",
        btnLogin: "Iniciar",
        linkLogin: "Tienes cuenta?",
        msgCamposRequeridos: "Correo y contraseña son obligatorios.",
        msgExito: "Inicio de sesión exitoso",
        msgError: "Error al iniciar sesión.",
        msgUsuarioNoEncontrado: "Usuario no encontrado.",
        msgPasswordIncorrecta: "Contraseña incorrecta.",
        msgCamposRegistro: "Todos los campos son obligatorios.",
        msgRegistroExito: "Usuario creado exitosamente.",
        msgErrorRegistro: "Error al registrar usuario.",
        op10:"Revisión de Datos",
        op11:"Ver Reportes",
        op12:"Alertas recientes",
        perfilBtn:"Perfil",
        op14:"Modificar datos",
        op15:"Cerrar sesión",
        op16:"Gestion de Usuarios",
        op17:"Revisión de Datos",
        op18:"Ver Reportes",


    },
    en: {
        titulo: "Open portal with geological data and natural hazards",
        descripcion: "Get accurate and updated information about risk areas in the country.",
        zonas: ["Zone 1: Andean Region", "Zone 2: Andean Region", "Zone 3: Andean Region"],
        detalles: "Geological data and alerts available.",
        boton: "View details",
        op1:"Home",
        op2:"Search Area",
        op3:"View Data",
        op4:"Download Data",
        op5:"Recent Alerts",
        op6:"Register",
        idiomaBtn:"Language ▾",
        op7:"Spanish",
        op8:"English",
        op9:"Search",
        descripcionRegistro: "GeoDataLibre is an interactive platform that allows you to access detailed and updated information about areas with natural risks throughout the country. Receive early alerts, consult geological data, and contribute to your community's safety. To access personalized features and save your queries, we invite you to register or log in.",
        formTituloR: "Register New User",
        labelTelefono: "Phone Number:",
        labelCorreo: "Email Address:",
        labelPassword: "Password:",
        btnRegistrar: "Register",
        // ✅ Textos de Login/Registro
        formTitulo: "Login",
        btnLogin: "Login",
        linkLogin: "Do you have an account?",
        msgCamposRequeridos: "Email and password are required.",
        msgExito: "Login successful",
        msgError: "Login error.",
        msgUsuarioNoEncontrado: "User not found.",
        msgPasswordIncorrecta: "Incorrect password.",
        msgCamposRegistro: "All fields are required.",
        msgRegistroExito: "User successfully created.",
        msgErrorRegistro: "Error registering user.",
        op10:"Data Review",
        op11:"View Reports",
        op12:"Recent Alerts",
        perfilBtn:"Profile",
        op14:"Edit Data",
        op15:"Logout",
        op16:"User Management",
        op17:"Data Review",
        op18:"View Reports",

        
    }
};

function cambiarIdioma(idioma) {
    const traducciones = textos[idioma];

    // Mapeo de IDs con las claves del objeto textos
    const idsMap = {
        titulo: 'titulo',
        descripcion: 'descripcion',
        zona1: 'zonas[0]',
        zona2: 'zonas[1]',
        zona3: 'zonas[2]',
        detalle1: 'detalles',
        detalle2: 'detalles',
        detalle3: 'detalles',
        btn1: 'boton',
        btn2: 'boton',
        btn3: 'boton',
        op1: 'op1',
        op2: 'op2',
        op3: 'op3',
        op4: 'op4',
        op5: 'op5',
        op6: 'op6',
        idiomaBtn: 'idiomaBtn',
        op7: 'op7',
        op8: 'op8',
        op9: 'op9',
        formTituloR: 'formTituloR',
        descripcionRegistro: 'descripcionRegistro',
        formTitulo: 'formTitulo',
        labelTelefono: 'labelTelefono',
        labelCorreo: 'labelCorreo',
        labelPassword: 'labelPassword',
        btnRegistrar: 'btnRegistrar',
        btnLogin: 'btnLogin',
        linkLogin: 'linkLogin',
        msgCamposRequeridos: 'msgCamposRequeridos',
        msgExito: 'msgExito',
        msgError: 'msgError',
        op10: 'op10',
        op11: 'op11',
        op12: 'op12',
        op13: 'op13',
        perfilBtn: 'perfilBtn', 
        op14: 'op14',
        op15: 'op15',
        op16: 'op16',
        op17: 'op17',   
        op18: 'op18',
    };

    // Recorremos el mapa y actualizamos si el elemento existe
    for (const [id, key] of Object.entries(idsMap)) {
        const element = document.getElementById(id);
        if (element) {
            if (key.includes('zonas')) {
                const index = parseInt(key.match(/\d+/)[0]); // Extrae índice
                element.innerText = traducciones.zonas[index];
            } else {
                element.innerText = traducciones[key];
            }
        }
    }
}



// Eventos en el menú
document.addEventListener('DOMContentLoaded', function () {
    const menuIdioma = document.querySelectorAll('#idiomaMenu a');
    if (menuIdioma.length >= 2) {
        menuIdioma[0].addEventListener('click', (e) => {
            e.preventDefault();
            cambiarIdioma('es'); // Español
            localStorage.setItem('idioma', 'es'); // ✅ Guardar idioma
        });
        menuIdioma[1].addEventListener('click', (e) => {
            e.preventDefault();
            cambiarIdioma('en'); // Inglés
            localStorage.setItem('idioma', 'en'); // ✅ Guardar idioma
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Aplicar el idioma guardado
    const idiomaGuardado = localStorage.getItem('idioma') || 'es';
    cambiarIdioma(idiomaGuardado);

    // Eventos en el menú
    const menuIdioma = document.querySelectorAll('#idiomaMenu a');
    if (menuIdioma.length >= 2) {
        menuIdioma[0].addEventListener('click', (e) => {
            e.preventDefault();
            cambiarIdioma('es');
        });
        menuIdioma[1].addEventListener('click', (e) => {
            e.preventDefault();
            cambiarIdioma('en');
        });
    }
});



