import type { Aula } from "../tipos";

export const a20: Aula = {
  id: "a20", numero: 20, modulo: 3,
  titulo: "Bossa nova simplificada",
  resumo: "O polegar marcando o tempo e os dedos tocando no contratempo, com a sequência mais comum do jazz e da bossa.",
  objetivos: [
    "Separar o polegar dos dedos na batida de bossa",
    "Tocar a sequência Dm7, G7, C7M",
    "Manter o polegar constante enquanto os dedos sincopam",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "Duas mãos dentro de uma", texto:
        "Na bossa, o polegar toca o baixo em todos os tempos, sem variar, como um relógio. Os dedos I, M e A pinçam as cordas 3, 2 e 1 juntos, em lugares que caem entre os tempos. " +
        "Essa batida é uma versão simplificada da levada original, boa para começar." },
      { tipo: "batida", id: "bossa" },
      { tipo: "lista", titulo: "Passo a passo", itens: [
        "Só o polegar, nos 4 tempos, em Dm7 (baixo na corda 4) até ficar automático.",
        "Junte os dedos só no tempo 1, junto com o polegar.",
        "Acrescente os dedos no \"e\" do 2 e no \"e\" do 3.",
        "Conte devagar: \"um, dois-e, três-e, quatro\".",
      ] },
      { tipo: "texto", titulo: "A sequência II, V, I", texto:
        "Dm7, G7, C7M é o 2º, o 5º e o 1º acorde da família de Dó. Essa sequência aparece em quase todo standard de jazz e de bossa. " +
        "O Dm7 prepara, o G7 cria tensão e o C7M resolve." },
      { tipo: "progressao", titulo: "II, V, I em C", compassos: ["Dm7", "G7", "C7M", "C7M"] },
      { tipo: "progressao", titulo: "Com o vi", compassos: ["C7M", "Am7", "Dm7", "G7"] },
      { tipo: "progressao", titulo: "II, V, I em G", compassos: ["Am7", "D7", "G7M", "G7M"] },
      { tipo: "atencao", titulo: "Volume", texto: "Bossa é tocada baixinho. O polegar um pouco mais forte que os dedos, e nada de bater nas cordas." },
    ],
    tarefa: [
      "Só o polegar nos 4 tempos em Dm7, G7 e C7M (2 minutos)",
      "Batida de bossa em Dm7 parado (3 minutos)",
      "II, V, I em C com a batida (4 minutos)",
      "C7M, Am7, Dm7, G7 com a batida (4 minutos)",
    ],
  },
  professor: {
    preparar: "Uma bossa nova clássica para ouvir. Metrônomo em 70 bpm.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Acordes 7M e m7 da aula 19." },
      { minutos: 8, titulo: "Ouvir", fazer: "Ouçam uma bossa e o aluno bate o pé no pulso. Mostre que o violão toca entre os tempos." },
      { minutos: 15, titulo: "Polegar e dedos", fazer: "Siga o passo a passo. Não avance enquanto o polegar não estiver constante." },
      { minutos: 15, titulo: "II, V, I", fazer: "Dm7, G7, C7M. A troca precisa acontecer sem o polegar parar." },
      { minutos: 12, titulo: "Sequências", fazer: "C7M, Am7, Dm7, G7 e o II, V, I em G." },
      { minutos: 5, titulo: "Fechamento", fazer: "Explique que há variações da levada e que esta é a base para chegar nelas." },
    ],
    dicas: [
      "Muitos alunos tocam o polegar junto com os dedos todas as vezes. Separe com o polegar sozinho primeiro.",
      "Tocar a batida enquanto você canta uma melodia simples ajuda a manter a mão independente.",
    ],
    errosComuns: [
      "Polegar parando quando os dedos entram",
      "Acelerar nos contratempos",
      "Tocar forte demais",
    ],
    sucesso: "O aluno toca Dm7, G7, C7M com o polegar constante nos 4 tempos e os dedos nos contratempos.",
    checklist: [
      "Polegar constante nos 4 tempos",
      "Dedos no contratempo",
      "Toca o II, V, I em C",
      "Toca em volume baixo e controlado",
    ],
  },
};
