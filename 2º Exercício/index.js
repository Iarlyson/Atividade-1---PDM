//2º exercício

const projetos = [
    { nome:'projeto1', valor:10000, empresa:'A',endereço:{rua:'x',cidade:'Z',numero:45} },
    { nome:'projeto2', valor:20000, empresa:'B',endereço:{rua:'y',cidade:'T',numero:4} },
    { nome:'projeto3', valor:15000, empresa:'C',endereço:{rua:'a',cidade:'Z',numero:5} }
];

//2.1 Utiizando o map

const valoresProjetos = () => projetos.map(item => item.valor)

console.log(valoresProjetos())

//2.2 Utilizando o filter 

const projetoMesmaCidade = () => projetos.filter(item => item.endereço.cidade == "T");

console.log(projetoMesmaCidade())


//2.3 Utilizando o find 

const projetoDaEmpresa = () => projetos.find(item => item.empresa == "Google");

console.log(projetoDaEmpresa())

//2.4 Unindo Operações

const projetoMultiplicadoeFiltrado = () => projetos.map(item => { item.valor = item.valor * 2;
return item;
}).filter(item => item.valor < 30000);

console.log(projetoMultiplicadoeFiltrado());