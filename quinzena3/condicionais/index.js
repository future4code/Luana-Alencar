//console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// Exercício 1

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} 
*/

// Exercício 2
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    //break;
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/

// Letra a - Permite executar um bloco de cod diferente de cada case
// Letra b - 2.25
// Letra c - 5

// Exercício 3
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

*/
// Letra a - Tem que digitar um numero que seja maior que zero
// Letra b - Se digitar 10 aparece "esse numero passou no teste"
// Letra c - Se digitar -10 dá erro

/*
// Exercício 4

const idade = Number(prompt ("Qual a sua idade?"))

if (idade >= 18){
    console.log("Você pode dirigir")
} 
else if (idade < 18){
    console.log("Você não pode dirigir")
}
*/

// Exercício 5

/*
let turnoAluno = prompt("Qual turno você estuda?")

if (turnoAluno === "M"){
    console.log("Bom dia!")
} else if(turnoAluno === "V"){
    console.log("Boa tarde!")
} else if(turnoAluno === "N"){
    console.log("Boa noite!")
    } else{
        console.log("Informe turno valido")
    }
*/

// Exercício 6

let turnoAluno = prompt("Qual turno você estuda?")

switch (turnoAluno){
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa Noite!")
        break;
        default:
console.log("informe turnoAluno");
        break; 
}

