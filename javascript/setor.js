document.addEventListener("DOMContentLoaded", function () {
    const calcularBotao = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    const raioMaiorInput = document.getElementById("raioMaior");
    const raioSetorInput = document.getElementById("raioSetor");
    const anguloSetorInput = document.getElementById("anguloSetor");

    calcularBotao.addEventListener("click", function () {
        const raioMaior = parseFloat(raioMaiorInput.value);
        const raioSetor = parseFloat(raioSetorInput.value);
        const anguloSetor = parseFloat(anguloSetorInput.value);

        if (isNaN(raioMaior) || isNaN(raioSetor) || isNaN(anguloSetor) || raioMaior <= 0 || raioSetor <= 0 || anguloSetor <= 0) {
            resultadoDiv.textContent = "Por favor, insira valores válidos para o raio do círculo maior, raio do setor e ângulo do setor.";
        } else {
            const areaSetor = (anguloSetor / 360) * Math.PI * Math.pow(raioSetor, 2);
            const areaTriangulo = (1 / 2) * Math.pow(raioSetor, 2) * Math.sin((anguloSetor * Math.PI) / 180);
            const areaCirculoMaior = Math.PI * Math.pow(raioMaior, 2);

            const areaTotal = areaSetor - areaTriangulo + areaCirculoMaior;

            resultadoDiv.textContent = `A área do setor circular em um círculo aninhado é aproximadamente ${areaTotal.toFixed(2)}`;
        }
    });

    raioMaiorInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularBotao.click(); // Simule um clique no botão de cálculo
        }
    });

    raioSetorInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularBotao.click(); // Simule um clique no botão de cálculo
        }
    });

    anguloSetorInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularBotao.click(); // Simule um clique no botão de cálculo
        }
    });
});
