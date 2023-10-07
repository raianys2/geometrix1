document.addEventListener("DOMContentLoaded", function () {
    const calcularBotao = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    const numeroLadosSelect = document.getElementById("numeroLados");

    calcularBotao.addEventListener("click", function () {
        const numeroLados = parseInt(numeroLadosSelect.value);

        if (isNaN(numeroLados) || numeroLados < 3) {
            resultadoDiv.textContent = "Por favor, selecione um número válido de lados.";
        } else {
            // Fórmula para calcular a área de um polígono regular com N lados
            const lado = 10; // Suponha que cada lado tenha um comprimento de 10 unidades (você pode ajustar isso)
            const apotema = lado / (2 * Math.tan(Math.PI / numeroLados));
            const area = (numeroLados * lado * apotema) / 2;

            resultadoDiv.textContent = `A área do polígono regular com ${numeroLados} lados é aproximadamente ${area.toFixed(2)}`;
        }
    });
});
