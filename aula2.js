/// Estruturas elaboradas
const cliente = {
    nome: "João",
    idade: 24,
    email:"joao@firma.com",
    telefone: ["11555555550", "11666666600"],
}
console.log(cliente.telefone);

cliente.enderecos = [
    {
    Rua: "Rua Joseph Climber",
    Numero: 1334,
    Apartamento: true,
    Complemento: "ap 934",
},
];

cliente.enderecos.push({
    Rua: "Rua Joseph Climber",
    Numero: 404,
    Apartamento: false,
})

console.log(cliente)

const novocliente = {
    nome: "Luis",
    idade: 24,
    email:"luis@firma.com",
    telefone: ["1188889999", "1188889999"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
};

novocliente.efetuaPagamento(25);