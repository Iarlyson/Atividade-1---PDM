//4 exercício

//4.1 Desestruturação simples

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

//Alternativa

const empresa2 = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const nome1 = empresa2.nome;
const cidade1 = empresa2.endereco.cidade;
const estado1 = empresa2.endereco.estado;

console.log(nome1);
console.log(cidade1);
console.log(estado1);

//4.2 Desestruturação em parâmetros

function mostraInfo(usuario) {
    const {nome , idade} = usuario;
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23}));

//correção
function mostraInfo({nome , idade}) {
     
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23}));


//Alternativa

function mostraInfo(usuario) {
    const nome  = usuario.nome;
    const idade = usuario.idade
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23}));