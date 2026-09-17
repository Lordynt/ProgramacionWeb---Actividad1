function convertir() {
    var pesosInput = document.getElementById("pesos").value;
    var dolaresInput = document.getElementById("dolares");
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = '';
    var tasa_cambio = 0.055;
    if (pesosInput.trim() === '') {
        mensajeError.textContent = 'Ingresa una cantidad primero.';
        dolaresInput.value = '';
        document.getElementById("pesos").focus();
        return;
    }
    var pesos = parseFloat(pesosInput);
    if (pesos <= 0) {
        mensajeError.textContent = 'La cantidad debe ser mayor a cero.';
        dolaresInput.value = '';
        document.getElementById("pesos").focus();
        return;
    }
    var dolares = pesos * tasa_cambio;
    dolaresInput.value = dolares.toFixed(2) + " USD";
}