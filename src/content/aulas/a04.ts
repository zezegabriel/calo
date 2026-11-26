import type { Aula } from "../tipos";

export const a04: Aula = {
  id: "a04", numero: 4, modulo: 1,
  titulo: "A batida pop",
  resumo: "A batida mais usada no pop, no sertanejo e no rock acústico, com contagem em colcheias.",
  objetivos: [
    "Contar 1 e 2 e 3 e 4 e em voz alta",
    "Tocar a batida pop com a mão em movimento constante",
    "Usar a batida em uma sequência de 4 acordes",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "Como funciona", texto:
        "A batida pop tem 8 espaços por compasso, mas você toca só 6 deles. O segredo é que a mão faz sempre o mesmo movimento da batida baixo e cima: " +
        "nos dois espaços vazios ela passa por cima das cordas sem encostar." },
      { tipo: "batida", id: "pop" },
      { tipo: "lista", titulo: "Passo a passo", itens: [
        "Faça baixo e cima em cordas abafadas (mão esquerda encostada nas cordas) contando alto.",
        "Agora deixe de tocar o \"e\" do 1: a mão sobe sem encostar.",
        "Depois deixe de tocar o 3: a mão desce sem encostar.",
        "Pronto: baixo, baixo-cima, cima-baixo-cima.",
        "Só depois disso, coloque um acorde (comece com Em, que não exige nada da mão esquerda).",
      ] },
      { tipo: "atencao", titulo: "Ritmo primeiro", texto: "Se a mão direita para quando a esquerda troca de acorde, volte para 4 para baixo nessa troca. A batida completa vem com a repetição." },
      { tipo: "progressao", titulo: "Treino com a batida pop", compassos: ["G", "C", "G", "D"] },
      { tipo: "progressao", titulo: "Mais uma", compassos: ["Am", "C", "D", "Em"] },
    ],
    tarefa: [
      "Batida pop em cordas abafadas, contando alto (3 minutos)",
      "Batida pop em Em parado (2 minutos)",
      "G, C, G, D com a batida pop no metrônomo a 70 bpm (5 minutos)",
      "Am, C, D, Em com a batida pop (3 minutos)",
    ],
  },
  professor: {
    preparar: "Metrônomo em 70 bpm. Separe uma música pop que o aluno conheça para ouvir a batida.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Desafio da aula 3 (G, D, C, D) com baixo e cima." },
      { minutos: 8, titulo: "Contagem", fazer: "Contar \"1 e 2 e\" batendo na perna: mão desce no número, sobe no \"e\". Sem violão." },
      { minutos: 15, titulo: "Montando a batida", fazer: "Siga o passo a passo do material do aluno, um passo de cada vez, em cordas abafadas." },
      { minutos: 7, titulo: "Batida com Em", fazer: "Só Em, só a batida. Toque junto com o aluno, você fazendo a mesma batida." },
      { minutos: 20, titulo: "Sequências", fazer: "G, C, G, D e depois Am, C, D, Em. Primeiro você toca e o aluno faz só a batida; depois inverte." },
      { minutos: 5, titulo: "Fechamento", fazer: "Ouçam juntos uma música com essa batida e batam na perna acompanhando." },
    ],
    dicas: [
      "Falar a batida em voz alta (\"baixo, baixo-cima, cima-baixo-cima\") ajuda mais do que olhar a seta.",
      "Se o aluno toca o espaço vazio sem querer, peça para afastar a mão das cordas um pouco nesse momento.",
    ],
    errosComuns: [
      "Mão para nos espaços vazios",
      "Duas descidas seguidas no lugar de baixo e cima",
      "Acelerar quando a troca é fácil e atrasar quando é difícil",
    ],
    sucesso: "O aluno toca G, C, G, D com a batida pop por quatro voltas no metrônomo a 70 bpm.",
    checklist: [
      "Conta \"1 e 2 e 3 e 4 e\" com a mão no lugar",
      "Mantém o movimento nos espaços vazios",
      "Toca a batida pop em uma sequência de 4 acordes",
    ],
  },
};
