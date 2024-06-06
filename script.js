//atividade02
let nome = document.getElementById("nome")
let msg = document.getElementById("mensagem")

function Enviar()
{
    mensagem.innerHTML = "Olá, " + nome.value + ", tudo bem?" 
}

//atividade 03
let cm = document.getElementById("centimetros")
let m = document.getElementById("metros")

function Valor()
{
    metros.innerHTML = (parseFloat(centimetros.value)) / 100
}

//atividade 04
let numero = document.getElementById("valor");
let antecessor = document.getElementById("antecessor");
let sucessor = document.getElementById("sucessor");

function Encontrar()
{
    antecessor.innerHTML = parseInt(numero.value) - 1 + " é antecessor";
    sucessor.innerHTML = parseInt(numero.value) + 1 + " é sucessor";
}

//atividade 05
function Maior()
{
    if(primeiro.value > segundo.value){
        comparacao.innerHTML = parseInt(primeiro.value) + " é maior"
    }
    else{
        comparacao.innerHTML = parseInt(segundo.value) + " é maior"
    }
}

//atividade 06
let valor = document.getElementById("salario")
let calculo = document.getElementById("calcular")

function Aumento()
{
    if(salario.value <= 1250){
        calculo.innerHTML = parseFloat(salario.value) * 0.15
    }
    else{
        calculo.innerHTML = parseFloat(salario.value) * 0.10
    }
}

//atividade 07
console.log("exercicio 07")
a = 1 
while (a <= 100){
    console.log(a)
    a = a + 1
}

//atividade 08
console.log("exercicio 08")
b = 0 
while (b <= 50){
    console.log(b)
    b = b + 5
}

//atividade 09
console.log("exercicio 09")
c = 100
while (c >= 0){
    console.log(c)
    c = c - 10
}