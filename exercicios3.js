// Condicionais
const idade = 18;
if (idade >= 18) {
    console.log(`Você tem ${idade} anos`);
} else {
    console.log(`Você tem menos que 18 anos, sua idade é ${idade} anos`);
}

const nome = "Ana";
console.log(`Oi ${nome}!`);

const conta = "Luz";
const statusDaConta = "Pago";
const valorDaConta = 150;
console.log(`Olá ${nome}, sua conta de ${conta} está com o status de ${statusDaConta} e o valor dela é R$${valorDaConta}`);

const mercado = ["Arroz", "Leite", "Sal", "Ervilha"];
console.log(`Você precisa comprar ${mercado[1]} da sua lista de mercado`);

// Arrays com cores 

const coresPrimarias = ["Azul", "Vermelho", "Amarelo"];
for (const cor of coresPrimarias){
    console.log(cor);
}

const alunos = ["Ana", "Maria", "Claudia", "Manu"];
for (const aluno of alunos){
    console.log(aluno);
}

const materias = ["Matemática", "Português", "Ciências", "Ed. Física"];
for (const materia of materias){
    console.log(materia);
}

const amigas = ["Brenda", "Thiele", "Ane", "Lorine"]
for (const amiga of amigas){
    console.log(amiga)
}

//Funções 
const numero = 2;
function dobro(numero){
    return numero *2;
}

const funcionario = {
    nome: "Ana",
    idade: 25,
    atividade: "Operadora",
};
console.log(`O nome da funcionario(a) é ${funcionario.nome}, sua idade é ${funcionario.idade}`);


const aluno = {
    nomeAluno: "Ana Cláudia", 
    anos: 13,
    curso: "Inglês",
    turno: "Matutino",
    Instrutor: "Antonio",
};
console.log(`Oi ${aluno.nomeAluno}, você tem aula de ${aluno.curso} com o professor ${aluno.Instrutor}, pode se dirigir a sala!`)

for (let i = 1; i <=5; i++){
    console.log(i);
}

//Manipulação de string

const animal = "arara";
const detalheAnimal = "azul";
const animalCompleto = animal.concat(detalheAnimal);
console.log(animal.toUpperCase());
console.log(animal.toLowerCase());
console.log(animal.length);
console.log(animal.charAt(3));
console.log(animal.substring(2,4));
console.log(animalCompleto);

// backend simples
const mensagem = "Olá mundo!";
console.log(mensagem)

// Declaração de variáveis 
const peso = 50;
let ano = 2;
var gramas = 100;

console.log(peso, ano, gramas)

// Escopo de blocos
const valorProduto = 100
const poupanca = 120

if (true) {
    let dentroDoBloco = "Estou dentro"
    console.log(dentroDoBloco);
}

// Reatribuição com let 
let valorLet = 10;
valorLet = valorLet + 100;
console.log(valorLet)

let nomeLet = "Ana";
nomeLet = nomeLet + "Maria";
console.log(nomeLet)

let sobrenome = "Braga"
let nomeCompleteLet = nomeLet.concat(sobrenome);
console.log(nomeCompleteLet)

// reatribuição com const (erro)

const valorConst = 10;
valorConst = valorConst + 100;
console.log(valorConst); ///TypeError: Assignment to constant variable.