          //VARIÁVEIS

//let idade = 5;
//console,console.log(idade);
// let altura = 175;
// let nome = 'Worley';
// console.log(altura, nome);
// let valorIngressoAdulto = 20;
// valorIngressoAdulto = 40;
// console.log(valorIngressoAdulto)


    //TIPOS PRIMITIVOS
//REFERÊNCIA

// let nome = 'Worley'; //string literal
// let idade = 37; //number literal
// let estaAprovado = true; //boolean
// let sobrenome = undefined; //Undefined
// let corSelecionada = null; //Redefinir um valor


  


// let nome = 'Worley';
// let idade = 37;
// let estaAprovado = true;
// let sobrenome = undefined;

// let pessoa = {
//     nome: 'Worley',
//     idade: 37,
//     estaAprovado: true,
//     sobrenome: 'Sacramento'
// };
// console.log(pessoa);



    //ARRAYS
// let familia = [true, 45, 'Worley', 37];
// console.log(familia.length)
// console.log(familia[1]);


    //FUNCTIONS
 //Verbo + Substantivo
//  let corSite ='azul';
//  function resetaCor(cor,tonalidade){
//     corSite = cor + ' ' + tonalidade;
// };  
 
//  console.log(corSite);
//  resetaCor('vermelho','pomba-gira')
//  console.log(corSite);




          //TIPOS DE FUNÇÕES
//realizar uma tarefa, não devolve nada

// function dizerNome(){
//     console.log('Worley');
// }
// dizerNome();

// //faz um cálculo ou operação e retorna algo

// function multiplicarPorDois(valor){
//     return valor* 2;
// }
//     //console.log(multiplicarPorDois(5));


// let resultado = multiplicarPorDois(20);
// console.log(resultado);


          //OPERADORES
//Operadores Aritiméticos(matemáticos) + , - , * , / , ** exponencial
// let salario = 100;

// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(5 ** 5);

// ++incremento --decremento
// let idade = 18;

// console.log(++idade)



//Operadores de Atribuição
// let valorTeclado = 100;
// //valorTeclado = valorTeclado + valorTeclado;
// //valorTeclado = valorTeclado - valorTeclado;
// // valorTeclado += valorTeclado;
// // valorTeclado -= valorTeclado;
// // console.log(valorTeclado)




    //Operadores de Comparação
//igualdade estrita compara os tipos (Forama Recomendada)
// console.log(1 === 1);
// console.log('1' === 1);

//igualdade solta nao compara os tips ignora a string e compara valor
// console.log(1 == 1);
// console.log('1' == 1);





    //Operadores ternários
//tem um cliente, 100 premium, comum
// let pontos = 200;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log(tipo);




   //Operadores Lógicos

//Operador logico E (&&)
//Retorna TRUE se os dois operando forem true
// console.log(true && true);
// console.log(true && false);
// let maiordeIdade = true;
// let possuiarteiradeTrabalho = true;
// let podeAplicar = maiordeIdade && possuiarteiradeTrabalho;
// console.log(podeAplicar);

//Operador lógico OU (||)
//Retorna TRUE se um dos operando forem true
// let maiordeIdade = false;
// let possuiarteiradeTrabalho = false;
// let podeAplicar = maiordeIdade || possuiarteiradeTrabalho;
// console.log(podeAplicar);

//Operador Lógico NOT (!)
//
// let maiordeIdade = true;
// let possuiarteiradeTrabalho = false;
// let podeAplicar = maiordeIdade || possuiarteiradeTrabalho;
//  console.log('pode aplicsar: ', podeAplicar);


// let candidatoRecusado = !podeAplicar

// console.log('candidato recusado: ' ,candidatoRecusado);


//Operadores Bitwise

//comparação não booleana
//Falsy
    //undefined
    //null
    //0
    //false
    // ''
    //NaN  -not a number

//Truthy

//let corPersonalizada = "";
//let corPadrao = "azul";
//let corPerfil = corPersonalizada || corPadrao;

//console.log(corPerfil)


//Trocando valores de Variáveis
/* let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
 */


// if.. Else
// Se a Hora estiver entre 06:00 até 12:00 ;Bom Dia!
// Se Estiver entre 12:00 até as 18:00 ;Boa Tarde!
// caso contrário ;Boa noite!

/* if (condicao) {
    // codigo a ser executado
}
else if (outraCondicao) {
    // codigo a ser executado
}
else {
    // codigo a ser executado
}
Exemplo
let hora = 19;

if (hora > 6 && hora < 12) {
    // codigo a ser executado
    console.log("Bom Dia!");
}

else if (hora > 12 && hora < 18) {
    // codigo a ser executado
  console.log("Boa Tarde!");
}

else {
    //codigo a ser executado
    console.log("Boa Noite!")
}

*/



// Switch .. case

/* let permissao; //comum, gerente, diretor

permissao = ''

switch (permissao) {
    case 'comum':
      console.log('usuário comum');
      break;  

      case 'gerente':
      console.log('usuário gerente');
      break;  

      case 'diretor':
      console.log('usuário diretor');
      break;  

      default:
          console.log('Usuário não reconhecido');
} */



//esses laços fazem a mesma coisa em cenários diferentes

    //for 
/* for (let i = 1; i <= 10; i++) { //++ incremento -- decremento
    if ( i % 2 !== 0){ // % operador modulos
        console.log(i);
    }
} */



    // while
/* let i = 5;

while (i >= 1) { 
    if ( i % 2 !== 0){ 
        console.log(i);
    }
    i--;
} */


    //Do..while
/* let i = 0;

do {
    console.log('digitando',i);
    i++;
}while (i < 10 ) */



    //for..in
/* const pessoa = {
    nome: 'Worley',
    idade: 37
};

//key-value significa valor da chave
for (let chave in pessoa){
    console.log(chave,pessoa['nome']);
}

const cores = ['Vermelho', 'Azul','Verde'];

for (let indice in cores) {
    console.log(indice,cores[indice])
} */



    //for..of
/* const cores = ['Vermelho', 'Azul','Verde'];

for (let cor of cores){
    console.log(cor);
} */




   //Maximo entre dois valores
/* let valorMarior = max(8,89);
console.log(valorMarior)
function max(numero1,numero2) {
    if(numero1 > numero2)
    return numero1;
    else return numero2;
}

ou esse metodo
let valorMarior = max(8,89);
console.log(valorMarior)
function max(numero1,numero2) {
   
    return numero1 > numero2 ? numero1: numero2;
    
}


*/

        //FIZZBUZZ
        //Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
//Não Divisivel por 3 e 5 => retorna o mesmo valor
//Não for um numero => 'Não é um número
/* const resultado = fizzBuzz(13);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if(( entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';    
    if(entrada % 3 === 0)
        return 'Fizz';
    if(entrada % 5 === 0)
        return 'Buzz';   //Divisão %, igual ===, e &&, Diferente !==
   
    return entrada;  
    
}; */

        //Medidor de velocidade
        // Velocidade maxima de 70
// a cada 5Km acima do limite vc ganha 1 ponto
//math.floor()
//caso pontos seja maior que 12 ->< 'Carteira Suspensa'
/* verificarVelocidade(120);


function verificarVelocidade(velocidade) {
    const velocidademaxima = 70;
    const kmPorPonto = 5;
    if(velocidade <= velocidademaxima)
        console.log('Ok');
    else{
       const pontos = Math.floor (((velocidade - velocidademaxima) / kmPorPonto));
       if(pontos >= 12)
        console.log('Carteira Suspensa');
        else
        console.log('Pontos',pontos);
    }
} */





        