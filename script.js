//Exercicio tipos de variáveis

var typeString = "Uma variável do tipo String";
var typeNumber = 14;
var typeBoolean = true;

console.log(typeString, " ", typeNumber, " ", typeBoolean);


/*------------------------------------------------------------------------------------------

Exercicio mostrar data e hora num elemento HTML*/


const fullDate = new Date ();
const time = new Date ().toString().split(" ")[4];
var date = '';

var day = fullDate.getDate();
var month = fullDate.getMonth();
var year = fullDate.getFullYear();

date = day + "-" + (month+1) + "-" + year;

document.getElementById('data').innerHTML = date;
document.getElementById('hora').innerHTML = time;


/*------------------------------------------------------------------------------------------

Exercicio Formulário para atribuir valores ao objeto Pessoa*/

var nomeInput = document.getElementById('nome');
var idadeInput = document.getElementById('idade');
var dataNascimentoInput = document.getElementById('dataNascimento');
var pessoa = {};

function getInputValues() {

    pessoa = {nome: nomeInput.value, idade: idadeInput.value, dataNascimento: dataNascimentoInput.value};
    document.getElementById('nomePessoa').innerHTML = "Nome: " + pessoa.nome + "&nbsp&nbsp&nbsp&nbsp";
    document.getElementById('idadePessoa').innerHTML = "Idade: " + pessoa.idade + "&nbsp&nbsp&nbsp&nbsp";
    document.getElementById('dataNascimentoPessoa').innerHTML = "Data de Nascimento: " + pessoa.dataNascimento;
}


/*------------------------------------------------------------------------------------------  

Exercico botão para gerar número random de 1 a 10*/

function randomNum() {
    document.getElementById("num").innerHTML = Math.floor(Math.random() * 10) + 1;
}


/*------------------------------------------------------------------------------------------  

Exercicio Ligar e desligar lâmpada*/

var on = document.getElementById("lampadaOn");
var off = document.getElementById("lampadaOff");

on.style.display = "none";
on.style.cursor = "pointer";

off.style.display = "block";
off.style.cursor = "pointer";

function desligar() {
    on.style.display = "none";
    off.style.display = "block";
}

function ligar() {
    on.style.display = "block";
    off.style.display = "none";
}


/*------------------------------------------------------------------------------------------  

Exercicio calculadora*/

var num1 = document.getElementById('num1'), num2 = document.getElementById('num2'), 
soma = document.getElementById('soma'), sub = document.getElementById('sub'), 
multi = document.getElementById('multi'), div = document.getElementById('dividir')
result = document.getElementById('result');

var op = 0;

function somar() {

    var valor1 = num1.value, valor2 = num2.value;
    op = (parseFloat(valor1)+parseFloat(valor2));
    return result.innerHTML = "Resultado: " + op;

}

function subtrair() {

    var valor1 = num1.value, valor2 = num2.value;
    op = (parseFloat(valor1) - parseFloat(valor2));
    return result.innerHTML = "Resultado: " + op;

}

function multiplicar() {

    var valor1 = num1.value, valor2 = num2.value;
    op = (parseFloat(valor1) * parseFloat(valor2));
    return result.innerHTML = "Resultado: " + op;

}

function dividir() {

    var valor1 = num1.value, valor2 = num2.value;
    op = (parseFloat(valor1) / parseFloat(valor2));
    return result.innerHTML = "Resultado: " + op;

}


/*------------------------------------------------------------------------------------------  

Exercicio mostrar mês por extenso*/

var inputDate = '';
var inputMonth = '';
var show = document.getElementById('showMonth');

function getData() {
    inputDate = new Date (document.getElementById('inputData').value);
    inputMonth = inputDate.getMonth();
    
    switch (inputMonth) {
        case 0:
            show.innerHTML = "Janeiro";
            break;
        
        case 1:
            show.innerHTML = "Fevereiro";
            break;
        
        case 2:
            show.innerHTML = "Março";
            break;
        
        case 3:
            show.innerHTML = "Abril";
            break;
        
        case 4:
            show.innerHTML = "Maio";
            break;
        
        case 5:
            show.innerHTML = "Junho";
            break;
        
        case 6:
            show.innerHTML = "Julho";
            break;
        
        case 7:
            show.innerHTML = "Agosto";
            break;
        
        case 8:
            show.innerHTML = "Setembro";
            break;
        
        case 9:
            show.innerHTML = "Outubro";
            break;
        
        case 10:
            show.innerHTML = "Novembro";
            break;
        
        case 11:
            show.innerHTML = "Dezembro";
            break;
    }
}