// Função para calcular a área do círculo
function calcularArea() {
    // Obter o valor do raio do usuário
    const raio = parseFloat(document.getElementById("raio").value);

    // Verificar se o valor do raio é válido
    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, insira um valor de raio válido.");
        return;
    }

    // Calcular a área do círculo
    const area = Math.PI * Math.pow(raio, 2);

    // Exibir a área calculada
    document.getElementById("resultado").textContent = `A área do círculo com raio ${raio} é aproximadamente ${area.toFixed(2)}`;
}
document.getElementById("raio").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calcularArea();
    }
});