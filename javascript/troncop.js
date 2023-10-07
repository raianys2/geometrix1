document.addEventListener("DOMContentLoaded", function () {
    const calcularBotao = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    const baseSuperiorInput = document.getElementById("baseSuperior");
    const baseInferiorInput = document.getElementById("baseInferior");
    const alturaInput = document.getElementById("altura");

    // Função para calcular a área do tronco de pirâmide
    function calcularArea() {
        const baseSuperior = parseFloat(baseSuperiorInput.value);
        const baseInferior = parseFloat(baseInferiorInput.value);
        const altura = parseFloat(alturaInput.value);

        if (isNaN(baseSuperior) || isNaN(baseInferior) || isNaN(altura) || baseSuperior <= 0 || baseInferior <= 0 || altura <= 0) {
            resultadoDiv.textContent = "Por favor, insira valores válidos para as bases e a altura.";
        } else {
            const area = ((baseSuperior + baseInferior) * altura) / 2;
            resultadoDiv.textContent = `A área do tronco de pirâmide é aproximadamente ${area.toFixed(2)}`;
        }
    }

    calcularBotao.addEventListener("click", calcularArea);

    // Adicione um event listener para a tecla "Enter" nos campos de entrada
    baseSuperiorInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularArea();
        }
    });

    baseInferiorInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularArea();
        }
    });

    alturaInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularArea();
        }
    });
});

