import type { Aula } from "../tipos";

export const a07: Aula = {
  id: "a07", numero: 7, modulo: 1,
  titulo: "Dedilhado P-I-M-A",
  resumo: "Tocar o acorde nota por nota, com cada dedo da mão direita em sua corda.",
  objetivos: [
    "Saber qual dedo da mão direita toca cada corda",
    "Achar a corda do baixo de cada acorde",
    "Dedilhar uma sequência de 4 acordes",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "Cada dedo tem sua corda", texto:
        "No dedilhado, a mão direita fica parada em cima das cordas e cada dedo toca a sua: **I** na corda 3, **M** na corda 2, **A** na corda 1. " +
        "O **P** (polegar) toca o baixo, que muda conforme o acorde." },
      { tipo: "lista", titulo: "A corda do baixo de cada acorde", itens: [
        "Corda 6: E, Em, G",
        "Corda 5: A, Am, C",
        "Corda 4: D, Dm",
      ] },
      { tipo: "dedilhado", id: "pima" },
      { tipo: "tab", tab: {
        titulo: "P-I-M-A em Am e C",
        notas: [[5, 0], [3, 2], [2, 1], [1, 0], "|", [5, 3], [3, 0], [2, 1], [1, 0]],
        contagem: ["P", "I", "M", "A", "", "P", "I", "M", "A"],
      } },
      { tipo: "dedilhado", titulo: "Agora o arpejo de balada", id: "balada6" },
      { tipo: "tab", tab: {
        titulo: "P-I-M-A-M-I em G e Em",
        notas: [[6, 3], [3, 0], [2, 0], [1, 3], [2, 0], [3, 0], "|", [6, 0], [3, 0], [2, 0], [1, 0], [2, 0], [3, 0]],
        contagem: ["P", "I", "M", "A", "M", "I", "", "P", "I", "M", "A", "M", "I"],
      } },
      { tipo: "progressao", titulo: "Sequência para dedilhar", compassos: ["C", "Am", "Dm", "G"], nota: "Um arpejo P-I-M-A-M-I em cada acorde." },
      { tipo: "atencao", titulo: "Mão parada", texto: "Apoie o polegar levemente na corda do baixo antes de começar. A mão não deve pular: só os dedos se mexem, puxando a corda para dentro da mão." },
    ],
    tarefa: [
      "P-I-M-A em cordas soltas (corda 5, 3, 2, 1), 2 minutos",
      "P-I-M-A em Am e C, alternando (3 minutos)",
      "Arpejo de balada em G e Em (3 minutos)",
      "C, Am, Dm, G dedilhado (4 minutos)",
    ],
  },
  professor: {
    preparar: "Leve uma balada lenta conhecida para mostrar o dedilhado aplicado.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Música do aluno, uma passada." },
      { minutos: 8, titulo: "Posição da mão", fazer: "Mão direita apoiada, dedos I, M, A cada um na sua corda. Só cordas soltas." },
      { minutos: 8, titulo: "Baixo de cada acorde", fazer: "Diga um acorde e o aluno toca só o baixo com o polegar. Repita até ficar automático." },
      { minutos: 12, titulo: "P-I-M-A", fazer: "Em Am e C, depois em G e Em. Devagar, todas as notas no mesmo volume." },
      { minutos: 12, titulo: "Arpejo de balada", fazer: "P-I-M-A-M-I. Conte \"1 2 3 4 5 6\" em ritmo constante." },
      { minutos: 10, titulo: "Sequência", fazer: "C, Am, Dm, G dedilhado. Você toca a batida junto enquanto o aluno dedilha." },
      { minutos: 5, titulo: "Fechamento", fazer: "Toque a balada que você trouxe e mostre onde entra o arpejo." },
    ],
    dicas: [
      "Unhas da mão direita um pouco maiores deixam o dedilhado mais claro, mas não são obrigatórias.",
      "O erro mais comum é o polegar tocar a corda errada. O jogo de dizer o acorde e tocar o baixo resolve isso.",
    ],
    errosComuns: [
      "Polegar sempre na corda 6, mesmo no C e no D",
      "Mão direita pulando em vez de só os dedos se mexerem",
      "Notas com volumes muito diferentes",
    ],
    sucesso: "O aluno dedilha C, Am, Dm, G com o arpejo de balada, com o baixo certo em todos os acordes.",
    checklist: [
      "Cada dedo da mão direita toca a sua corda",
      "Acha o baixo de qualquer acorde aprendido",
      "Faz P-I-M-A e P-I-M-A-M-I em ritmo constante",
      "Dedilha uma sequência de 4 acordes",
    ],
  },
};
