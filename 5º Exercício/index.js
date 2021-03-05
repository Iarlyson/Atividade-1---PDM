const arr = [1, 2, 3, 4, 5, 6];

const soma = (...valores) => {
  let result = 0;

  valores.map((valor) => {
    result += valor;
  });

  return result;
};

console.log(soma(...arr));

const x = [...arr.splice(0, 1)];

const y = [...arr];

console.log(x);
console.log(y);

// 5.2

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil",
  },
};

const usuario2 = { ...usuario, nome: "Gabriel" };

const usuario3 =  {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};

console.log(usuario2, usuario3);
