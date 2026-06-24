export abstract class SortTemplate {
  public ordenar(palavras: string[]): string[] {
    const copia = [...palavras];

    copia.sort((palavra1, palavra2) => {
      return this.comparar(palavra1, palavra2);
    });

    return copia;
  }

  protected comparar(palavra1: string, palavra2: string): number {
    return palavra1.localeCompare(palavra2);
  }
}
