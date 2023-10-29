const user = { 
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos : function(){
        console.log(this.nome, this.email)
    }
}
user.exibirInfos()
//const exibir = user.exibirInfos
//exibir()
const exibir = function(){
    console.log(this.nome, this.email)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir()

const admin = { 
    nome: "Mariana",
    email: "m@m.com",
    role: "estudante",
    criarCurso() {
        console.log("Curso criado")
    }       
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()