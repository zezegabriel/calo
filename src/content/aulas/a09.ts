import type { Aula } from "../tipos";

export const a09: Aula = {
  id: "a09", numero: 9, modulo: 2,
  titulo: "Acordes com sétima e o blues",
  resumo: "O 7 na cifra, os seis acordes com sétima mais usados e o blues de 12 compassos.",
  objetivos: [
    "Ler o 7 na cifra e montar A7, D7, E7, G7, B7 e C7",
    "Tocar o blues de 12 compassos em Mi",
    "Usar o acorde com sétima para puxar para o próximo",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "O que o 7 faz", texto:
        "Um acorde com 7 é o acorde normal com uma nota a mais que cria tensão, como uma pergunta esperando resposta. " +
        "Por isso ele quase sempre aparece logo antes do acorde onde a música descansa: G7 puxa para C, D7 puxa para G, E7 puxa para Am ou A." },
      { tipo: "acordes", titulo: "Os mais fáceis", cifras: ["E7", "A7", "D7"] },
      { tipo: "acordes", titulo: "Os outros três", cifras: ["G7", "C7", "B7"] },
      { tipo: "atencao", titulo: "B7 é o primeiro com 4 dedos", texto: "Monte devagar, um dedo de cada vez, do 1 ao 4. Vale treinar a troca B7 para E: o dedo 2 fica na casa 2 da corda 5 nos dois." },
      { tipo: "progressao", titulo: "Pergunta e resposta", compassos: ["C", "G7", "C", "G7"] },
      { tipo: "progressao", titulo: "Blues em Mi: compassos 1 a 4", compassos: ["E7", "E7", "E7", "E7"] },
      { tipo: "progressao", titulo: "Compassos 5 a 8", compassos: ["A7", "A7", "E7", "E7"] },
      { tipo: "progressao", titulo: "Compassos 9 a 12", compassos: ["B7", "A7", "E7", "B7"], nota: "O B7 no fim prepara a volta para o começo. Na última volta, termine em E7." },
      { tipo: "batida", titulo: "Batida para o blues", id: "colcheias" },
    ],
    tarefa: [
      "Montar os 6 acordes com sétima, 5 vezes cada",
      "C, G7, C, G7 e depois G, D7, G, D7 (3 minutos)",
      "Troca B7 e E, 20 vezes",
      "Blues de 12 compassos, 3 voltas sem parar",
    ],
  },
  professor: {
    preparar: "Metrônomo em 80 bpm. Se puder, ouça com o aluno um blues tradicional antes de tocar.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Revise os acordes do módulo 1 que ficaram fracos no balanço da aula 8." },
      { minutos: 8, titulo: "Para que serve o 7", fazer: "Toque C, G, C e depois C, G7, C. Pergunte qual soa mais como \"volta para casa\"." },
      { minutos: 12, titulo: "E7, A7, D7", fazer: "Mostre cada um a partir do acorde sem 7 (E, A, D): é tirar ou mudar um dedo." },
      { minutos: 10, titulo: "G7, C7, B7", fazer: "B7 com calma. Se demorar, deixe para a tarefa." },
      { minutos: 20, titulo: "Blues de 12 compassos", fazer: "Você conta os compassos em voz alta. Depois o aluno toca e você faz um solo simples por cima." },
      { minutos: 5, titulo: "Fechamento", fazer: "Mostre que 12 compassos é uma forma fixa que aparece em rock e blues." },
    ],
    dicas: [
      "A forma do blues é ótima para treinar contagem de compassos. Peça para o aluno dizer o número do compasso enquanto toca.",
      "Se o B7 travar, use B7 só com os dedos 1, 2 e 3 (deixe a corda 1 solta) provisoriamente.",
    ],
    errosComuns: [
      "Perder a conta e trocar para o A7 cedo demais",
      "Corda 4 abafada no E7 (ela é solta)",
    ],
    sucesso: "O aluno toca três voltas do blues de 12 compassos em Mi sem se perder na forma.",
    checklist: [
      "Monta os 6 acordes com sétima",
      "Explica que o 7 puxa para o próximo acorde",
      "Faz a troca B7 e E no tempo",
      "Toca o blues de 12 compassos sem se perder",
    ],
  },
};
