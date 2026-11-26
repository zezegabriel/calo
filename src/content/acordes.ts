import type { Acorde } from "./tipos";

// Ordem das cordas em `casas` e `dedos`: 6, 5, 4, 3, 2, 1.
const lista: Acorde[] = [
  // Módulo 1
  { cifra: "Em", nome: "Mi menor", casas: [0, 2, 2, 0, 0, 0], dedos: [0, 2, 3, 0, 0, 0] },
  { cifra: "Am", nome: "Lá menor", casas: ["x", 0, 2, 2, 1, 0], dedos: [0, 0, 2, 3, 1, 0] },
  { cifra: "C", nome: "Dó maior", casas: ["x", 3, 2, 0, 1, 0], dedos: [0, 3, 2, 0, 1, 0] },
  { cifra: "G", nome: "Sol maior", casas: [3, 2, 0, 0, 0, 3], dedos: [2, 1, 0, 0, 0, 3] },
  { cifra: "D", nome: "Ré maior", casas: ["x", "x", 0, 2, 3, 2], dedos: [0, 0, 0, 1, 3, 2] },
  { cifra: "E", nome: "Mi maior", casas: [0, 2, 2, 1, 0, 0], dedos: [0, 2, 3, 1, 0, 0] },
  { cifra: "A", nome: "Lá maior", casas: ["x", 0, 2, 2, 2, 0], dedos: [0, 0, 1, 2, 3, 0] },
  { cifra: "Dm", nome: "Ré menor", casas: ["x", "x", 0, 2, 3, 1], dedos: [0, 0, 0, 2, 3, 1] },

  // Sétimas
  { cifra: "A7", nome: "Lá com sétima", casas: ["x", 0, 2, 0, 2, 0], dedos: [0, 0, 2, 0, 3, 0] },
  { cifra: "D7", nome: "Ré com sétima", casas: ["x", "x", 0, 2, 1, 2], dedos: [0, 0, 0, 2, 1, 3] },
  { cifra: "E7", nome: "Mi com sétima", casas: [0, 2, 0, 1, 0, 0], dedos: [0, 2, 0, 1, 0, 0] },
  { cifra: "G7", nome: "Sol com sétima", casas: [3, 2, 0, 0, 0, 1], dedos: [3, 2, 0, 0, 0, 1] },
  { cifra: "B7", nome: "Si com sétima", casas: ["x", 2, 1, 2, 0, 2], dedos: [0, 2, 1, 3, 0, 4] },
  { cifra: "C7", nome: "Dó com sétima", casas: ["x", 3, 2, 3, 1, 0], dedos: [0, 3, 2, 4, 1, 0] },

  // Pestana
  {
    cifra: "F", nome: "Fá maior (meia pestana)", casas: ["x", "x", 3, 2, 1, 1], dedos: [0, 0, 3, 2, 1, 1],
    pestana: { casa: 1, de: 2, ate: 1 },
  },
  {
    cifra: "F (pestana)", nome: "Fá maior com pestana inteira", casas: [1, 3, 3, 2, 1, 1], dedos: [1, 3, 4, 2, 1, 1],
    pestana: { casa: 1, de: 6, ate: 1 },
  },
  {
    cifra: "Bm", nome: "Si menor", casas: ["x", 2, 4, 4, 3, 2], dedos: [0, 1, 3, 4, 2, 1],
    pestana: { casa: 2, de: 5, ate: 1 },
  },
  {
    cifra: "B", nome: "Si maior", casas: ["x", 2, 4, 4, 4, 2], dedos: [0, 1, 2, 3, 4, 1],
    pestana: { casa: 2, de: 5, ate: 1 },
  },
  {
    cifra: "F#m", nome: "Fá sustenido menor", casas: [2, 4, 4, 2, 2, 2], dedos: [1, 3, 4, 1, 1, 1],
    pestana: { casa: 2, de: 6, ate: 1 },
  },
  {
    cifra: "Cm", nome: "Dó menor", casas: ["x", 3, 5, 5, 4, 3], dedos: [0, 1, 3, 4, 2, 1],
    pestana: { casa: 3, de: 5, ate: 1 }, casaInicial: 3,
  },
  {
    cifra: "Gm", nome: "Sol menor", casas: [3, 5, 5, 3, 3, 3], dedos: [1, 3, 4, 1, 1, 1],
    pestana: { casa: 3, de: 6, ate: 1 }, casaInicial: 3,
  },

  // Baixo invertido
  { cifra: "G/B", nome: "Sol com baixo em Si", casas: ["x", 2, 0, 0, 0, 3], dedos: [0, 1, 0, 0, 0, 3] },
  { cifra: "C/E", nome: "Dó com baixo em Mi", casas: [0, 3, 2, 0, 1, 0], dedos: [0, 3, 2, 0, 1, 0] },
  { cifra: "D/F#", nome: "Ré com baixo em Fá sustenido", casas: [2, "x", 0, 2, 3, 2], dedos: [1, 0, 0, 2, 4, 3] },
  { cifra: "Am/G", nome: "Lá menor com baixo em Sol", casas: [3, 0, 2, 2, 1, 0], dedos: [4, 0, 2, 3, 1, 0] },

  // Sétimas maiores e menores (MPB e bossa)
  { cifra: "Am7", nome: "Lá menor com sétima", casas: ["x", 0, 2, 0, 1, 0], dedos: [0, 0, 2, 0, 1, 0] },
  { cifra: "Dm7", nome: "Ré menor com sétima", casas: ["x", "x", 0, 2, 1, 1], dedos: [0, 0, 0, 2, 1, 1], pestana: { casa: 1, de: 2, ate: 1 } },
  { cifra: "Em7", nome: "Mi menor com sétima", casas: [0, 2, 0, 0, 0, 0], dedos: [0, 2, 0, 0, 0, 0] },
  { cifra: "Bm7", nome: "Si menor com sétima", casas: ["x", 2, 0, 2, 0, 2], dedos: [0, 1, 0, 2, 0, 3] },
  { cifra: "C7M", nome: "Dó com sétima maior", casas: ["x", 3, 2, 0, 0, 0], dedos: [0, 3, 2, 0, 0, 0] },
  { cifra: "G7M", nome: "Sol com sétima maior", casas: [3, 2, 0, 0, 0, 2], dedos: [3, 2, 0, 0, 0, 1] },
  { cifra: "D7M", nome: "Ré com sétima maior", casas: ["x", "x", 0, 2, 2, 2], dedos: [0, 0, 0, 1, 1, 1], pestana: { casa: 2, de: 3, ate: 1 } },
  { cifra: "A7M", nome: "Lá com sétima maior", casas: ["x", 0, 2, 1, 2, 0], dedos: [0, 0, 2, 1, 3, 0] },

  // Suspensos e com nona
  { cifra: "Dsus4", nome: "Ré com quarta suspensa", casas: ["x", "x", 0, 2, 3, 3], dedos: [0, 0, 0, 1, 2, 3] },
  { cifra: "Dsus2", nome: "Ré com segunda suspensa", casas: ["x", "x", 0, 2, 3, 0], dedos: [0, 0, 0, 1, 3, 0] },
  { cifra: "Asus4", nome: "Lá com quarta suspensa", casas: ["x", 0, 2, 2, 3, 0], dedos: [0, 0, 1, 2, 3, 0] },
  { cifra: "Asus2", nome: "Lá com segunda suspensa", casas: ["x", 0, 2, 2, 0, 0], dedos: [0, 0, 1, 2, 0, 0] },
  { cifra: "Cadd9", nome: "Dó com nona", casas: ["x", 3, 2, 0, 3, 0], dedos: [0, 2, 1, 0, 3, 0] },
  { cifra: "Em9", nome: "Mi menor com nona", casas: [0, 2, 4, 0, 0, 0], dedos: [0, 1, 3, 0, 0, 0] },

  // Power chords
  { cifra: "E5", nome: "Mi (power chord)", casas: [0, 2, 2, "x", "x", "x"], dedos: [0, 1, 2, 0, 0, 0] },
  { cifra: "A5", nome: "Lá (power chord)", casas: ["x", 0, 2, 2, "x", "x"], dedos: [0, 0, 1, 2, 0, 0] },
  { cifra: "G5", nome: "Sol (power chord)", casas: [3, 5, 5, "x", "x", "x"], dedos: [1, 3, 4, 0, 0, 0], casaInicial: 3 },
  { cifra: "C5", nome: "Dó (power chord)", casas: ["x", 3, 5, 5, "x", "x"], dedos: [0, 1, 3, 4, 0, 0], casaInicial: 3 },
  { cifra: "D5", nome: "Ré (power chord)", casas: ["x", 5, 7, 7, "x", "x"], dedos: [0, 1, 3, 4, 0, 0], casaInicial: 5 },
];

export const acordes: Record<string, Acorde> = Object.fromEntries(lista.map((a) => [a.cifra, a]));

export const todosOsAcordes = lista;

export function acharAcorde(cifra: string): Acorde | undefined {
  return acordes[cifra];
}
