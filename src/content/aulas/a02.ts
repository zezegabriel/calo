import type { Aula } from "../tipos";

export const a02: Aula = {
  id: "a02", numero: 2, modulo: 1,
  titulo: "Dó e Sol, batida baixo e cima",
  resumo: "Dois acordes maiores muito usados e a primeira batida com subida.",
  objetivos: [
    "Montar C e G",
    "Tocar a batida baixo e cima sem parar a mão",
    "Fazer o ciclo C, G, Am, Em",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "Revisão rápida", texto: "Toque o ciclo da aula 1 (Em, Em, Am, Am) duas vezes antes de começar." },
      { tipo: "acordes", titulo: "Acordes novos", cifras: ["C", "G"] },
      { tipo: "texto", texto:
        "**C (Dó maior)** começa na corda 5. O dedo 3 fica na casa 3 da corda 5, o 2 na casa 2 da corda 4 e o 1 na casa 1 da corda 2. " +
        "Cuidado para o dedo 2 não encostar na corda 3, que precisa soar solta.\n\n" +
        "**G (Sol maior)** usa as 6 cordas. O dedo 3 vai lá na casa 3 da corda 1, então o braço precisa esticar um pouco." },
      { tipo: "atencao", titulo: "Truque da troca C e Am", texto: "Os dedos 1 e 2 são iguais nos dois acordes. Só o dedo 3 muda: casa 3 da corda 5 no C, casa 2 da corda 3 no Am." },
      { tipo: "batida", titulo: "Batida nova", id: "colcheias" },
      { tipo: "texto", texto: "Conte \"1 e 2 e 3 e 4 e\". Desce no número, sobe no \"e\". A mão funciona como um pêndulo: mesmo quando você não toca, ela continua indo e voltando." },
      { tipo: "progressao", titulo: "Treino 1: só C e G", compassos: ["C", "C", "G", "G"] },
      { tipo: "progressao", titulo: "Treino 2: a sequência do dia", compassos: ["C", "G", "Am", "Em"], nota: "Primeiro com 4 para baixo, depois com baixo e cima." },
    ],
    tarefa: [
      "Montar C e G 10 vezes cada, sem tocar",
      "Batida baixo e cima em Em, contando alto (2 minutos)",
      "Treino 1: C e G (3 minutos)",
      "Treino 2: C, G, Am, Em com 4 para baixo (3 minutos)",
      "Treino 2 com baixo e cima, bem devagar (3 minutos)",
    ],
  },
  professor: {
    preparar: "Metrônomo do app em 60 bpm. Se possível, uma música do gosto do aluno que use C, G, Am e Em.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Ciclo Em e Am. Observe se a troca melhorou; se não, mais 3 minutos nela antes de seguir." },
      { minutos: 12, titulo: "C e G", fazer: "Monte cada um, toque corda por corda. No C, o problema mais comum é a corda 3 abafada pelo dedo 2." },
      { minutos: 10, titulo: "Batida baixo e cima", fazer: "Só a mão direita, cordas abafadas com a mão esquerda. Depois em Em. Conte junto com o aluno." },
      { minutos: 10, titulo: "C e G alternando", fazer: "Treino 1, primeiro com 4 batidas para baixo, depois com baixo e cima." },
      { minutos: 15, titulo: "C, G, Am, Em", fazer: "Treino 2. Se a troca G para Am travar, isole só esse par por 2 minutos." },
      { minutos: 8, titulo: "Fechamento", fazer: "Toquem juntos C, G, Am, Em uma última vez, você cantando qualquer melodia por cima. Mostre a tarefa e anote a troca mais difícil." },
    ],
    dicas: [
      "Na batida, peça para o aluno pegar só as cordas mais finas na subida. Subida forte em todas as cordas soa embolado.",
      "Se o G estiver difícil, aceite temporariamente a versão só com o dedo 3 na corda 1 e as outras soltas (G simplificado).",
    ],
    errosComuns: [
      "Mão direita parando entre os golpes",
      "Corda 3 abafada no C",
      "Tocar a corda 6 no C e no Am",
    ],
    sucesso: "O aluno toca C, G, Am, Em com 4 batidas para baixo por quatro voltas seguidas, e consegue ao menos uma volta com baixo e cima.",
    checklist: [
      "Monta C com a corda 3 soando",
      "Monta G com as 6 cordas soando",
      "Mantém o pêndulo da mão direita",
      "Faz C, G, Am, Em sem parar a contagem",
    ],
  },
};
