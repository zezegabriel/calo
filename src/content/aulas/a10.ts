import type { Aula } from "../tipos";

export const a10: Aula = {
  id: "a10", numero: 10, modulo: 2,
  titulo: "Baixo e batida: sertanejo e country",
  resumo: "Separar o baixo da batida com o polegar e alternar dois baixos no mesmo acorde.",
  objetivos: [
    "Tocar o baixo do acorde com o polegar e a batida com os dedos",
    "Alternar entre dois baixos em cada acorde",
    "Aplicar em uma sequência de sertanejo",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "A ideia", texto:
        "Em vez de bater em todas as cordas, a mão direita divide o trabalho: o polegar toca uma corda grave (o baixo) e depois os dedos fazem a batida só nas cordas finas. " +
        "Isso imita um baixo e um violão tocando juntos." },
      { tipo: "batida", id: "country" },
      { tipo: "lista", titulo: "Os dois baixos de cada acorde", itens: [
        "**G**: corda 6 e depois corda 4",
        "**C**: corda 5 e depois corda 4",
        "**D**: corda 4 e depois corda 5 (solta)",
        "**E** e **Em**: corda 6 e depois corda 5",
        "**A** e **Am**: corda 5 e depois corda 4",
      ] },
      { tipo: "texto", texto: "No primeiro P do compasso, toque o baixo principal. No segundo P, toque o baixo alternado. O resultado: \"baixo, batida, outro baixo, batida\"." },
      { tipo: "tab", tab: {
        titulo: "Baixo alternado em G (a batida entra nos espaços)",
        notas: [[6, 3], null, [[3, 0], [2, 0], [1, 3]], null, [4, 0], null, [[3, 0], [2, 0], [1, 3]], null],
        contagem: ["1", "e", "2", "e", "3", "e", "4", "e"],
      } },
      { tipo: "progressao", titulo: "Sequência de sertanejo", compassos: ["G", "C", "D", "G"] },
      { tipo: "progressao", titulo: "Com acorde menor", compassos: ["Em", "C", "G", "D"] },
    ],
    tarefa: [
      "Baixo alternado só com o polegar em G, C e D (3 minutos)",
      "Batida baixo e batida em G parado (2 minutos)",
      "G, C, D, G com baixo alternado (5 minutos)",
      "Em, C, G, D com baixo alternado (3 minutos)",
    ],
  },
  professor: {
    preparar: "Uma música sertaneja ou country de que o aluno goste, para mostrar a batida no contexto.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Blues de 12 compassos, uma volta." },
      { minutos: 10, titulo: "Só os baixos", fazer: "Diga o acorde, o aluno toca os dois baixos com o polegar, sem batida." },
      { minutos: 12, titulo: "Baixo e batida", fazer: "Em G parado. A batida pega só as cordas 3, 2 e 1." },
      { minutos: 18, titulo: "Sequências", fazer: "G, C, D, G e depois Em, C, G, D. O baixo alternado é o primeiro que cai quando o aluno se concentra na troca: fique atento." },
      { minutos: 10, titulo: "Música", fazer: "Aplique a batida em uma música do gosto do aluno." },
      { minutos: 5, titulo: "Fechamento", fazer: "Peça para o aluno escolher a música do módulo 2." },
    ],
    dicas: [
      "Fale os números das cordas do baixo em voz alta no início (\"6, batida, 4, batida\").",
      "No D, o baixo alternado na corda 5 solta soa bem e é fácil, mesmo sem estar no acorde.",
    ],
    errosComuns: [
      "Polegar sempre na mesma corda",
      "Batida pegando as cordas graves junto",
    ],
    sucesso: "O aluno toca G, C, D, G com baixo alternado certo em cada acorde, sem parar.",
    checklist: [
      "Sabe os dois baixos de G, C, D, E e A",
      "Separa polegar e batida",
      "Toca uma sequência com baixo alternado",
      "Escolheu a música do módulo 2",
    ],
  },
};
