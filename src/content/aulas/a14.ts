import type { Aula } from "../tipos";

export const a14: Aula = {
  id: "a14", numero: 14, modulo: 2,
  titulo: "Reggae e contratempo",
  resumo: "Tocar fora do tempo forte e cortar o som com a mão esquerda.",
  objetivos: [
    "Sentir o contratempo (os tempos 2 e 4)",
    "Cortar o som do acorde aliviando a mão esquerda",
    "Tocar uma levada de reggae em 3 sequências",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "Contratempo", texto:
        "Na maioria das batidas, o acorde mais forte cai no tempo 1. No reggae, o 1 fica vazio e o acorde entra no 2 e no 4, curto. " +
        "É o mesmo lugar onde você bate palma numa música animada." },
      { tipo: "batida", id: "reggae" },
      { tipo: "lista", titulo: "Como cortar o som", itens: [
        "Toque o acorde no tempo 2.",
        "Logo depois, alivie a pressão da mão esquerda, sem tirar os dedos das cordas. O som para.",
        "Aperte de novo antes do tempo 4 e repita.",
        "Em acordes com cordas soltas, encoste a palma da mão direita nas cordas para parar o som.",
      ] },
      { tipo: "atencao", titulo: "Conte alto", texto: "Conte \"1, 2, 3, 4\" e toque só no 2 e no 4. No começo, bater o pé no 1 e no 3 ajuda a não se perder." },
      { tipo: "progressao", titulo: "Reggae em G", compassos: ["G", "C", "G", "D"] },
      { tipo: "progressao", titulo: "Reggae menor", compassos: ["Am", "Am", "G", "G"] },
      { tipo: "progressao", titulo: "Com o F", compassos: ["C", "Am", "F", "G"] },
    ],
    tarefa: [
      "Contar e bater palma no 2 e no 4 com uma música (2 minutos)",
      "Reggae em Am parado, cortando o som (3 minutos)",
      "Reggae em G, C, G, D (3 minutos)",
      "Reggae em C, Am, F, G (3 minutos)",
    ],
  },
  professor: {
    preparar: "Um reggae conhecido para ouvir antes. Metrônomo em 75 bpm.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Música do módulo com o capo na casa escolhida." },
      { minutos: 8, titulo: "Ouvir", fazer: "Ouçam o reggae e batam palma no 2 e no 4." },
      { minutos: 12, titulo: "Cortar o som", fazer: "Só em Am: tocar, aliviar a mão esquerda, tocar. O som deve ser curto e seco." },
      { minutos: 20, titulo: "Sequências", fazer: "As três sequências. Você toca o baixo no tempo 1 e o aluno o acorde no 2 e no 4." },
      { minutos: 10, titulo: "Adaptando uma música", fazer: "Toquem uma música pop conhecida com levada de reggae." },
      { minutos: 5, titulo: "Fechamento", fazer: "Mostre que o contratempo também aparece em ska e em parte do rock." },
    ],
    dicas: [
      "Fazer o aluno tocar com você fazendo o tempo 1 deixa o contratempo muito mais claro.",
      "Na volta ao F, tirar a pressão da pestana é o corte mais natural.",
    ],
    errosComuns: [
      "Acorde longo demais, que vira batida comum",
      "Entrar no 1 por reflexo",
    ],
    sucesso: "O aluno toca C, Am, F, G em reggae com o acorde curto no 2 e no 4, sem entrar no 1.",
    checklist: [
      "Bate palma no contratempo",
      "Corta o som com a mão esquerda",
      "Toca reggae em 3 sequências",
    ],
  },
};
