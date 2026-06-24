import { SortTemplate } from "./SortTemplate";

export class SortTamanho extends SortTemplate {
  protected comparar(palavra1: string, palavra2: string): number {
    return palavra1.length - palavra2.length;
  }
}
