# 🎁 Aplicación de Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y privada.

## 📝 Descripción

Esta aplicación permite organizar un sorteo de amigo secreto donde cada participante puede descubrir de forma individual y privada quién es su amigo secreto asignado. La aplicación cuenta con una interfaz visual atractiva, animaciones dinámicas y un sistema de navegación intuitivo.

## ✨ Características Principales

### 🎯 Funcionalidades Core
- **Gestión de Participantes**: Agregar múltiples participantes con validación de nombres únicos
- **Sorteo Automático**: Algoritmo que asegura que nadie se sortee a sí mismo
- **Revelación Individual**: Cada participante ve su amigo secreto de forma privada
- **Navegación Fluida**: Sistema de pantallas con transiciones suaves

### 🎨 Interfaz y Experiencia
- **Texto Animado**: El título cambia cada 2 segundos con mensajes de bienvenida
- **Indicadores Visuales**: Colores dinámicos que muestran el estado de cada participante
- **Efectos Interactivos**: Animaciones hover, pulse y glow para mejor experiencia
- **Diseño Responsive**: Funciona en diferentes tamaños de pantalla

### 🔧 Características Técnicas
- **Eventos de Teclado**: Soporte para tecla Enter en todos los inputs
- **Gestión de Estado**: Sistema robusto que previene conflictos al navegar
- **Validaciones**: Control de errores y casos edge
- **Reset Completo**: Posibilidad de reiniciar el sorteo completamente

## 🚀 Cómo Usar la Aplicación

### Paso 1: Agregar Participantes
1. **Abrir la aplicación** en tu navegador
2. **Escribir el nombre** del primer participante en el campo de texto
3. **Presionar Enter** o hacer clic en "Añadir amigo"
4. **Repetir** hasta agregar todos los participantes (mínimo 2)

> **💡 Tip**: El contador muestra cuántos participantes has agregado

### Paso 2: Iniciar el Sorteo
1. **Hacer clic** en el botón "Sortear amigos"
2. La aplicación **genera automáticamente** las asignaciones secretas
3. **Aparece la pantalla** de sorteo individual

### Paso 3: Revelación Individual
1. **Cada participante** se acerca por turno
2. **Escribe su nombre** en el campo de entrada
3. **Presiona Enter** o hace clic en "Ver mi Amigo Secreto"
4. **Ve su asignación** de forma privada
5. **Hace clic** en "Siguiente Participante"

### Paso 4: Completar el Sorteo
- **Continúa** hasta que todos hayan visto su amigo secreto
- **Aparece mensaje** de sorteo completado
- **Opción** de volver a la pantalla principal para un nuevo sorteo

## 🎨 Estados Visuales de los Participantes

| Color | Estado | Descripción |
|-------|--------|-------------|
| 🔵 **Azul** (Pulsante) | Pendiente | No se ha identificado ni sorteado |
| 🟣 **Morado** (👁️) | Identificado | Escribió su nombre pero no ha sorteado |
| 🟢 **Verde** (Brillante) | Activo | Está escribiendo su nombre actualmente |
| ⚫ **Gris** (Tachado ✓) | Completado | Ya vio su amigo secreto |
| 🟠 **Naranja** | Reidentificado | Volvió a escribir su nombre después de sortear |

## 🔧 Instalación y Configuración

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de software adicional

### Archivos del Proyecto
```
proyecto-amigo-secreto/
├── index.html          # Página principal
├── app.js             # Lógica de la aplicación
├── style.css          # Estilos CSS
├── assets/            # Recursos gráficos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md          # Este archivo
```

### Ejecución
1. **Descargar** todos los archivos del proyecto
2. **Abrir** `index.html` en tu navegador web
3. **¡Listo!** La aplicación estará funcionando

## ⚡ Funcionalidades Avanzadas

### Validaciones Implementadas
- ✅ **Nombres únicos**: No permite participantes duplicados
- ✅ **Campos vacíos**: Valida que se ingresen nombres válidos
- ✅ **Mínimo participantes**: Requiere al menos 2 personas
- ✅ **Participante válido**: Solo permite sortear a participantes registrados
- ✅ **Sorteo único**: Evita que alguien vea su resultado múltiples veces

### Algoritmo de Sorteo
- **Mezcla aleatoria** usando Fisher-Yates shuffle
- **Prevención de auto-asignación** mediante intercambio inteligente
- **Asignaciones únicas** cada vez que se ejecuta un sorteo

### Gestión de Estado
- **Reset completo** al volver a la pantalla principal
- **Limpieza de eventos** para evitar listeners duplicados
- **Eliminación de estilos** dinámicos para prevenir conflictos

## 🎯 Casos de Uso

### 📅 Eventos Familiares
- Intercambios navideños
- Cumpleaños grupales
- Reuniones familiares

### 🏢 Ambiente Laboral
- Fiestas de fin de año
- Celebraciones de equipo
- Eventos corporativos

### 👥 Grupos de Amigos
- Reuniones casuales
- Fiestas temáticas
- Celebraciones especiales

## 🔒 Privacidad y Seguridad

- **Sin almacenamiento**: No guarda datos en servidores
- **Ejecución local**: Todo funciona en el navegador
- **Privacidad total**: Solo cada persona ve su asignación
- **Reset automático**: Los datos se limpian al reiniciar

## 🎮 Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| **Enter** | Agregar participante (pantalla principal) |
| **Enter** | Revelar amigo secreto (pantalla de sorteo) |

## 🐛 Solución de Problemas

### Problema: "No estás en la lista de participantes"
**Solución**: Verifica que hayas escrito exactamente el mismo nombre que se agregó inicialmente.

### Problema: "Ya has visto tu amigo secreto"
**Solución**: Este participante ya completó su sorteo. Si necesita verlo nuevamente, reinicia el sorteo.

### Problema: La aplicación se "desconfigura"
**Solución**: Haz clic en "Volver a Agregar Participantes" para reset completo.

### Problema: Los elementos se mueven cuando cambia el texto
**Solución**: Esto ya está solucionado con dimensiones fijas en el H1.

## 🔄 Versiones y Actualizaciones

### Versión Actual: 2.0
- ✅ Sistema de navegación robusto
- ✅ Estados visuales avanzados
- ✅ Gestión de eventos mejorada
- ✅ Validaciones completas
- ✅ Reset automático funcional

### Características Agregadas
- **Soporte para Enter**: En todos los campos de entrada
- **Indicadores visuales**: Sistema de colores para estados
- **Animaciones**: Efectos pulse, glow y hover
- **Navegación estable**: Sin conflictos entre pantallas

## 👨‍💻 Información Técnica

### Tecnologías Utilizadas
- **HTML5**: Estructura semántica
- **CSS3**: Gradientes, animaciones y transiciones
- **JavaScript ES6+**: Lógica moderna con arrow functions
- **DOM Manipulation**: Creación dinámica de elementos

### Compatibilidad
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 16+

### Rendimiento
- **Carga rápida**: Archivos ligeros sin dependencias externas
- **Ejecución fluida**: Optimizado para navegadores modernos
- **Memoria eficiente**: Limpieza automática de elementos DOM

## 📞 Soporte

Esta aplicación fue desarrollada como parte del desafío del programa ONE de Alura Latam. 

Para reportar problemas o sugerencias:
1. Verifica la sección de **Solución de Problemas**
2. Revisa que todos los archivos estén en la misma carpeta
3. Asegúrate de usar un navegador actualizado

---

**¡Disfruta organizando tus sorteos de amigo secreto!** 🎉

> Desarrollado con ❤️ para facilitar la organización de intercambios de regalos.
