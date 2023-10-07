document.addEventListener("DOMContentLoaded", function () {
    const calcularBotao = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    const baseInput = document.getElementById("base");
    const alturaInput = document.getElementById("altura");

    // Função para calcular a área do retângulo
    function calcularArea() {
        const base = parseFloat(baseInput.value);
        const altura = parseFloat(alturaInput.value);

        if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
            resultadoDiv.textContent = "Por favor, insira valores válidos para a base e a altura.";
        } else {
            const area = base * altura;
            resultadoDiv.textContent = `A área do retângulo é aproximadamente ${area.toFixed(2)}`;
        }
    }

    calcularBotao.addEventListener("click", calcularArea);

    // Adicione um event listener para a tecla "Enter" nos campos de entrada
    baseInput.addEventListener("keydown", function (event) {
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
