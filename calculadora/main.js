const resultadoElement = document.getElementById("resultado")
const bottonDeCalculo = document.getElementById("calculo")

bottonDeCalculo.addEventListener('click', calculadora)

function calculadora() {
    const num1 = parseFloat(document.getElementsByClassName('num1')[0].value);
    const num2 = parseFloat(document.getElementsByClassName('num2')[0].value);
    const operacion = document.getElementById('operaciones').value;

    const operaciones = {
        'suma': (a, b) => a + b,
        'resta': (a, b) => a - b,
        'multiplicacion': (a, b) => a * b,
        'division': (a, b) => {
        if (b === 0) {
            mostrarError("No se puede dividir entre cero");
            return;
        }
        return a / b;
        }
    };

    if (operaciones.hasOwnProperty(operacion)) {
        const resultado = operaciones[operacion](num1, num2);
        mostrarResultado(resultado);
    } else {
        mostrarError("Operación inválida");
    }
}

function mostrarResultado(resultado) {
    resultadoElement.innerText = resultado;
}

function mostrarError(mensaje) {
    resultadoElement.innerText = "Error: " + mensaje;
}