alert('Bem vindo ao jogo do número secreto');
let numeroMaximo = 500
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1; 
//enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if (numeroSecreto == chute) { 
        break
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor do que ${chute}`);
        } else {
            alert(`O número secreto é maior do que ${chute}`);
        }
        tentativas++;
    } 
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${ palavraTentativa}`);


