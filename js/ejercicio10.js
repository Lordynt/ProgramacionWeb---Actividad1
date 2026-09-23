function convertir() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitInput = document.getElementById("fahrenheit");
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = '';
    if (celsiusInput.trim() === '') {
        mensajeError.textContent = 'Ingresa un valor primero.';
        fahrenheitInput.value = '';
        document.getElementById("celsius").focus();
        return;
    }
    var celsius = parseFloat(celsiusInput);
    var fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2) + " °F";
}