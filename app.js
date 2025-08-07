// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Función para cambiar el texto del h1 cada 2 segundos
function cambiarTextoH1() {
    let h1 = document.querySelector('.main-title');
    
    // Fijar las dimensiones del h1 para evitar que se muevan otros elementos
    h1.style.cssText = `
        min-height: 80px;
        max-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
        overflow: hidden;
        line-height: 1.2;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
    `;
    
    let mensajes = [
        'BIENVENIDOS', 
        'A LA APLICACION',
        'PARA SORTEAR', 
        'EL JUEGO DEL',
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
document.addEventListener('DOMContentLoaded', function() {
    cambiarTextoH1();
    configurarEventosInput();
});

// Función para configurar los eventos del input
function configurarEventosInput() {
    let inputAmigo = document.getElementById('amigo');
    
    if (!inputAmigo) {
        console.warn('Input "amigo" no encontrado');
        return;
    }
    
    // Remover eventos anteriores para evitar duplicados
    inputAmigo.removeEventListener('keypress', manejarEnterAgregarAmigo);
    
    // Agregar evento para detectar la tecla Enter
    inputAmigo.addEventListener('keypress', manejarEnterAgregarAmigo);
    
    // Enfocar automáticamente el input al cargar la página
    inputAmigo.focus();
}

// Función separada para manejar el evento Enter
function manejarEnterAgregarAmigo(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
}

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
    
    // Enfocar automáticamente el input para el siguiente nombre
    inputAmigo.focus();
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
        // Estilos para el contador de participantes
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
     // Estilos para los nombres de participantes
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

//_____________________________________________________________________________________

// Variables para el sistema de sorteo
let asignaciones = {}; // Objeto para guardar las asignaciones de amigo secreto
let participantesRestantes = []; // Array de participantes que aún no han sorteado
let yaSeRealizoSorteo = false; // Flag para saber si ya se realizó el sorteo inicial
let participantesIdentificados = []; // Array para guardar los participantes que ya se identificaron escribiendo su nombre

// Función principal para iniciar el sorteo
function sortearAmigo() {
    // Validar que haya al menos 2 participantes
    if (listaParticipantes.length < 2) {
        alert('Se necesitan al menos 2 participantes para realizar el sorteo');
        return;
    }
    
    // Siempre generar nuevas asignaciones cuando se inicia un sorteo
    generarAsignacionesSecretas();
    yaSeRealizoSorteo = true;
    
    // Mostrar la interfaz de sorteo individual
    mostrarInterfazSorteoIndividual();
}

// Función para generar todas las asignaciones de amigo secreto
function generarAsignacionesSecretas() {
    // Crear una copia del array de participantes para mezclar
    let participantesPorAsignar = [...listaParticipantes];
    let participantesReceptores = [...listaParticipantes];
    
    // Limpiar asignaciones anteriores
    asignaciones = {};
    
    // Mezclar el array de receptores
    for (let i = participantesReceptores.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [participantesReceptores[i], participantesReceptores[j]] = [participantesReceptores[j], participantesReceptores[i]];
    }
    
    // Asignar cada participante a otro, asegurándose de que nadie se tenga a sí mismo
    for (let i = 0; i < participantesPorAsignar.length; i++) {
        let participante = participantesPorAsignar[i];
        let receptor = participantesReceptores[i];
        
        // Si el participante se tiene a sí mismo, intercambiar con el siguiente
        if (participante === receptor) {
            let siguienteIndice = (i + 1) % participantesReceptores.length;
            [participantesReceptores[i], participantesReceptores[siguienteIndice]] = 
            [participantesReceptores[siguienteIndice], participantesReceptores[i]];
            receptor = participantesReceptores[i];
        }
        
        asignaciones[participante] = receptor;
    }
    
    // Copiar la lista de participantes para el sorteo individual
    participantesRestantes = [...listaParticipantes];
    
    console.log('Asignaciones generadas:', asignaciones);
}

// Función para mostrar la interfaz de sorteo individual
function mostrarInterfazSorteoIndividual() {
    // Ocultar la sección de agregar participantes
    let seccionInput = document.querySelector('.input-section');
    seccionInput.style.display = 'none';
    
    // Buscar si ya existe la sección de sorteo y eliminarla
    let seccionSorteoExistente = document.getElementById('seccion-sorteo-individual');
    if (seccionSorteoExistente) {
        seccionSorteoExistente.remove();
    }
    
    // Crear nueva sección de sorteo individual
    let seccionSorteo = document.createElement('section');
    seccionSorteo.id = 'seccion-sorteo-individual';
    seccionSorteo.className = 'sorteo-section';
    seccionSorteo.style.cssText = `
        text-align: center;
        padding: 20px;
        margin: 20px 0;
    `;
    
    // Insertar después del main-content
    let mainContent = document.querySelector('.main-content');
    mainContent.appendChild(seccionSorteo);
    
    // Crear el contenido de la sección de sorteo
    seccionSorteo.innerHTML = `
        <h2 style="color: #667eea; margin-bottom: 20px;">🎁 Sorteo Individual de Amigo Secreto</h2>
        <p style="font-size: 18px; margin-bottom: 20px;">
            Cada participante debe acercarse uno por uno para ver su amigo secreto
        </p>
        
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                    padding: 20px; border-radius: 15px; margin: 20px 0; color: white;">
            <h3>Participantes restantes por sortear: ${participantesRestantes.length}</h3>
        </div>
        
        <div id="participantes-sorteo-visual" style="margin: 20px 0;">
            <h3 style="color: #4a5568; margin-bottom: 15px;">👥 Lista de Participantes</h3>
        </div>
        
        <div style="margin: 20px 0;">
            <input type="text" id="input-participante-sorteo" 
                   placeholder="Escribe tu nombre para ver tu amigo secreto"
                   style="padding: 12px; font-size: 16px; border-radius: 8px; 
                          border: 2px solid #667eea; width: 300px; margin-right: 10px;">
            <button onclick="revelarAmigoSecreto()" 
                    style="padding: 12px 20px; font-size: 16px; background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%); 
                           color: white; border: none; border-radius: 8px; cursor: pointer;">
                Ver mi Amigo Secreto
            </button>
        </div>
        
        <div id="resultado-sorteo" style="margin: 20px 0; min-height: 100px;"></div>
        
        <button onclick="volverAgregarParticipantes()" 
                style="padding: 10px 15px; background: #6c757d; color: white; 
                       border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;">
            Volver a Agregar Participantes
        </button>
    `;
    
    // Mostrar los participantes en la pantalla de sorteo
    mostrarParticipantesEnSorteo();
    
    // Agregar evento para cambiar color al escribir en el input
    configurarEventoInputSorteo();
}

// Función para configurar el evento del input en la pantalla de sorteo
function configurarEventoInputSorteo() {
    let inputSorteo = document.getElementById('input-participante-sorteo');
    
    // Agregar evento para detectar cambios en el input
    inputSorteo.addEventListener('input', function() {
        let nombreEscrito = this.value.trim();
        resaltarParticipante(nombreEscrito);
    });
    
    // Agregar evento para detectar la tecla Enter
    inputSorteo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            revelarAmigoSecreto();
        }
    });
    
    // Enfocar automáticamente el input
    inputSorteo.focus();
}

