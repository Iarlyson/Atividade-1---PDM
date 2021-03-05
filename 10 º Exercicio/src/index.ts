import ItemOrcamentoComplexo from "./models/ItemOrcamentoComplexo";

const item = new ItemOrcamentoComplexo("Notebook", [1500, 2000], 3000);

console.log(item.getValor());
console.log(item.encontraItem());
