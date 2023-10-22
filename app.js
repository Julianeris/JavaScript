// tipo number
const meuNumero = 3;
const primeiroNumero = 1;
const segundoNumero = 2;
const opMatematica = primeiroNumero - segundoNumero;
console.log(opMatematica);

// ponto flutuante
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaoperacao = primeiroNumero / numeroPontoFlutuante;
console.log(novaoperacao)

// NaN ( Not a Number)

const alura = 'Alura';
console.log(alura*primeiroNumero)

// String 
const texto1 = "Olá Mundo!";
const texto2 = 'Olá Mundo!';
const senha = 'senhaSuperSegura456!'
const StringdDeNumeros = '3457'
const citacao = "Meu nome é ";
console.log(citacao)

// concatenação 
const nome = 'Julia'
console.log(citacao + nome)

//character encoding

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senhaNova = "minhaSenha1234"
console.log(senhaNova.length) // 13 caracteres

// Tipo Booleando

const primeiroNumero1 = 5;
const segundoNumero2 = 10;

console.log(primeiroNumero1 === segundoNumero2);

const terceiroNumero = 5; 

console.log(primeiroNumero1===terceiroNumero); 

const texto3 = "Alura";
const texto4 = "a";

console.log(texto3 === texto4);

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

/// Variaveis
//var 

var altura = 5;
var comprimento = 7;
var area = altura * comprimento
console.log(area);

let  forma = 'retangulo';
let alturaa = 5;
let comprimentoo = 7;
let areaa;

if (forma === 'retangulo'){
    areaa = alturaa * comprimentoo
} else(
    areaa = (alturaa*comprimentoo)/2
)
console.log(areaa);

const aaltura = 5;
const ccomprimeito = 7;
const aarea = aaltura * ccomprimeito;
console.log(aarea);

// booblean 
 const contaPaga = true
 const usuarioLogado = false

 console.log(0 == false);
 console.log("" == false);

 console.log(1 == true);


let minhaVarr;
let varNull = null;

console.log(minhaVarr);
console.log(varNull);

console.log(typeof minhaVarr);
console.log(typeof varNull);

// Coerção implícita
const numero = 450;
const numeroString = '450';
console.log(numero + numeroString);

console.log("deu erro");
console.error("deu erro");

const numeroCinco  = 5;
const texto = "5";
console.log(numeroCinco == texto); 
console.log(numeroCinco === texto); 

// operador ternario 
const idadeCliente = 19;
const idadeMinima = 18;
console.log(idadeCliente >= idadeMinima ? "cerveja":"suco");

// funções

/////let x = "";
/////console.log(x);
/////x = "oi";

function imprimirtexto (texto) {
    console.log(texto)
}


imprimirtexto(soma()); 
imprimirtexto("outro texto");

/// Parametros de funções

function soma(num1, num2) {
    return num1+num2;
};

console.log(soma(2,2));
console.log(soma(10,2));
console.log(soma(50,8));

// parametro x argumento:
// ordens dos parametros

function nomeidade(nome, idade){
    return `meu nome é ${nome} e a minha idade é ${idade}`;
}
console.log(nomeidade("Julia", 25));

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5),soma(3,3)));
console.log(multiplica(soma(4,5)));

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

  

// arrow function
const nomes = ("ANa")
const apresentarArrow = nomes => `meu nome é ${nomes}`;


