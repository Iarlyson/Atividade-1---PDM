//3.1

const arr = [1, 2, 3, 4, 5];

console.log(arr.map(item => item+10))

//3.2
const usuario = {nome: "Diego", idade: 23};
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

//3.3

const nomeVariavel = 'Diego';
const idadeVariavel = 23;

const mostraUsuario = (nome = 'Diego', idade = 18 ) => ({nome , idade});

console.log(mostraUsuario(nomeVariavel, idadeVariavel));
console.log(mostraUsuario(nomeVariavel));

//3.4
const promisse = () => 
  new Promise((resolve, reject) => resolve());

console.log(promisse())