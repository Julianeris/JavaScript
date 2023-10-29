//leitura json
const dados = require("./cliente.json");
console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);

const clienteString = JSON.parse(clienteEmString);
console.log(clienteString)
console.log(typeof clienteString)