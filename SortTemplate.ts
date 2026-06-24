export abstract class Sortemplate {
  public ordenar(palavras: string[]): string[] {
    const copia = [...palavras];

    this.aplicarOrdenacao(copia);

    return copia;
  }

  protected aplicarOrdenacao(palavras: string[]): void {
    palavras.sort();
  }
}
