
let nome;
let idade;

console.log(typeof(nome));
console.log(typeof(idade));

nome = prompt('Qual seu nome?');
idade = prompt('Qual sua idade?');

console.log(typeof(nome));
console.log(typeof(idade));


console.log("Ola", nome,"voce tem", idade, "anos");

endereco = prompt('Qual o seu endereço?');
console.log('Qual o seu endereço?', endereco)

cor = prompt('Qual a sua cor preferida')
console.log('Qual a sua cor preferida', cor)

pets = prompt('Você tem algum pet?')
console.log('Você tem algum pet?', pets)

viagem = prompt('Qual foi sua ultima viagem')
console.log('Qual foi sua ultima viagem', viagem)

sonho = prompt('Qual seu maior sonho?')
console.log('Qual seu maior sonho?', sonho)


let comida = ["pizza","japonesa","arroz","feijao","estrogonofe"]
console.log(comida[0,1,2,3,4])

console.log('Essas são as minhas comidas preferidas')
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])



let perguntas = ["Você sabe dançar forró?", "Conhece alguém que sabe?", "Tem vontade de aprender?"]
console.log(perguntas[0,1,2])

let respostas = ["false","true","true"]
console.log(respostas[0,1,2])

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])
