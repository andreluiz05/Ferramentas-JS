// questao1
function mostrarAlerta(){
    alert("Você é muito legal!");
  }
// questao 2
function Calcular(){
    let base1 = parseFloat(document.querySelector("#base1").value)
    let altura2 = parseFloat(document.querySelector("#altura2").value)
    let soma = (base1 * altura2) / 2;
    document.querySelector("#resultadofinal").innerHTML = "A área do triângulo é: " + soma;
}
// questao3
function CalculoVouF() {
  let numero = parseInt(document.querySelector("#num1").value);

  if (isNaN(numero)) {
      document.querySelector("#resposta").textContent = "Por favor, insira um número válido!";
  } else {
      if (numero % 2 === 0) {
          document.querySelector("#resposta").textContent = "Verdadeiro (o número " + numero + " é PAR)";
      } else {
          document.querySelector("#resposta").textContent = "Falso (o número " + numero + " é ÍMPAR)";
      }
  }
}
// questao4
function maiorNumero() {
  let n1 = parseFloat(document.querySelector("#num1top").value.trim());
  let n2 = parseFloat(document.querySelector("#num2top").value.trim());
  let n3 = parseFloat(document.querySelector("#num3top").value.trim());

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.querySelector("#resultado").textContent =
      "Por favor, insira 3 números válidos!";
    return;
  }

  let maior = n1;  
  if (n2 > maior) maior = n2;
  if (n3 > maior) maior = n3;

  document.querySelector("#resultado").textContent =
    "O valor maior é: " + maior;
}
// questao5
function converter(){
  let celsius = parseFloat(document.querySelector("#celsius").value)
  let calculo = (celsius * 9 / 5 + 32)
  document.querySelector("#resultadotemp").innerHTML = " A temperatura atual Fahrenheit é: " + calculo;

}
  // questao6
function calcularMontante() {
  let capital = parseFloat(document.querySelector("#capital").value);
  let juros = parseFloat(document.querySelector("#juros").value);
  let tempo = parseFloat(document.querySelector("#tempo").value);

  let montante = capital * ((1 + juros / 100) ** tempo);
  document.querySelector("#resultadomontante").innerHTML = "O montante final em R$ será: " + montante.toFixed(2);
}
//  questao7
function verificarDiv3() {
  let numero = parseInt(document.querySelector("#numdiv3").value);

  if (isNaN(numero)) {
    document.querySelector("#respostadiv3").textContent = "Por favor, insira um número válido!";
    return;
  }

  if (numero % 3 === 0) {
    document.querySelector("#respostadiv3").textContent = "Verdadeiro (o número " + numero + " é divisível por 3)";
  } else {
    document.querySelector("#respostadiv3").textContent = "Falso (o número " + numero + " NÃO é divisível por 3)";
  }
}
// questao8
function mostrarMes() {
  let numeroMes = parseInt(document.querySelector("#numMes").value);

  if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
    document.querySelector("#resultadoMes").textContent = "Digite um número válido entre 1 e 12!";
    return;
  }

  let meses = [
    "Janeiro", "Fevereiro Carnaval", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  let mesEscolhido = meses[numeroMes - 1];
  document.querySelector("#resultadoMes").textContent = "O mês correspondente é: " + mesEscolhido;
}
// questao9
function calcularReajusteColab() {
  let salario = parseFloat(document.querySelector("#salarioColab").value);

  if (isNaN(salario) || salario <= 0) {
    document.querySelector("#resultadoReajusteColab").textContent =
      "Por favor, insira um valor de salário válido!";
    return;
  }

  let percentual = 0;

  if (salario <= 280) {
    percentual = 20;
  } else if (salario <= 700) {
    percentual = 15;
  } else if (salario <= 1500) {
    percentual = 10;
  } else {
    percentual = 5;
  }

  let valorAumento = (salario * percentual) / 100;
  let novoSalario = salario + valorAumento;

  document.querySelector("#resultadoReajusteColab").innerHTML =
    "📌 Salário antes do reajuste: R$ " + salario.toFixed(2) + "<br>" +
    "📌 Percentual de aumento aplicado: " + percentual + "%<br>" +
    "📌 Valor do aumento: R$ " + valorAumento.toFixed(2) + "<br>" +
    "📌 Novo salário após o aumento: R$ " + novoSalario.toFixed(2) }

    // questao10

    function calcularCombustivel() {
      var valorDinheiro = document.getElementById("valorDinheiro").value;
    
      var precoLitro = 5;   
      var kmPorLitro = 20;  
    
      var litros = valorDinheiro / precoLitro;
      var distancia = litros * kmPorLitro;
    
      document.getElementById("resultadoCombustivel").innerHTML =
        "Você pode comprar " + litros.toFixed(2) + " litros e andar " + distancia.toFixed(2) + " km.";
    }
    // questao11
    function converterMinutos() {
      var minutos = document.getElementById("minutos").value;
    
      var horas = minutos / 60;
      var dias = horas / 24;
    
      document.getElementById("resultadoMinutos").innerHTML =
        minutos + " minutos equivalem a " + horas.toFixed(2) + " horas e " + dias.toFixed(3) + " dias.";
    }
    // questao12
    function calcularGorjeta() {
      var valor = document.getElementById("valorRefeicao").value;
    
      var gorjeta = valor * 0.10;
      var total = parseFloat(valor) + gorjeta;
    
      document.getElementById("resultadoGorjeta").innerHTML =
        "Gorjeta (10%): R$ " + gorjeta.toFixed(2) +
        "<br>Valor total (com gorjeta): R$ " + total.toFixed(2);
    }
    // questao 13
    function verificarEmprestimo() {
      var salario = document.getElementById("salario").value;
      var prestacao = document.getElementById("prestacao").value;
    
      var limite = salario * 0.20;
    
      if (prestacao > limite) {
        document.getElementById("resultadoEmprestimo").innerHTML =
          "Empréstimo não pode ser concedido.";
      } else {
        document.getElementById("resultadoEmprestimo").innerHTML =
          "Empréstimo pode ser concedido.";
      }
    }
    // questao14
    function calcularDesconto() {
      var salario = document.getElementById("salarioFunc").value;
    
      var desconto = salario * 0.11;
    
      if (desconto > 334.29) {
        desconto = 334.29;
      }
    
      document.getElementById("resultadoDesconto").innerHTML =
        "O desconto previdenciário é R$ " + desconto.toFixed(2);
    }
    // questao15
    function calcularRendimento() {
      var deposito = document.getElementById("deposito").value;
    
      var rendimento = deposito * 0.007; // 0,70% ao mês
      var total = parseFloat(deposito) + rendimento;
    
      document.getElementById("resultadoRendimento").innerHTML =
        "Rendimento: R$ " + rendimento.toFixed(2) + "<br>" +
        "Total após 1 mês: R$ " + total.toFixed(2);
    }
    