import type { Aula } from "../tipos";

export const a13: Aula = {
  id: "a13", numero: 13, modulo: 2,
  titulo: "Capotraste e mudar o tom",
  resumo: "Usar o capotraste para tocar no tom da sua voz sem aprender acordes novos.",
  objetivos: [
    "Colocar o capotraste do jeito certo",
    "Entender o que muda quando o capo sobe uma casa",
    "Escolher o tom que fica bom para a própria voz",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "O que o capotraste faz", texto:
        "O capotraste (ou capo) é uma braçadeira que aperta todas as cordas numa casa. Ele funciona como uma nova pestana: " +
        "você continua fazendo os mesmos desenhos de acorde, mas tudo soa mais agudo. Cada casa sobe o som meio tom." },
      { tipo: "lista", titulo: "Como colocar", itens: [
        "Logo atrás do traste, igual a um dedo.",
        "Reto, paralelo ao traste.",
        "Firme o suficiente para nenhuma corda chiar, sem apertar demais (desafina).",
        "Depois de colocar, confira a afinação.",
      ] },
      { tipo: "lista", titulo: "A ordem das notas (meio tom de cada vez)", itens: [
        "C, C#, D, D#, E, F, F#, G, G#, A, A#, B, e volta para C",
        "Entre E e F, e entre B e C, não existe nota no meio",
        "# (sustenido) é meio tom acima: C# fica entre C e D",
      ] },
      { tipo: "atencao", titulo: "Exemplo", texto: "Você faz o desenho de G com o capo na casa 2: o som é de A. Com o capo na casa 3, o desenho de G soa como A#. Numa cifra que diz \"capo na 2ª casa\", você toca os desenhos escritos com o capo ali." },
      { tipo: "progressao", titulo: "Mesmos desenhos, tons diferentes", compassos: ["G", "D", "Em", "C"], nota: "Toque sem capo, depois com o capo na casa 2 e na casa 4. Cante junto e veja onde sua voz fica confortável." },
      { tipo: "texto", titulo: "Para achar seu tom", texto: "Se a música fica aguda demais para cantar, desça o capo (ou tire). Se fica grave e sem força, suba. Anote a casa que ficou boa na cifra da música." },
    ],
    tarefa: [
      "G, D, Em, C sem capo e com capo nas casas 2, 3 e 5",
      "Sua música do módulo: achar a casa de capo que fica melhor para sua voz",
      "Dizer o tom real de G com capo na 2 (A) e de C com capo na 3 (D#)",
    ],
  },
  professor: {
    preparar: "Leve um capotraste. Se o aluno não tiver, recomende um modelo simples de mola.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Sequência inventada pelo aluno na tarefa da aula 12." },
      { minutos: 10, titulo: "Colocando o capo", fazer: "O aluno coloca e tira o capo algumas vezes, conferindo se alguma corda chia." },
      { minutos: 10, titulo: "Meio tom", fazer: "Mostre a ordem das notas tocando a corda 5 casa por casa: A, A#, B, C..." },
      { minutos: 15, titulo: "Tom da voz", fazer: "Com a música do aluno, teste o capo em várias casas enquanto ele canta. Anotem a melhor." },
      { minutos: 15, titulo: "Cifra com capo", fazer: "Pegue uma cifra que indique capo e toquem juntos." },
      { minutos: 5, titulo: "Fechamento", fazer: "Registre nas anotações a casa de capo de cada música do aluno." },
    ],
    dicas: [
      "Para quem canta, essa aula costuma ser a de maior ganho imediato: a música passa a soar bem com a voz.",
      "Evite entrar em transposição escrita agora. Ela aparece na aula 23.",
    ],
    errosComuns: [
      "Capo no meio da casa ou torto",
      "Esquecer de afinar depois de colocar o capo",
      "Achar que precisa aprender acordes novos com o capo",
    ],
    sucesso: "O aluno coloca o capo sem chiado e escolhe sozinho a casa que fica boa para cantar a música dele.",
    checklist: [
      "Coloca o capo corretamente",
      "Explica que cada casa sobe meio tom",
      "Toca uma cifra que indica capo",
      "Achou o tom da própria voz em uma música",
    ],
  },
};
