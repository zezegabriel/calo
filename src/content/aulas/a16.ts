import type { Aula } from "../tipos";

export const a16: Aula = {
  id: "a16", numero: 16, modulo: 2,
  titulo: "Tocar junto com a gravação",
  resumo: "Fechamento do módulo 2: manter o tempo com metrônomo e com a música original, e apresentar a música do módulo.",
  objetivos: [
    "Tocar no metrônomo sem acelerar",
    "Acompanhar a gravação original de uma música",
    "Apresentar a música do módulo 2 inteira",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "Metrônomo", texto:
        "O metrônomo marca o pulso com um clique. No app, a aba Metrônomo tem o clique e a vibração, com o primeiro tempo mais forte. " +
        "Toque com ele em um andamento lento até não precisar pensar, depois suba de 5 em 5 bpm." },
      { tipo: "lista", titulo: "Treino com metrônomo", itens: [
        "Comece 10 bpm abaixo do andamento em que você toca sem esforço.",
        "Toque 4 voltas da sequência sem errar.",
        "Suba 5 bpm e repita.",
        "Quando errar duas vezes seguidas, volte 10 bpm. Esse é seu andamento de hoje.",
      ] },
      { tipo: "lista", titulo: "Tocar junto com a gravação", itens: [
        "Confira o tom e a casa de capo na cifra.",
        "Ouça a música uma vez só acompanhando a cifra com os olhos.",
        "Toque só o refrão junto, depois a música toda.",
        "Se perder, pare a mão esquerda e mantenha a mão direita no ritmo até achar o próximo acorde.",
      ] },
      { tipo: "progressao", titulo: "Revisão do módulo", compassos: ["E7", "A7", "B7", "F", "Bm", "F#m", "G", "C"], nota: "Um compasso em cada, com a batida que você quiser." },
      { tipo: "atencao", titulo: "Grave de novo", texto: "Grave um vídeo tocando a música do módulo 2 e compare com o vídeo da aula 8." },
    ],
    tarefa: [
      "Treino com metrônomo em G, D, Em, C até achar seu andamento",
      "Revisão do módulo (3 minutos)",
      "Música do módulo 2 junto com a gravação, 3 vezes",
      "Gravar e comparar com o vídeo da aula 8",
    ],
  },
  professor: {
    preparar: "A gravação original da música do aluno e uma caixa de som. Metrônomo pronto.",
    roteiro: [
      { minutos: 5, titulo: "Pestana", fazer: "Bm e F#m, 2 minutos cada." },
      { minutos: 12, titulo: "Metrônomo", fazer: "Siga o treino do material e descubra o andamento confortável do aluno. Anote." },
      { minutos: 8, titulo: "Revisão do módulo", fazer: "Todos os acordes em sequência. Anote os que ainda não saem." },
      { minutos: 20, titulo: "Com a gravação", fazer: "Música do aluno junto com o original. Repita o trecho em que ele se perder." },
      { minutos: 10, titulo: "Apresentação", fazer: "O aluno toca a música do módulo inteira, sem a gravação, para você." },
      { minutos: 5, titulo: "Balanço", fazer: "Comparem os vídeos da aula 8 e de hoje. Combine a música do módulo 3." },
    ],
    dicas: [
      "Comparar os dois vídeos mostra ao aluno a evolução de um jeito que nenhum elogio mostra.",
      "Andamento confortável anotado ajuda você a planejar o módulo 3.",
    ],
    errosComuns: [
      "Acelerar nas partes fáceis",
      "Parar tudo quando perde a gravação",
    ],
    sucesso: "O aluno acompanha a gravação original do começo ao fim e se recupera sozinho quando perde um acorde.",
    checklist: [
      "Toca no metrônomo sem acelerar",
      "Monta os acordes do módulo 2",
      "Acompanha a gravação original",
      "Apresentou a música do módulo 2",
    ],
  },
};
