// Función para calcular el balance
document.getElementById('calcularBalance').addEventListener('click', function() {
    const ingresos = parseFloat(document.getElementById('ingresos').value);
    const gastos = parseFloat(document.getElementById('gastos').value);

    if (isNaN(ingresos) || isNaN(gastos)) {
        alert("Por favor ingresa valores válidos.");
        return;
    }

    const balance = ingresos - gastos;
    const resultadoBalance = document.getElementById('resultadoBalance');

    if (balance >= 0) {
        resultadoBalance.textContent = `Balance: S/.${balance.toFixed(2)} (Ahorro)`;
    } else {
        resultadoBalance.textContent = `Balance: S/.${Math.abs(balance).toFixed(2)} (Deuda)`;
    }
});

// Función para calcular el préstamo
document.getElementById('calcularPrestamo').addEventListener('click', function() {
    const prestamo = parseFloat(document.getElementById('prestamo').value);
    const interes = parseFloat(document.getElementById('interes').value);
    const plazo = parseInt(document.getElementById('plazo').value);

    if (isNaN(prestamo) || isNaN(interes) || isNaN(plazo)) {
        alert("Por favor ingresa valores válidos.");
        return;
    }

    // Fórmula para calcular el total a pagar de un préstamo con interés compuesto mensual
    const tasaInteresMensual = (interes / 100) / 12;
    const pagoMensual = prestamo * tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -plazo));
    const totalPagar = pagoMensual * plazo;

    const resultadoPrestamo = document.getElementById('resultadoPrestamo');
    resultadoPrestamo.textContent = `Total a Pagar: S/.${totalPagar.toFixed(2)} (Incluye intereses)`;
});
