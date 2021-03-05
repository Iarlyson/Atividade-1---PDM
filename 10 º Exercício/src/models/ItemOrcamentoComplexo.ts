import ItemOrcamento from "./ItemOrcamento";

class ItemOrcamentoComplexo extends ItemOrcamento {
  private nome: string;

  constructor(nome: string, historico: number[], valor: number) {
    super(historico, valor);
    this.nome = nome;
  }

  public getValor() {
    return `O valor do item ${
      this.nome
    } é ${super
      .getValor()
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
  }

  public encontraItem() {
    return `O histórico do item ${this.nome} é ${this.getHistorico()}`;
  }
}

export default ItemOrcamentoComplexo;
