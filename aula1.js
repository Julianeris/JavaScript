/// não é uma estrutura de dados, são variáveis que guardam valores
const listaCPF = [ 111111, 222222, 333333];
const informacaoPessoa = ["nome", "jose", "idade", "32", "CPF", "111222"]

/// objetos
const objetoPessoa = { 
    nome: "Jose",
    idade: 32,
}
/// modelagem de cliente
const cliente = {
    nome: "Andre",
    idade: 32,
    CPF: "112233",
    email:"andre@dominio.com"
}

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} em anos`)
console.log(`Os 3 primeiros digitos desse CPF são ${cliente.CPF.substring(0,3)}`)
console.log(`
O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} em anos`
)
/// alteração de propriedades 
const pessoa = {
    nome: "Luma",
    profissao:"Engenheira",
}

console.log(pessoa.nome)
console.log(pessoa.telefone)

pessoa.telefone = "11 2233445566"
console.log(pessoa.telefone)

pessoa.nome = "Luma Silva"
console.log(pessoa)

/// deletando conj de chave ou valor 
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }
   delete objPersonagem.aliado
   delete objPersonagem["status"]

console.log(objPersonagem.aliado)
console.log(objPersonagem.status)
console.log(objPersonagem)