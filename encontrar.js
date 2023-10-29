const clientes = require("./clientes.json");
//console.log(clientes);

function encontrar (lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}
const encontrado = encontrar(clientes, "nome", "Kirby");
console.log(encontrado);

const encontrado2 = encontrar(clientes, "telefone", "4775323087")
console.log(encontrado2)

function apartamentoSemComplemento(clientes){
    return clientes.filter((cliente) =>{
        return(
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
};

const filtrados = apartamentoSemComplemento(clientes);