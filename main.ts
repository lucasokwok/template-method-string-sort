import { SortReverso } from "./SortReverso";
import { SortTamanho } from "./SortTamanho.ts";
import { SortDefault } from "./SortTemplate";

const palavras = [
	"cachorro",
	"gato",
	"rato",
	"elefante",
	"abacaxi",
	"uva",
	"maçã",
];

console.log("Original:", palavras);

const reverso = new SortReverso();
console.log("Ordenado pela última letra:", reverso.ordenar(palavras));

const tamanhos = new SortTamanho();
console.log("Ordenado por tamanho:", tamanhos.ordenar(palavras));

const normal = new SortDefault();
console.log("Ordenado normal:", normal.ordenar(palavras));


