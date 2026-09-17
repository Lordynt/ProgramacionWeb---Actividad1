function convertir() {
    var kmInput = document.getElementById("kilometros").value;
    var millasInput = document.getElementById("millas");
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = '';
    if (kmInput.trim() === '') {
        mensajeError.textContent = 'Ingresa un valor primero.';
        millasInput.value = '';
        document.getElementById("kilometros").focus();
        return;
    }
    var kilometros = parseFloat(kmInput);
    var millas = kilometros * 0.621371;
    millasInput.value = millas.toFixed(5) + " mi";
}