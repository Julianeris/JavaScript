import User from "./user.js";

const novoUser = new User ("Mariana", "m@m.com", "2021-01-01")
console.log(novoUser.exibirInfos())

novoUser.#nome = "Marcia"