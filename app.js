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

//_____________________________________________________________________________________

// Array para almacenar los nombres de los participantes
let listaParticipantes = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Obtener el input donde se escribe el nombre
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    // Validar que el nombre no esté repetido
    if (listaParticipantes.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista');
        inputAmigo.value = '';
        return;
    }
    
    // Agregar el nombre al array de participantes
    listaParticipantes.push(nombreAmigo);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Actualizar el contador y la lista visual de participantes
    actualizarContador();
    
    // Mostrar el nombre agregado en el DOM
    mostrarParticipanteAgregado(nombreAmigo);
}

// Función para actualizar el contador de participantes
function actualizarContador() {
    // Buscar si existe un elemento contador, si no, crearlo
    let contador = document.getElementById('contador-participantes');
    
    if (!contador) {
        // Crear el elemento contador
        contador = document.createElement('p');
        contador.id = 'contador-participantes';
        contador.className = 'contador-texto';
        contador.style.cssText = `
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            margin: 15px 0;
            text-align: center;
            font-weight: bold;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: 2px solid #5a67d8;
        `;
        
        // Insertarlo después del input-wrapper
        let inputWrapper = document.querySelector('.input-wrapper');
        inputWrapper.insertAdjacentElement('afterend', contador);
    }
    
    // Actualizar el texto del contador
    contador.textContent = `Participantes agregados: ${listaParticipantes.length}`;
}

// Función para mostrar el participante agregado en el DOM
function mostrarParticipanteAgregado(nombre) {
    // Buscar si existe el contenedor de participantes, si no, crearlo
    let contenedorParticipantes = document.getElementById('lista-participantes-visual');
    
    if (!contenedorParticipantes) {
        // Crear el contenedor de participantes
        contenedorParticipantes = document.createElement('div');
        contenedorParticipantes.id = 'lista-participantes-visual';
        contenedorParticipantes.style.cssText = `
            margin: 15px 0;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        `;
        
        // Insertarlo después del contador
        let contador = document.getElementById('contador-participantes');
        contador.insertAdjacentElement('afterend', contenedorParticipantes);
    }
    
    // Crear la caja del participante
    let cajaParticipante = document.createElement('div');
    cajaParticipante.className = 'participante-caja';
    cajaParticipante.style.cssText = `
        background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
        color: white;
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
        border: 2px solid #0984e3;
        transition: transform 0.2s ease;
    `;
    
    // Agregar efecto hover
    cajaParticipante.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    cajaParticipante.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    cajaParticipante.textContent = nombre;
    
    // Agregar la caja al contenedor
    contenedorParticipantes.appendChild(cajaParticipante);
}






