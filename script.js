// Função para calcular o GEB 
//Transformando os Elementos ID em variáveis
function calculeGEB() {
    var gênero = document.getElementById("gênero").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var idade = parseFloat(document.getElementById("idade").value);

    // Verifica se os campos foram preenchidos corretamente
    if (isNaN(peso) || isNaN(altura) || isNaN(idade)) {
        //Exibir o alerta caso algum campo foi preenchido da maneira errada
        alert("Por favor, preencha todos os campos com valores numéricos.");
        return;
    }

    var resultado;

    // Calcula o GEB com base no gênero (Mulher ou Homem).
    if (gênero === "Mulher") {
        resultado = 655.1 + (9.56 * peso) + (1.85 * altura) - (4.68 * idade);
    } else {
        resultado = 66.47 + (13.75 * peso) + (5 * altura) - (6.76 * idade);
    }

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = "O seu Gasto Energético Basal é: " + resultado.toFixed(2) + " calorias por dia.";
}

// Função para atualizar a fórmula exibida ao usuário
function updateFormula() {
    var gênero = document.getElementById("gênero").value;
    var formula = "";

    // Define a fórmula com base no gênero
    //Exibir um alerta de acordo com a escolha do gênero (Pra pessoa saber a fórmula usada)
    if (gênero === "Mulher") {
        formula = "655.1 + (9.56 * Peso) + (1.85 * Altura) - (4.68 * Idade)";
    } else {
        formula = "66.47 + (13.75 * Peso) + (5 * Altura) - (6.76 * Idade)";
    }

    // Exibe um alerta com a fórmula correspondente
    alert("Fórmula para " + (gênero === "Mulher" ? "Mulher" : "Homem") + ": " + formula);
}