// Función para resaltar el participante que está escribiendo
function resaltarParticipante(nombreEscrito) {
    let cajas = document.querySelectorAll('#cajas-participantes-sorteo .participante-caja-sorteo');
    
    cajas.forEach(caja => {
        let nombreParticipante = caja.textContent.replace(' ✓', '').trim();
        let yaeSorteo = !participantesRestantes.includes(nombreParticipante);
        let yaSeIdentifico = participantesIdentificados.includes(nombreParticipante);
        
        if (nombreEscrito.toLowerCase() === nombreParticipante.toLowerCase() && nombreEscrito !== '') {
            // Marcar como identificado si coincide exactamente
            if (!participantesIdentificados.includes(nombreParticipante)) {
                participantesIdentificados.push(nombreParticipante);
            }
            
            // Resaltar con color especial si coincide el nombre
            if (yaeSorteo) {
                // Si ya sorteó, mantener el estilo tachado pero con color diferente
                caja.style.cssText = `
                    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
                    color: white;
                    padding: 8px 15px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 500;
                    box-shadow: 0 5px 15px rgba(243, 156, 18, 0.5);
                    border: 3px solid #f39c12;
                    opacity: 1;
                    position: relative;
                    text-decoration: line-through;
                    transform: scale(1.1);
                    transition: all 0.3s ease;
                `;
            } else {
                // Si está pendiente, resaltar con color verde brillante
                caja.style.cssText = `
                    background: linear-gradient(135deg, #00b894 0%, #00a085 100%);
                    color: white;
                    padding: 8px 15px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 500;
                    box-shadow: 0 5px 15px rgba(0, 184, 148, 0.5);
                    border: 3px solid #00b894;
                    transform: scale(1.1);
                    transition: all 0.3s ease;
                    animation: glow 1s infinite alternate;
                `;
            }
        } else {
            // Aplicar estilo según el estado del participante
            if (yaeSorteo) {
                // Participante que ya sorteó - estilo desactivado
                caja.style.cssText = `
                    background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%);
                    color: white;
                    padding: 8px 15px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 500;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    border: 2px solid #7f8c8d;
                    opacity: 0.7;
                    position: relative;
                    text-decoration: line-through;
                `;
            } else if (yaSeIdentifico) {
                // Participante que se identificó pero aún no ha sorteado - color intermedio
                caja.style.cssText = `
                    background: linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%);
                    color: white;
                    padding: 8px 15px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 500;
                    box-shadow: 0 3px 8px rgba(108, 92, 231, 0.3);
                    border: 2px solid #6c5ce7;
                    transition: transform 0.2s ease;
                    position: relative;
                `;
                
                // Agregar indicador visual de "identificado"
                if (!caja.querySelector('.identificado-icon')) {
                    let iconoIdentificado = document.createElement('span');
                    iconoIdentificado.className = 'identificado-icon';
                    iconoIdentificado.innerHTML = ' 👁️';
                    iconoIdentificado.style.fontSize = '12px';
                    caja.appendChild(iconoIdentificado);
                }
                
                // Mantener efecto hover
                caja.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.05)';
                });
                
                caja.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            } else {
                // Participante pendiente sin identificar - estilo original
                caja.style.cssText = `
                    background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
                    color: white;
                    padding: 8px 15px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 500;
                    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
                    border: 2px solid #0984e3;
                    transition: transform 0.2s ease;
                    animation: pulse 2s infinite;
                `;
                
                // Mantener efecto hover
                caja.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.05)';
                });
                
                caja.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            }
        }
    });
    
    // Agregar CSS para la animación glow si no existe
    if (!document.getElementById('glow-animation-style')) {
        let style = document.createElement('style');
        style.id = 'glow-animation-style';
        style.textContent = `
            @keyframes glow {
                0% { box-shadow: 0 5px 15px rgba(0, 184, 148, 0.5); }
                100% { box-shadow: 0 8px 25px rgba(0, 184, 148, 0.8); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Función para mostrar participantes en la pantalla de sorteo con estado visual
function mostrarParticipantesEnSorteo() {
    let contenedorSorteo = document.getElementById('participantes-sorteo-visual');
    
    // Crear contenedor para las cajas de participantes si no existe
    let contenedorCajas = document.getElementById('cajas-participantes-sorteo');
    if (!contenedorCajas) {
        contenedorCajas = document.createElement('div');
        contenedorCajas.id = 'cajas-participantes-sorteo';
        contenedorCajas.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-top: 10px;
        `;
        contenedorSorteo.appendChild(contenedorCajas);
    }
    
    // Limpiar contenedor
    contenedorCajas.innerHTML = '';
    
    // Crear cajas para cada participante
    listaParticipantes.forEach(participante => {
        let yaeSorteo = !participantesRestantes.includes(participante);
        let yaSeIdentifico = participantesIdentificados.includes(participante);
        
        let cajaParticipante = document.createElement('div');
        cajaParticipante.className = 'participante-caja-sorteo';
        
        // Estilo según el estado del participante
        if (yaeSorteo) {
            // Participante que ya sorteó - estilo desactivado
            cajaParticipante.style.cssText = `
                background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%);
                color: white;
                padding: 8px 15px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 500;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                border: 2px solid #7f8c8d;
                opacity: 0.7;
                position: relative;
                text-decoration: line-through;
            `;
            
            // Agregar check mark
            let checkIcon = document.createElement('span');
            checkIcon.innerHTML = ' ✓';
            checkIcon.style.color = '#27ae60';
            checkIcon.style.fontWeight = 'bold';
            cajaParticipante.appendChild(document.createTextNode(participante));
            cajaParticipante.appendChild(checkIcon);
        } else if (yaSeIdentifico) {
            // Participante que se identificó pero aún no ha sorteado - color intermedio
            cajaParticipante.style.cssText = `
                background: linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%);
                color: white;
                padding: 8px 15px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 500;
                box-shadow: 0 3px 8px rgba(108, 92, 231, 0.3);
                border: 2px solid #6c5ce7;
                transition: transform 0.2s ease;
            `;
            
            // Agregar efecto hover
            cajaParticipante.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            cajaParticipante.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
            
            // Agregar texto e icono de identificado
            cajaParticipante.appendChild(document.createTextNode(participante));
            let iconoIdentificado = document.createElement('span');
            iconoIdentificado.className = 'identificado-icon';
            iconoIdentificado.innerHTML = ' 👁️';
            iconoIdentificado.style.fontSize = '12px';
            cajaParticipante.appendChild(iconoIdentificado);
        } else {
            // Participante pendiente sin identificar - estilo activo original
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
                animation: pulse 2s infinite;
            `;
            
            // Agregar efecto hover y animación
            cajaParticipante.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            cajaParticipante.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
            
            cajaParticipante.textContent = participante;
        }
        
        contenedorCajas.appendChild(cajaParticipante);
    });
    
    // Agregar CSS para la animación pulse
    if (!document.getElementById('pulse-animation-style')) {
        let style = document.createElement('style');
        style.id = 'pulse-animation-style';
        style.textContent = `
            @keyframes pulse {
                0% { box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); }
                50% { box-shadow: 0 5px 15px rgba(116, 185, 255, 0.4); }
                100% { box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Función para revelar el amigo secreto de un participante específico
function revelarAmigoSecreto() {
    let inputParticipante = document.getElementById('input-participante-sorteo');
    let nombreParticipante = inputParticipante.value.trim();
    let resultadoDiv = document.getElementById('resultado-sorteo');
    
    // Validar que el nombre no esté vacío
    if (nombreParticipante === '') {
        resultadoDiv.innerHTML = `
            <div style="background: #ff7675; color: white; padding: 15px; 
                        border-radius: 8px; margin: 10px 0;">
                ⚠️ Por favor, escribe tu nombre
            </div>`;
        return;
    }
    
    // Validar que el participante esté en la lista
    if (!listaParticipantes.includes(nombreParticipante)) {
        resultadoDiv.innerHTML = `
            <div style="background: #ff7675; color: white; padding: 15px; 
                        border-radius: 8px; margin: 10px 0;">
                ❌ No estás en la lista de participantes
            </div>`;
        return;
    }
    
    // Validar que el participante no haya sorteado ya
    if (!participantesRestantes.includes(nombreParticipante)) {
        resultadoDiv.innerHTML = `
            <div style="background: #fdcb6e; color: #2d3436; padding: 15px; 
                        border-radius: 8px; margin: 10px 0;">
                ⚠️ Ya has visto tu amigo secreto
            </div>`;
        return;
    }
    
    // Obtener el amigo secreto asignado
    let amigoSecreto = asignaciones[nombreParticipante];
    
    // Mostrar el resultado
    resultadoDiv.innerHTML = `
        <div style="background: linear-gradient(135deg, #00b894 0%, #00a085 100%); 
                    color: white; padding: 20px; border-radius: 15px; margin: 20px 0;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);">
            <h3 style="margin-bottom: 15px;">🎉 ¡Tu Amigo Secreto es!</h3>
            <h2 style="font-size: 28px; margin: 15px 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                ${amigoSecreto}
            </h2>
            <p style="margin-top: 15px; font-style: italic;">
                ¡Recuerda mantenerlo en secreto! 🤫
            </p>
        </div>
        
        <button onclick="siguienteParticipante('${nombreParticipante}')" 
                style="padding: 12px 20px; background: #74b9ff; color: white; 
                       border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">
            Siguiente Participante
        </button>
    `;
    
    // Limpiar el input
    inputParticipante.value = '';
}

// Función para continuar con el siguiente participante
function siguienteParticipante(participanteActual) {
    // Remover al participante actual de la lista de restantes
    participantesRestantes = participantesRestantes.filter(p => p !== participanteActual);
    
    // Limpiar el resultado
    document.getElementById('resultado-sorteo').innerHTML = '';
    
    // Actualizar el contador de participantes restantes
    let contadorDiv = document.querySelector('#seccion-sorteo-individual div[style*="linear-gradient"]');
    contadorDiv.innerHTML = `<h3>Participantes restantes por sortear: ${participantesRestantes.length}</h3>`;
    
    // Actualizar la visualización de participantes
    mostrarParticipantesEnSorteo();
    
    // Si no quedan más participantes, mostrar mensaje final
    if (participantesRestantes.length === 0) {
        document.getElementById('resultado-sorteo').innerHTML = `
            <div style="background: linear-gradient(135deg, #e17055 0%, #d63031 100%); 
                        color: white; padding: 25px; border-radius: 15px; margin: 20px 0;">
                <h2>🎊 ¡Sorteo Completado!</h2>
                <p style="font-size: 18px; margin-top: 10px;">
                    Todos los participantes ya conocen su amigo secreto
                </p>
                <p style="margin-top: 15px; font-style: italic;">
                    ¡Que disfruten el intercambio de regalos! 🎁
                </p>
            </div>`;
    }
}

// Función para volver a la pantalla de agregar participantes
function volverAgregarParticipantes() {
    // Mostrar la sección de input
    let seccionInput = document.querySelector('.input-section');
    seccionInput.style.display = 'block';
    
    // Remover completamente la sección de sorteo para evitar conflictos
    let seccionSorteo = document.getElementById('seccion-sorteo-individual');
    if (seccionSorteo) {
        seccionSorteo.remove();
    }
    
    // Resetear variables del sorteo para permitir un nuevo sorteo
    yaSeRealizoSorteo = false;
    participantesRestantes = [];
    participantesIdentificados = [];
    asignaciones = {};
    
    // Reconfigurar eventos del input principal
    configurarEventosInput();
    
    // Limpiar estilos dinámicos que puedan causar conflictos
    let stylesIds = ['pulse-animation-style', 'glow-animation-style'];
    stylesIds.forEach(id => {
        let existingStyle = document.getElementById(id);
        if (existingStyle) {
            existingStyle.remove();
        }
    });
    
    // Mostrar mensaje de confirmación en consola para debug
    console.log('Volviendo a pantalla principal - Variables reseteadas y elementos limpiados');
}

//____________________________________________________________________________________________




