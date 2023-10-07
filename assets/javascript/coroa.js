document.addEventListener("DOMContentLoaded", function () {
    const calcularBotao = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    const raioExteriorInput = document.getElementById("raioExterior");
    const raioInteriorInput = document.getElementById("raioInterior");

    calcularBotao.addEventListener("click", function () {
        const raioExterior = parseFloat(raioExteriorInput.value);
        const raioInterior = parseFloat(raioInteriorInput.value);

        if (isNaN(raioExterior) || isNaN(raioInterior) || raioExterior <= 0 || raioInterior <= 0) {
            resultadoDiv.textContent = "Por favor, insira valores válidos para os raios.";
        } else {
            const area = Math.PI * (Math.pow(raioExterior, 2) - Math.pow(raioInterior, 2));
            resultadoDiv.textContent = `A área da coroa circular é aproximadamente ${area.toFixed(2)}`;
        }
    });

    raioExteriorInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularBotao.click(); // Simule um clique no botão de cálculo
        }
    });

    raioInteriorInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularBotao.click(); // Simule um clique no botão de cálculo
        }
    });
});
