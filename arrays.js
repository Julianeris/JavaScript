// Criação de médias
////const nota1 = 10;
////const nota2 = 6.5;
////const nota3 = 8;
////const nota4 = 7.5;

////const media = (nota1 + nota2 + nota3 + nota4) / 4;
////console.log(media);

// criação de lista
const notas = [10, 6.5, 8, 7.5];
const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;
console.log(media);

console.log(notas[3]);

console.log(notas.length);

// adicionando valor 
const notas1 = [10, 6, 8];
notas1.push(7);
const media1 = (notas1[0], notas1[1], notas1[2], notas1[3])/notas1.length;
console.log(media1);
console.log(notas1.length);

// removendo valor
const notas2 = [ 10, 6, 8, 5.5, 10]
//notas2.pop();
const media2 = (notas2[0], notas2[1], notas2[2], notas2[3])/notas2.length;
console.log(media2);
console.log(`A média é ${media2}`);

// desafio: sala dividida 

const alunos = [ 
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo"
];
console.log(alunos);
const sala1 = alunos.slice(0, alunos.length/2);
console.log(sala1);
const sala2 = alunos.slice(alunos.length/2);
console.log(sala2);

// splice -  chamada
const chamadaA = [ 
    "João",
    "Ana", 
    "Caio",
    "Lara", 
    "Marjorie",
    "Leo"
];

chamadaA.splice(1,2, "Rodrigo");
console.log(chamadaA);

// concatenação 

const salaJS = [
    "Evaldo", "Camis", "Mari"
];

const salaPython = [
    "Ju", "Leo", "Raquel"
];

const salaUnificada = salaJS.concat(salaPython);
console.log(salaUnificada);

// lista com duas dimensões
const alunosalunas = ["João", "Juliana", "Caio", "Ana"];
const mediaalunosalunas = [10, 8, 7.5, 9];
console.log(alunosalunas);
console.log(mediaalunosalunas);
const listaalunosemedias = [alunosalunas,mediaalunosalunas];
console.log(listaalunosemedias);
console.log(`A aluna da posição 1 é a aluna ${listaalunosemedias[0][1]} e anota dessa aluna é ${listaalunosemedias[1][1]}`);

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

// procurando aluno 
const sala3 = ["João", "Juliana", "Caio", "Ana"];
const notasala3 = [10, 8, 7.5, 9];
const sala2enotasala3 = [sala3,notasala3];

function exibenomeenota(crianca){
    if(sala2enotasala3[0]. includes(crianca)){
        //const sala3 = sala2enotasala3[0];
        //const notasala3 = sala2enotasala3[1];

        const [sala3, notasala3] = sala2enotasala3;

        const indice = sala3.indexOf(crianca);

        const mediadoaluno = sala2enotasala3[1][indice];

        console.log(`${crianca} tem a média ${mediadoaluno}`);
    } else{
        console.log("Aluno não encontrado");
    }
};
exibenomeenota("Caio")

const numeros = [100, 200, 300, 400, 500, 600];
for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}
for (let indice = 0; indice <= 10; indice++) {
    console.log(indice);
  };
  