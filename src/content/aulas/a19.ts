import type { Aula } from "../tipos";

export const a19: Aula = {
  id: "a19", numero: 19, modulo: 3,
  titulo: "As cores da MPB: sétima maior e menor",
  resumo: "Acordes 7M e m7, que deixam o som mais suave e são a base da MPB e da bossa nova.",
  objetivos: [
    "Ler 7M e m7 na cifra",
    "Montar C7M, G7M, D7M, A7M, Am7, Dm7, Em7 e Bm7",
    "Trocar acordes simples pelas versões com sétima",
  ],
  aluno: {
    blocos: [
      { tipo: "lista", titulo: "Três tipos de sétima", itens: [
        "**7** (como G7): tensão, quer resolver. Você já conhece (aula 9).",
        "**7M** (como C7M): acorde maior com som suave e aberto. Também aparece como maj7.",
        "**m7** (como Am7): acorde menor mais leve, menos triste.",
      ] },
      { tipo: "acordes", titulo: "Sétima maior (7M)", cifras: ["C7M", "G7M", "D7M", "A7M"] },
      { tipo: "acordes", titulo: "Menor com sétima (m7)", cifras: ["Am7", "Dm7", "Em7", "Bm7"] },
      { tipo: "atencao", titulo: "Compare", texto: "Toque C e depois C7M, Am e depois Am7. É o mesmo acorde com uma cor a mais. Muitos desses desenhos são o acorde que você já sabe com um dedo a menos." },
      { tipo: "progressao", titulo: "Sequência em C", compassos: ["C7M", "Am7", "Dm7", "G7"] },
      { tipo: "progressao", titulo: "Sequência em G", compassos: ["G7M", "Em7", "Am7", "D7"] },
      { tipo: "progressao", titulo: "Sequência em D", compassos: ["D7M", "Bm7", "Em7", "A7"] },
      { tipo: "dedilhado", titulo: "Use dedilhado", id: "pimi" },
      { tipo: "texto", texto: "Esses acordes ficam mais bonitos dedilhados ou com batida leve. Batida forte de pop rock tira a delicadeza deles." },
    ],
    tarefa: [
      "Tocar cada acorde simples e sua versão 7M ou m7, ouvindo a diferença",
      "C7M, Am7, Dm7, G7 dedilhado (4 minutos)",
      "G7M, Em7, Am7, D7 dedilhado (4 minutos)",
      "Pegar uma música do módulo 1 e trocar os acordes por 7M e m7",
    ],
  },
  professor: {
    preparar: "Uma música de MPB do gosto do aluno que use acordes com 7M e m7.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Pop rock com abafado, uma sequência." },
      { minutos: 8, titulo: "Os três tipos de 7", fazer: "Toque G, G7 e G7M. Peça para o aluno descrever cada um com uma palavra." },
      { minutos: 15, titulo: "Os acordes", fazer: "Mostre cada um a partir do acorde que o aluno já conhece. Am7 e Em7 são mais fáceis que Am e Em." },
      { minutos: 15, titulo: "Sequências", fazer: "As três sequências com o arpejo P-I-M-I." },
      { minutos: 12, titulo: "Rearmonizar", fazer: "Toquem a música do módulo 1 trocando os acordes pelas versões com 7. Compare." },
      { minutos: 5, titulo: "Fechamento", fazer: "Anuncie que a próxima aula é bossa nova, usando esses acordes." },
    ],
    dicas: [
      "Rearmonizar uma música que o aluno já toca mostra na prática o efeito da sétima.",
      "Nem toda música aceita 7M em qualquer acorde: deixe o ouvido do aluno decidir.",
    ],
    errosComuns: [
      "Confundir G7 e G7M na cifra",
      "Batida pesada demais nesses acordes",
    ],
    sucesso: "O aluno toca C7M, Am7, Dm7, G7 dedilhado e diferencia 7, 7M e m7 de ouvido.",
    checklist: [
      "Lê 7, 7M e m7 na cifra",
      "Monta os 8 acordes da aula",
      "Diferencia os três tipos de sétima de ouvido",
      "Rearmonizou uma música conhecida",
    ],
  },
};
