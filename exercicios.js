// Declaração de Variáveis: Declare uma variável chamada idade e atribua a ela o valor 25.
const idade = 25;
const nome = "Ana";
const funcao = "Professora";
console.log(idade);
console.log(nome);
console.log(funcao);
console.log(`Oi, meu nome é ${nome}, tenho ${idade} anos e minha função aqui é ${funcao}!`)

//Operações com Variáveis: Crie duas variáveis, numero1 e numero2, atribua valores e calcule a soma.
const produto1 = 2;
const produto2 = 5;
const totalCompra = produto1 + produto2;
console.log(produto1);
console.log(produto2);
console.log(totalCompra);
console.log(`O total da sua compra deu ${totalCompra}, sendo a maça ${produto1} reais e a banana ${produto2} reais`)

//Strings: Declare uma variável nome com seu nome e imprima uma mensagem concatenando com a variável.
const primeiroNome = "Julia";
const sobrenome = "Lima"
const nomeCompleto = primeiroNome + " " + sobrenome
const concatNome = primeiroNome.concat(sobrenome)
console.log(concatNome)
console.log(`Olá ${nomeCompleto}`)

//Condicionais: Use uma variável idade e imprima "Maior de idade" se a idade for maior ou igual a 18, caso contrário, imprima "Menor de idade".

const idades = 17
const maioridade = 18
if (idades >= maioridade){
    console.log(`Você possui ${idades} anos, então você é maior de idade`);
} else {console.log (`Você possui ${idades} anos, você é menor de idade`);}

const saldoDisponivel = 250
const valorDaCompra = 251
if (valorDaCompra <= saldoDisponivel){
    console.log (`O valor da sua compra é de ${valorDaCompra} e você possui apenas ${saldoDisponivel}`);
}
else { 
    console.log (`Compra finalizada com sucesso no valor de ${valorDaCompra}`);
}

const novoLivro = "Heartstopper";
const novoLivro2 = "Circe"
const biblioteca = ["Heartstopper", "VBA", "Amiga Genial"];

if (biblioteca.indexOf(novoLivro2) !== -1){
    console.log(`Você já tem o livro ${novoLivro2} na sua biblioteca`);
} else {
    console.log(`Você ainda não tem o livro ${novoLivro2} na sua biblioteca, apenas os livros ${biblioteca}`);
}

//Arrays: Declare um array cores com três cores e imprima cada uma.
const coresPrimarias = ["Azul", " Amarelo", " Vermelho "];
console.log(`As cores primarias são ${coresPrimarias}`);
console.log(`Misturando ${coresPrimarias[2]} com branco, temos a cor Rosa. Uma dessas cores faz parte das cores primarias que são ${coresPrimarias}`)
for (const cor of coresPrimarias){
    console.log(cor);
}

const vogais = ["A", "E", "I", "O", "U"];
for (const letra of vogais){
    console.log(letra);
}
console.log(`O alfabeto é composto por um conjunto de vogais que contem as letras ${vogais}, sendo a primeira letra do alfabeto a letra ${vogais[0]}`);

//Funções: Crie uma função chamada dobro que recebe um número como parâmetro e retorna o dobro desse número.
const numero = 2;
function dobro(numero){
    return numero * 2;
}
const resultado = dobro(numero);
console.log(resultado);
