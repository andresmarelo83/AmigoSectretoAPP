// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Función para cambiar el texto del h1 cada 2 segundos
function cambiarTextoH1() {
    let h1 = document.querySelector('.main-title');
    let mensajes = [
        'BIENVENIDOS', 
        'A LA APLICACION',
        'PARA SORTEAR EL JUEGO DEL',
        'AMIGO SECRETO.'
    ];
    
    let indice = 0;
    
    // Función para actualizar el texto
    function actualizarTexto() {
        h1.textContent = mensajes[indice];
        indice = (indice + 1) % mensajes.length;
    }
    
    // Cambiar el texto inmediatamente
    actualizarTexto();
    
    // Configurar el intervalo para cambiar cada 2 segundos
    setInterval(actualizarTexto, 2000);
}

// Iniciar la función cuando se carga la página
document.addEventListener('DOMContentLoaded', cambiarTextoH1);






