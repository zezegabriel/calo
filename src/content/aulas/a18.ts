import type { Aula } from "../tipos";

export const a18: Aula = {
  id: "a18", numero: 18, modulo: 3,
  titulo: "Pop rock: abafado e power chords",
  resumo: "A batida com abafado que imita a caixa da bateria, e os acordes de duas ou três notas do rock.",
  objetivos: [
    "Fazer o abafado (X) com a palma da mão direita",
    "Tocar a batida de pop rock",
    "Montar power chords e mover a forma pelo braço",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "O abafado", texto:
        "No abafado, a mão direita desce e a parte de baixo da palma bate nas cordas no mesmo movimento, cortando o som. " +
        "O resultado é um \"tchá\" seco, que no violão faz o papel da caixa da bateria nos tempos 2 e 4." },
      { tipo: "batida", id: "poprock" },
      { tipo: "lista", titulo: "Treinando o abafado", itens: [
        "Só o abafado, em cordas soltas, no 2 e no 4, contando alto.",
        "Junte o baixo no 1 e no 3: \"baixo, tchá, baixo, tchá\".",
        "Preencha as subidas para chegar na batida completa.",
      ] },
      { tipo: "progressao", titulo: "Pop rock em G", compassos: ["G", "D", "Em", "C"] },
      { tipo: "texto", titulo: "Power chords", texto:
        "O power chord (escrito com 5, como E5) tem só duas notas diferentes: a nota do nome e a quinta dela. Não é maior nem menor. " +
        "Ele soa pesado e limpo, e por isso é a base do rock. A forma com dedos 1, 3 e 4 é a mesma em qualquer casa." },
      { tipo: "acordes", cifras: ["E5", "A5", "G5", "C5", "D5"] },
      { tipo: "lista", titulo: "A regra da casa, de novo", itens: [
        "Forma na corda 6: o nome vem da nota da corda 6 naquela casa (casa 3 = G5, casa 5 = A5).",
        "Forma na corda 5: o nome vem da nota da corda 5 (casa 3 = C5, casa 5 = D5).",
      ] },
      { tipo: "atencao", titulo: "Palm mute", texto: "Encoste a lateral da mão direita nas cordas graves, bem perto do cavalete, e toque o power chord para baixo. O som fica abafado e grave: é o \"tum tum tum\" do rock." },
      { tipo: "progressao", titulo: "Riff de rock", compassos: ["E5", "G5", "A5", "A5"], nota: "Colcheias para baixo, com palm mute." },
    ],
    tarefa: [
      "Pestana do dia: F e Bm (2 minutos)",
      "Abafado no 2 e no 4 em cordas soltas (2 minutos)",
      "Pop rock em G, D, Em, C (4 minutos)",
      "Power chords: subir a forma da casa 1 à 7 dizendo o nome",
      "Riff de rock com palm mute (3 minutos)",
    ],
  },
  professor: {
    preparar: "Um rock ou pop rock que o aluno conheça, com batida marcada.",
    roteiro: [
      { minutos: 5, titulo: "Pestana", fazer: "F e Bm." },
      { minutos: 12, titulo: "Abafado", fazer: "Mostre o abafado devagar. O som deve ser seco, sem nota. Siga o treino do material." },
      { minutos: 12, titulo: "Batida pop rock", fazer: "G, D, Em, C. Você faz o abafado junto para o aluno ouvir onde ele cai." },
      { minutos: 12, titulo: "Power chords", fazer: "E5 e A5 primeiro (cordas soltas), depois a forma móvel." },
      { minutos: 14, titulo: "Riff", fazer: "Riff com palm mute. Depois aplique em uma música de rock." },
      { minutos: 5, titulo: "Fechamento", fazer: "Mostre que o power chord funciona no lugar de maior e de menor." },
    ],
    dicas: [
      "Se o abafado sai com nota, a mão está batendo muito leve ou longe do cavalete.",
      "Power chord abafa as cordas que não toca com a ponta do dedo 1 encostando de leve nelas.",
    ],
    errosComuns: [
      "Abafado com som de nota",
      "Power chord tocando as cordas finas",
      "Palm mute longe demais do cavalete, abafando tudo",
    ],
    sucesso: "O aluno toca G, D, Em, C com a batida de pop rock e o abafado no 2 e no 4, sem parar.",
    checklist: [
      "Abafado seco no 2 e no 4",
      "Toca a batida de pop rock",
      "Acha power chords pela casa",
      "Faz o palm mute",
    ],
  },
};
