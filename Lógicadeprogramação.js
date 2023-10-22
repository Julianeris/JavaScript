// atividade 1
alert('boas vindas ao nosso site!'); 

let nome = 'Lua'; 

let idade = 25;

let numeroDeVendas = 50;

let saldoDisponível = 1000;
alert ('Erro! Preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert (mensagemDeErro);

let nome = prompt('Qual o seu nome?');

let idade = prompt ('Qual a sua idade?');

let idade = prompt ('Digite sua idade?');
if (idade >= 18) {
    alert('Você já pode tirar sua habilitação')
}

// atividade 2
diadasemana = prompt('Qual é o dia da semana'); 
if (diadasemana == 'Sabádo') {
    alert('Bom final de semana!');
} else if (diadasemana == 'Domingo') { 
    alert('Boa final de semana!');
} else {
    alert('Boa semana!');
}

numero = prompt('Digite um número positivo ou negativo');
if (numero > 0) {
    alert ('Número positivo');
} else {
    alert ('Número negativo');
}

pontuacao = 105
if (pontuacao > 100) {
    console.log('Parabéns, você venceu');
} else {
    console.log('Tente novamente para ganhar');
}

alert(`Seu saldo e conta é de ${saldoDisponível}`)

let nome = prompt ('Qual é o seu nome?')
alert(`Seja bem-vinda ${nome}`)

// atividade 3

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++
}

let contador = 10;
while ((contador <= 10) {
    console.log(contador);
    contador--
}

let numeroMaximo = prompt('Informe um número para contagem regressiva:');
let contagemRegressiva 
while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

let numeroMaximo = prompt('Informe um número para contagem regressiva:');
let contador = 0; 
while (contador <= numeroMaximo) {
    console.log(contador);
    contador--;
}

// atividade 4
console.log('Seja bem-vinda');

let nome = 'Julia';
console.log(`Olá ${nome}`);

let nome = 'Julia';
alert(`Olá ${nome}`);

let linguagem = prompt ('Qual é a sua linguagem de programação favorita?');
console.log(linguagem);

let valor1 = 2;
let valor2 = 4;
let Resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${Resultado}`);

let valor1 = 2
let valor2 = 4
let Resultado = valor 1 - valor 2;
console.log(`A diferença de ${valor1} e ${valor2} é igual a ${Resultado}`)

let idade = prompt('Qual a sua idade?');
if (idade >=18) {
    console.log ('Você é maior de idade');
} else {
    console.log('Usuário é menor de idade');
}

var numero = parseFloat(prompt('Informe um número:'));
if (numero > 0){
    console.log('Esse número é positivo');
} else if (numero < 0) {
    console.log('Esse número é menor que zero');
} else {
    console.log('Esse número é zero');
}

let contador = 1;
while((contador <= 10) {
    console.log(contador);
    contador++
})

let nota = 1 
if (nota >= 7) {
    console.log ('Aprovado');
} else {
    console.log('Reprovado');
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);

let numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);