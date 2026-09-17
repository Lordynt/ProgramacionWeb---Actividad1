const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const numero1 = document.getElementById("numero1").value.trim();
    const numero2 = document.getElementById("numero2").value.trim();
    const resultadoInput = document.getElementById("resultado");

    if (numero1 === '' || numero2 === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Ingresa ambos números para realizar la operación.',
            confirmButtonColor: '#6d3b9e'
        });
        resultadoInput.value = '';
        return;
    }
    const a = Number(numero1);
    const b = Number(numero2);

    if (isNaN(a) || isNaN(b)) {
        Swal.fire({
            icon: 'error',
            title: 'Valores inválidos',
            text: 'Ambos valores deben ser números válidos.',
            confirmButtonColor: '#6d3b9e'
        });
        resultadoInput.value = '';
        return;
    }
    let resultado;
    switch (operacion) {
        case 'suma':
            resultado = sumar(a, b);
            break;
        case 'resta':
            resultado = restar(a, b);
            break;
        case 'multiplicacion':
            resultado = multiplicar(a, b);
            break;
        case 'division':
            resultado = dividir(a, b);
            if (resultado === 'Error: División por cero') {
                Swal.fire({
                    icon: 'error',
                    title: 'División por cero',
                    text: 'No se puede dividir entre cero.',
                    confirmButtonColor: '#6d3b9e'
                });
                resultadoInput.value = '';
                return;
            }
            break;
    }
    resultadoInput.value = resultado;
};