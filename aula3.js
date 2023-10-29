// repetição
const cliente = {
    nome: "João",
    idade: 24,
    email:"joao@firma.com",
    telefone: ["11555555550", "11666666600"],
}
cliente.enderecos = [
    {
    Rua: "Rua Joseph Climber",
    Numero: 1334,
    Apartamento: true,
    Complemento: "ap 934",
    },
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
      console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
  }


  const chavesDoObjeto = Object.keys(cliente);

  console.log(chavesDoObjeto);
  
  if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
  }

//Espalhamento
function ligaParaCliente(telefoneComercial, TelefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${TelefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ... cliente.enderecos[0],
};

console.log(encomenda);