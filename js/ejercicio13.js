function verificar() {
    var edadInput = document.getElementById("edad").value;
    var resultadoInput = document.getElementById("resultado");
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = '';
    if (edadInput.trim() === '') {
        mensajeError.textContent = 'Ingresa tu edad primero.';
        resultadoInput.value = '';
        document.getElementById("edad").focus();
        return;
    }
    var edad = parseFloat(edadInput);
    if (edad <= 0) {
        mensajeError.textContent = 'La edad debe ser mayor a cero.';
        resultadoInput.value = '';
        document.getElementById("edad").focus();
        return;
    }
    if (edad >= 18) {
        resultadoInput.value = "Puedes votar";
    } else {
        resultadoInput.value = "No puedes votar";
    }
}