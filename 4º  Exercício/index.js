//4º exercício

//4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const {nome, endereco} = empresa;
const {cidade, estado} = endereco;

console.log(nome);
console.log(cidade);
console.log(estado);

//4.2

function mostraInfo(usuario) {
    const {nome , idade} = usuario;
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23}));