document.addEventListener("DOMContentLoaded", function () {
    const calcularBotao = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    const baseMaiorInput = document.getElementById("baseMaior");
    const baseMenorInput = document.getElementById("baseMenor");
    const alturaInput = document.getElementById("altura");

    calcularBotao.addEventListener("click", function () {
        const baseMaior = parseFloat(baseMaiorInput.value);
        const baseMenor = parseFloat(baseMenorInput.value);
        const altura = parseFloat(alturaInput.value);

        if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura) || baseMaior <= 0 || baseMenor <= 0 || altura <= 0) {
            resultadoDiv.textContent = "Por favor, insira valores válidos para as bases e a altura.";
        } else {
            const area = ((baseMaior + baseMenor) * altura) / 2;
            resultadoDiv.textContent = `A área do trapézio irregular é aproximadamente ${area.toFixed(2)}`;
        }
    });

    baseMaiorInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularBotao.click(); // Simule um clique no botão de cálculo
        }
    });

    baseMenorInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularBotao.click(); // Simule um clique no botão de cálculo
        }
    });

    alturaInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularBotao.click(); // Simule um clique no botão de cálculo
        }
    });
});
