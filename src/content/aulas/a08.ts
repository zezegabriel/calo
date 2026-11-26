import type { Aula } from "../tipos";

export const a08: Aula = {
  id: "a08", numero: 8, modulo: 1,
  titulo: "Tocar e cantar, e ler uma cifra",
  resumo: "Fechamento do módulo 1: ler cifra de site, encaixar a voz e apresentar a música escolhida.",
  objetivos: [
    "Ler uma cifra com a letra e saber onde troca o acorde",
    "Cantar e tocar ao mesmo tempo",
    "Tocar a música do módulo do começo ao fim",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "Como ler uma cifra de site", texto:
        "Nas cifras, o nome do acorde aparece em cima da letra, exatamente em cima da sílaba onde ele entra. " +
        "Você troca de acorde naquela sílaba e continua no mesmo acorde até aparecer outro." },
      { tipo: "lista", titulo: "O que mais aparece numa cifra", itens: [
        "**Tom**: o acorde onde a música descansa (\"Tom: G\")",
        "**Capotraste** ou **capo**: em que casa colocar a braçadeira (aula 13)",
        "**Intro** com os acordes tocados antes da voz",
        "Repetições como \"(2x)\": tocar aquela parte duas vezes",
        "Às vezes uma tablatura de um riff ou solo",
      ] },
      { tipo: "lista", titulo: "Tocar e cantar: em etapas", itens: [
        "Toque a parte várias vezes sem cantar, até a mão ir sozinha.",
        "Toque e fale a letra no ritmo, sem melodia.",
        "Toque e cante baixinho.",
        "Se travar, simplifique a mão direita: 4 para baixo funciona com quase tudo.",
      ] },
      { tipo: "atencao", titulo: "Não pare", texto: "Quem ouve percebe muito mais uma parada do que um acorde errado. Se errar, mantenha a mão direita no ritmo e entre no próximo acorde." },
      { tipo: "progressao", titulo: "Revisão do módulo", compassos: ["Em", "Am", "C", "G", "D", "E", "A", "Dm"], nota: "Um compasso de batida pop em cada acorde." },
    ],
    tarefa: [
      "Revisão do módulo: todos os acordes em sequência (3 minutos)",
      "Música do módulo: tocar só (2 vezes)",
      "Música do módulo: tocar e falar a letra (2 vezes)",
      "Música do módulo: tocar e cantar (2 vezes)",
      "Gravar um vídeo tocando a música, para comparar depois",
    ],
  },
  professor: {
    preparar: "Cifra da música do aluno impressa ou aberta, e uma cifra de outra música para treinar leitura.",
    roteiro: [
      { minutos: 8, titulo: "Revisão do módulo", fazer: "Todos os acordes em sequência. Anote quais ainda saem abafados." },
      { minutos: 10, titulo: "Lendo cifra", fazer: "Na cifra da outra música, peça para o aluno apontar onde troca cada acorde enquanto você canta." },
      { minutos: 20, titulo: "Tocar e cantar", fazer: "Siga as etapas com a música do aluno. Volte uma etapa sempre que travar." },
      { minutos: 15, titulo: "Apresentação", fazer: "O aluno toca a música inteira para você, do começo ao fim, sem parar." },
      { minutos: 7, titulo: "Balanço do módulo", fazer: "Mostre o checklist do módulo e combine o que precisa reforçar antes da aula 9." },
    ],
    dicas: [
      "Cantar junto com o aluno nas primeiras vezes tira a pressão.",
      "Gravar no celular e ouvir junto é o feedback mais claro que existe. Faça na própria aula.",
    ],
    errosComuns: [
      "Parar a mão direita quando a voz entra",
      "Trocar o acorde atrasado porque está lendo a letra",
    ],
    sucesso: "O aluno toca a música do módulo do começo ao fim sem parar, cantando ou falando a letra.",
    checklist: [
      "Monta todos os 8 acordes do módulo",
      "Lê uma cifra e troca o acorde na sílaba certa",
      "Toca e canta ao mesmo tempo, ao menos no refrão",
      "Apresentou a música do módulo inteira",
    ],
  },
};
