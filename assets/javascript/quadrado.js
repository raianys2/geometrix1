document.addEventListener("DOMContentLoaded", function () {
    const calcularBotao = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    const ladoInput = document.getElementById("lado");

    calcularBotao.addEventListener("click", function () {
        const lado = parseFloat(ladoInput.value);

        if (isNaN(lado) || lado <= 0) {
            resultadoDiv.textContent = "Por favor, insira um valor válido para o lado do quadrado.";
        } else {
            const area = lado * lado;
            resultadoDiv.textContent = `A área do quadrado é ${area.toFixed(2)}`;
        }
    });

    ladoInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            calcularBotao.click(); // Simule um clique no botão de cálculo
        }
    });
});
