const notas = [10, 9.5, 8, 7, 6];

const notasatualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota+1;
})

console.log(notasatualizadas);

const nomes  = ["ana Julia", "Caio vinicius", "BIA silva"]

const nomesPadronizados = nomes.map((nomes) => {
    return nomes.toUpperCase();
})
console.log(nomesPadronizados)