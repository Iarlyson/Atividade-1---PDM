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
