class ItemOrcamento {
  private historico: number[];
  private valor: number;

  constructor(historico: number[], valor: number) {
    this.historico = historico;
    this.valor = valor;
  }

  public getHistorico() {
    return this.historico.map<string>((item) =>
      item.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    );
  }

  public setValor(valor: number) {
    this.valor = valor;
  }

  public getValor(): number | string {
    return this.valor;
  }
}

export default ItemOrcamento;
