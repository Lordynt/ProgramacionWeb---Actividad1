var estudiantes = [];

function agregarEstudiante() {
    var nombreInput = document.getElementById("nombre");
    var calificacionInput = document.getElementById("calificacion");
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = '';
    var nombre = nombreInput.value.trim();
    var calificacionTexto = calificacionInput.value.trim();
    if (nombre === '') {
        mensajeError.textContent = 'Ingresa el nombre del estudiante.';
        nombreInput.focus();
        return;
    }
    if (calificacionTexto === '') {
        mensajeError.textContent = 'Ingresa la calificación del estudiante.';
        calificacionInput.focus();
        return;
    }
    var calificacion = parseFloat(calificacionTexto);
    if (calificacion < 0 || calificacion > 100) {
        mensajeError.textContent = 'La calificación debe estar entre 0 y 100.';
        calificacionInput.focus();
        return;
    }
    var nuevoEstudiante = {
        nombre: nombre,
        calificacion: calificacion
    };
    estudiantes.push(nuevoEstudiante);
    nombreInput.value = '';
    calificacionInput.value = '';
    nombreInput.focus();
}

function calcular() {
    var promedioInput = document.getElementById("promedio");
    var mayorInput = document.getElementById("mayor");
    var menorInput = document.getElementById("menor");
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = '';
    if (estudiantes.length === 0) {
        mensajeError.textContent = 'No se puede realizar el calculo, no hay estudiantes registrados.';
        limpiarResultados();
        return;
    }
    var suma = estudiantes.reduce(function(total, estudiante) {
        return total + estudiante.calificacion;
    }, 0);
    var promedio = suma / estudiantes.length;
    var calificacionMaxima = Math.max(...estudiantes.map(function(e) {
        return e.calificacion;
    }));
    var calificacionMinima = Math.min(...estudiantes.map(function(e) {
        return e.calificacion;
    }));
    var estudianteMayor = estudiantes.find(function(e) {
        return e.calificacion === calificacionMaxima;
    });
    var estudianteMenor = estudiantes.find(function(e) {
        return e.calificacion === calificacionMinima;
    });
    promedioInput.value = promedio.toFixed(2);
    mayorInput.value = estudianteMayor.nombre + " (" + estudianteMayor.calificacion + ")";
    menorInput.value = estudianteMenor.nombre + " (" + estudianteMenor.calificacion + ")";
}

function limpiarResultados() {
    document.getElementById("promedio").value = '';
    document.getElementById("mayor").value = '';
    document.getElementById("menor").value = '';
}