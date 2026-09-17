function calcular() {
    var entrada = document.getElementById("numeros").value;
    var mayorInput = document.getElementById("mayor");
    var menorInput = document.getElementById("menor");
    var promedioInput = document.getElementById("promedio");
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = '';
    if (entrada.trim() === '') {
        mensajeError.textContent = 'Ingresa al menos un número.';
        limpiarResultados();
        document.getElementById("numeros").focus();
        return;
    }
    var partes = entrada.split(",");
    for (var i = 0; i < partes.length; i++) {
        if (partes[i].trim() === '') {
            mensajeError.textContent = 'Error: Espacio vacio entre dos comas.';
            limpiarResultados();
            document.getElementById("numeros").focus();
            return;
        }
    }
    var numeros = partes.map(function(valor) {
        return Number(valor.trim());
    });
    for (var j = 0; j < numeros.length; j++) {
        if (isNaN(numeros[j])) {
            mensajeError.textContent = 'Error: Solo se admiten numeros.';
            limpiarResultados();
            document.getElementById("numeros").focus();
            return;
        }
    }
    var mayor = Math.max(...numeros);
    var menor = Math.min(...numeros);
    var suma = numeros.reduce(function(acc, valor) {
        return acc + valor;
    }, 0);
    var promedio = suma / numeros.length;
    mayorInput.value = mayor;
    menorInput.value = menor;
    promedioInput.value = promedio.toFixed(2);
}
function limpiarResultados() {
    document.getElementById("mayor").value = '';
    document.getElementById("menor").value = '';
    document.getElementById("promedio").value = '';
}