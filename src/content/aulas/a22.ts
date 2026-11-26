import type { Aula } from "../tipos";

export const a22: Aula = {
  id: "a22", numero: 22, modulo: 3,
  titulo: "Pentatônica e o primeiro solo",
  resumo: "A escala de cinco notas que serve para solar em rock, blues e pop, tocada em tablatura.",
  objetivos: [
    "Tocar a pentatônica de Lá menor na casa 5",
    "Tocar a pentatônica de Mi menor com cordas soltas",
    "Improvisar uma frase curta sobre uma base",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "O que é", texto:
        "Uma escala é uma sequência de notas que combinam com um tom. A pentatônica tem só 5 notas, e por isso é difícil errar com ela: quase toda nota soa bem sobre os acordes do tom. " +
        "Você vai aprendê-la como um desenho no braço, sem partitura." },
      { tipo: "tab", tab: {
        titulo: "Pentatônica de Lá menor (casa 5), subindo",
        notas: [[6, 5], [6, 8], [5, 5], [5, 7], [4, 5], [4, 7], [3, 5], [3, 7], [2, 5], [2, 8], [1, 5], [1, 8]],
      } },
      { tipo: "lista", titulo: "Como tocar", itens: [
        "Dedo 1 em tudo que é casa 5. Dedo 3 na casa 7. Dedo 4 na casa 8.",
        "Use palheta ou o indicador, alternando para baixo e para cima.",
        "Suba e desça devagar no metrônomo a 60 bpm, uma nota por tempo.",
        "Quando ficar fácil, duas notas por tempo.",
      ] },
      { tipo: "tab", tab: {
        titulo: "Pentatônica de Mi menor (cordas soltas)",
        notas: [[6, 0], [6, 3], [5, 0], [5, 2], [4, 0], [4, 2], [3, 0], [3, 2], [2, 0], [2, 3], [1, 0], [1, 3]],
      } },
      { tipo: "tab", tab: {
        titulo: "Frase pronta em Lá menor",
        notas: [[1, 5], [2, 8], [2, 5], "|", [3, 7], [3, 5], [4, 7], "|", [3, 5], [4, 7], [4, 5]],
        contagem: ["1", "2", "3", "", "1", "2", "3", "", "1", "2", "3"],
      } },
      { tipo: "progressao", titulo: "Base para solar", compassos: ["Am", "G", "F", "E7"], nota: "Grave a base no celular ou peça para alguém tocar, e solte frases com a pentatônica de Lá menor por cima." },
      { tipo: "atencao", titulo: "Menos é mais", texto: "Toque poucas notas e deixe espaço. Termine as frases na nota Lá (corda 6 casa 5, corda 4 casa 7 ou corda 1 casa 5): ela soa como ponto final." },
    ],
    tarefa: [
      "Pentatônica de Lá menor subindo e descendo no metrônomo (4 minutos)",
      "Pentatônica de Mi menor subindo e descendo (2 minutos)",
      "Frase pronta, 10 vezes",
      "Gravar a base Am, G, F, E7 e improvisar por cima (5 minutos)",
    ],
  },
  professor: {
    preparar: "Uma palheta média para o aluno. Você vai tocar a base enquanto ele sola.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Enfeites da aula 21 em uma sequência." },
      { minutos: 15, titulo: "Desenho de Lá menor", fazer: "Os dedos certos em cada casa. Subir e descer devagar, palhetada alternada." },
      { minutos: 8, titulo: "Mi menor", fazer: "O mesmo desenho com as cordas soltas. Mostre que é o mesmo padrão 12 casas abaixo." },
      { minutos: 10, titulo: "Frase pronta", fazer: "Ensine a frase e repita sobre a base." },
      { minutos: 17, titulo: "Improviso", fazer: "Você toca Am, G, F, E7 e o aluno improvisa. Peça frases de 3 ou 4 notas, terminando no Lá." },
      { minutos: 5, titulo: "Fechamento", fazer: "Mostre que a mesma escala funciona sobre o blues em Mi da aula 9." },
    ],
    dicas: [
      "Improvisar trava muita gente. Dê regras pequenas: só 3 notas, só duas cordas, sempre terminar no Lá.",
      "Sobre o blues em Mi, a pentatônica de Mi menor com cordas soltas é um bom começo.",
    ],
    errosComuns: [
      "Dedo 1 saindo da casa 5 e a mão inteira mudando de posição",
      "Palhetada só para baixo",
      "Tocar notas sem parar, sem respiração",
    ],
    sucesso: "O aluno toca a pentatônica de Lá menor no metrônomo e faz frases curtas sobre a base terminando no Lá.",
    checklist: [
      "Toca a pentatônica de Lá menor com os dedos certos",
      "Toca a pentatônica de Mi menor",
      "Toca a frase pronta",
      "Improvisa frases curtas sobre uma base",
    ],
  },
};
