import type { Aula } from "../tipos";

export const a05: Aula = {
  id: "a05", numero: 5, modulo: 1,
  titulo: "A sequência de mil músicas",
  resumo: "G, D, Em, C: a sequência mais comum do pop, e como uma música é dividida em partes.",
  objetivos: [
    "Tocar G, D, Em, C com a batida pop",
    "Entender introdução, verso, refrão e final",
    "Tocar uma música inteira do começo ao fim, mesmo simples",
  ],
  aluno: {
    blocos: [
      { tipo: "progressao", titulo: "A sequência", compassos: ["G", "D", "Em", "C"], nota: "Batida pop, um compasso em cada acorde." },
      { tipo: "texto", titulo: "Por que essa sequência aparece tanto", texto:
        "Esses quatro acordes são vizinhos naturais: no tom de Sol, eles são o 1º, o 5º, o 6º e o 4º acorde da família (você vai entender isso na aula 12). " +
        "Muitas músicas de pop, sertanejo, gospel e rock usam exatamente essa ordem, ou uma das suas rotações, como Em, C, G, D." },
      { tipo: "lista", titulo: "As partes de uma música", itens: [
        "**Introdução**: os acordes tocados antes da voz entrar",
        "**Verso** (estrofe): conta a história; a letra muda a cada vez",
        "**Refrão**: a parte que repete igual e que todo mundo canta",
        "**Ponte**: uma parte diferente, que aparece uma vez antes do último refrão",
        "**Final**: geralmente para em um acorde, deixando soar",
      ] },
      { tipo: "progressao", titulo: "Música de treino: verso", compassos: ["Em", "C", "G", "D"] },
      { tipo: "progressao", titulo: "Música de treino: refrão", compassos: ["G", "D", "Em", "C"] },
      { tipo: "lista", titulo: "Forma completa", itens: [
        "Introdução: refrão 1 vez",
        "Verso: 2 vezes",
        "Refrão: 2 vezes",
        "Verso: 2 vezes",
        "Refrão: 2 vezes",
        "Final: uma batida em G, deixando soar",
      ] },
      { tipo: "atencao", titulo: "Escolha uma música sua", texto: "Procure em um site de cifras uma música que você goste com os acordes G, D, Em e C. Ela vai ser sua música do módulo 1." },
    ],
    tarefa: [
      "G, D, Em, C com a batida pop, 5 minutos sem parar",
      "Tocar a música de treino do começo ao fim 3 vezes",
      "Escolher uma música com esses acordes e trazer na próxima aula",
    ],
  },
  professor: {
    preparar: "Tenha 2 ou 3 músicas conhecidas que usam G, D, Em, C. Escolha pelo gosto anotado na aula 1.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Batida pop em G, C, G, D." },
      { minutos: 12, titulo: "A sequência", fazer: "G, D, Em, C. A troca D para Em costuma travar: isole esse par." },
      { minutos: 8, titulo: "Partes da música", fazer: "Ouçam uma música e o aluno levanta a mão quando começa o refrão." },
      { minutos: 15, titulo: "Música de treino", fazer: "Toquem a forma completa juntos. Você conta as voltas em voz alta (\"verso, segunda vez\")." },
      { minutos: 15, titulo: "Uma música real", fazer: "Toque uma música conhecida com esses acordes. Você canta e o aluno acompanha, mesmo que só com 4 para baixo." },
      { minutos: 5, titulo: "Fechamento", fazer: "Peça para o aluno escolher a música do módulo e anote o nome." },
    ],
    dicas: [
      "Tocar uma música real que o aluno reconhece é o momento que mais motiva no começo. Não pule.",
      "Se a batida pop ainda não sai, a música de treino funciona com 4 para baixo.",
    ],
    errosComuns: [
      "Perder a conta de quantas voltas já fez",
      "Esperar o acorde ficar perfeito antes de tocar",
    ],
    sucesso: "O aluno toca a música de treino inteira sem parar, do começo ao fim, com você cantando ou contando.",
    checklist: [
      "Toca G, D, Em, C com a batida pop",
      "Reconhece o refrão em uma música",
      "Toca a forma completa sem parar",
      "Escolheu a música do módulo",
    ],
  },
};
