/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 *  const numero = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 90]

    for(let i = 0; i < numero.length; i++){
    const elemento = numero[i]
        console.log("O elemento do index", i, "é", elemento)
    } 

 * 
 */

 window.alert('Bem vindo ao jogo BlackJack!');
     
 const jogo = confirm("Quer iniciar uma nova rodada?");
     if(jogo === true){
        console.log("Iniciar");
     }else{
        console.log("O jogo acabou")
     }

     function comprarCarta() {
      // Cria array de cartas
      const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      const carta = comprarCarta();