import { SortTemplate } from "./SortTemplate";

export class SortReverso extends SortTemplate {
  protected comparar(palavra1: string, palavra2: string): number {
    let palavra1Reversa = palavra1.split("").reverse().join("");
    let palavra2Reversa = palavra2.split("").reverse().join("");

    return palavra1Reversa.localeCompare(palavra2Reversa);
  }
}
