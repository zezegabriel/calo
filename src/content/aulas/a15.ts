import type { Aula } from "../tipos";

export const a15: Aula = {
  id: "a15", numero: 15, modulo: 2,
  titulo: "Pestana inteira: as formas de Mi e de Lá",
  resumo: "Os acordes com pestana são desenhos que você já sabe, empurrados para outra casa.",
  objetivos: [
    "Montar Bm e F#m",
    "Montar o F com pestana inteira e o B",
    "Entender que a pestana leva um desenho para qualquer casa",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "A ideia", texto:
        "Pestana inteira é o dedo 1 deitado em todas as cordas. Ele faz o papel da pestana do violão, e os outros dedos montam um desenho que você já conhece. " +
        "**Forma de Em**: o Em montado com os dedos 3 e 4, mais a pestana. **Forma de Am**: o Am montado com os dedos 2, 3 e 4, mais a pestana." },
      { tipo: "acordes", titulo: "Forma de Am (começa na corda 5)", cifras: ["Bm", "B"] },
      { tipo: "acordes", titulo: "Forma de Em e de E (começa na corda 6)", cifras: ["F#m", "F (pestana)"] },
      { tipo: "lista", titulo: "A casa decide o acorde", itens: [
        "Forma de Am na casa 2: Bm. Na casa 3: Cm. Na casa 5: Dm.",
        "Forma de Em na casa 2: F#m. Na casa 3: Gm. Na casa 5: Am.",
        "Forma de E na casa 1: F. Na casa 3: G. Na casa 5: A.",
        "O nome vem da nota da corda onde o acorde começa, naquela casa.",
      ] },
      { tipo: "lista", titulo: "Pestana sem dor", itens: [
        "Dedo 1 bem perto do traste, usando a lateral do dedo (lado do polegar).",
        "Polegar atrás do braço, mais ou menos atrás do dedo 2, sem apertar.",
        "O peso do braço puxando para trás faz a pressão.",
        "Treine em períodos curtos: 2 minutos de pestana, 1 de descanso.",
      ] },
      { tipo: "progressao", titulo: "Em D com Bm", compassos: ["D", "Bm", "G", "A"] },
      { tipo: "progressao", titulo: "Em A com F#m", compassos: ["A", "F#m", "D", "E"] },
      { tipo: "progressao", titulo: "Em C com F inteiro", compassos: ["C", "F (pestana)", "G", "C"] },
    ],
    tarefa: [
      "Bm: montar, conferir corda por corda, soltar (10 vezes)",
      "F#m: montar, conferir, soltar (10 vezes)",
      "D, Bm, G, A com a batida pop (3 minutos)",
      "A, F#m, D, E com a batida pop (3 minutos)",
      "Achar o Cm e o Gm no braço só pela regra da casa",
    ],
  },
  professor: {
    preparar: "Lembre o aluno de que a pestana inteira leva semanas. Planeje voltar nela no começo de toda aula do módulo 3.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "C, Am, F, G com o F de meia pestana." },
      { minutos: 10, titulo: "Só a pestana", fazer: "Dedo 1 deitado na casa 5 (mais fácil que na casa 1) e tocar as 6 cordas uma por uma." },
      { minutos: 12, titulo: "Bm e B", fazer: "Forma de Am na casa 2. Comece pelo Bm, que é o que mais aparece." },
      { minutos: 10, titulo: "F#m e F", fazer: "Forma de Em e de E. O F na casa 1 é o mais duro: aceite som sujo hoje." },
      { minutos: 15, titulo: "Sequências", fazer: "As três sequências. Se a pestana cansar, intercale com descanso." },
      { minutos: 8, titulo: "Regra da casa", fazer: "Peça Cm, Gm, Dm e Am com pestana: o aluno acha a casa pela nota da corda." },
    ],
    dicas: [
      "Pestana mais acima no braço (casa 5, 7) é mais fácil porque a corda fica mais baixa. Comece por lá.",
      "Dor no pulso significa pulso dobrado demais: peça para baixar o braço do violão um pouco e trazer o cotovelo para perto do corpo.",
    ],
    errosComuns: [
      "Polegar apertando por trás",
      "Dedo 1 longe do traste",
      "Pulso muito dobrado",
    ],
    sucesso: "O aluno monta Bm com ao menos 4 cordas limpas e toca D, Bm, G, A sem parar a batida.",
    checklist: [
      "Monta Bm e F#m",
      "Monta F com pestana inteira, mesmo com alguma corda suja",
      "Explica a forma de Em e a forma de Am",
      "Acha um acorde com pestana pela casa",
    ],
  },
};
