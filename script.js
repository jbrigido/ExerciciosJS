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
*/