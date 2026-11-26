import type { Aula } from "../tipos";

export const a17: Aula = {
  id: "a17", numero: 17, modulo: 3,
  titulo: "Baixos que caminham",
  resumo: "Acordes com barra na cifra (G/B, C/E, D/F#) e linhas de baixo que descem ou sobem.",
  objetivos: [
    "Ler a barra na cifra: acorde / nota do baixo",
    "Montar G/B, C/E, D/F# e Am/G",
    "Tocar uma linha de baixo descendente",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "O que a barra quer dizer", texto:
        "Em **G/B**, a parte da esquerda é o acorde (G) e a da direita é a nota que fica no baixo (B, Si). " +
        "O acorde é o mesmo; só muda a nota mais grave. Isso cria baixos que andam de um acorde para o outro em vez de pular." },
      { tipo: "acordes", titulo: "Acordes novos", cifras: ["G/B", "C/E", "D/F#", "Am/G"] },
      { tipo: "progressao", titulo: "Baixo descendo em C", compassos: ["C", "G/B", "Am", "Am/G", "F", "G", "C", "C"], nota: "Toque só o baixo de cada acorde primeiro: Dó, Si, Lá, Sol, Fá. Escute a escada descendo." },
      { tipo: "progressao", titulo: "Baixo subindo em G", compassos: ["G", "D/F#", "Em", "C", "G/B", "Am", "D", "G"] },
      { tipo: "texto", titulo: "Ligando com o baixo", texto:
        "Mesmo sem acorde invertido, você pode ligar dois acordes tocando uma nota de passagem no baixo no último tempo do compasso. " +
        "De G para C: toque G e, no tempo 4, toque a corda 5 na casa 2 (Si) antes de chegar no C." },
      { tipo: "tab", tab: {
        titulo: "Passagem de G para C pelo baixo",
        notas: [[6, 3], null, [6, 3], [5, 2], "|", [5, 3]],
        contagem: ["1", "", "3", "4", "", "1"],
      } },
      { tipo: "atencao", titulo: "Mire o baixo", texto: "Com acorde invertido, o baixo precisa ser a nota mais grave. No D/F#, a corda 5 não toca. No G/B, a corda 6 não toca." },
    ],
    tarefa: [
      "Pestana do dia: Bm e F#m (2 minutos)",
      "Montar G/B, C/E, D/F# e Am/G, 5 vezes cada",
      "Baixo descendo em C, só os baixos e depois com acorde (4 minutos)",
      "Baixo subindo em G com o arpejo de balada (4 minutos)",
    ],
  },
  professor: {
    preparar: "Escolha uma balada que use baixo descendente; elas são comuns em MPB e pop romântico.",
    roteiro: [
      { minutos: 5, titulo: "Pestana", fazer: "Bm e F#m." },
      { minutos: 8, titulo: "A barra na cifra", fazer: "Toque G e G/B. Pergunte o que mudou. Mostre que é só o baixo." },
      { minutos: 12, titulo: "Os quatro acordes", fazer: "D/F# é o mais difícil: o dedo 1 na corda 6 casa 2. Deixe o aluno usar o polegar por cima se for mais confortável." },
      { minutos: 15, titulo: "Linhas de baixo", fazer: "Primeiro só os baixos com o polegar, depois os acordes inteiros com dedilhado." },
      { minutos: 15, titulo: "Passagens", fazer: "Mostre passagens de G para C, de C para Am, de D para G." },
      { minutos: 5, titulo: "Fechamento", fazer: "Peça para o aluno procurar acordes com barra na música do módulo 3." },
    ],
    dicas: [
      "O dedilhado deixa a linha de baixo muito mais audível do que a batida. Comece por ele.",
      "D/F# com o polegar por cima do braço é usado por muitos violonistas populares; não é erro.",
    ],
    errosComuns: [
      "Tocar a corda 6 solta no G/B",
      "Tocar a corda 5 no D/F#",
    ],
    sucesso: "O aluno toca C, G/B, Am, Am/G, F, G, C com o baixo certo em todos os acordes.",
    checklist: [
      "Explica o que é acorde / baixo",
      "Monta G/B, C/E, D/F# e Am/G",
      "Toca uma linha de baixo descendente",
      "Faz uma passagem de baixo entre dois acordes",
    ],
  },
};
