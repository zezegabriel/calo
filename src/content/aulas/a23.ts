import type { Aula } from "../tipos";

export const a23: Aula = {
  id: "a23", numero: 23, modulo: 3,
  titulo: "Tons menores e transposição",
  resumo: "A família de um tom menor, o tom relativo e como mudar uma música de tom no papel.",
  objetivos: [
    "Saber a família de Am e de Em",
    "Entender o tom relativo (C e Am, G e Em)",
    "Transpor uma sequência para outro tom",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "Tom relativo", texto:
        "Am usa os mesmos acordes da família de C, só que a música descansa no Am em vez do C. Por isso C e Am são **relativos**. " +
        "Todo tom maior tem um relativo menor: é o vi da família (aula 12)." },
      { tipo: "lista", titulo: "Pares de relativos", itens: [
        "C e Am", "G e Em", "D e Bm", "A e F#m", "E e C#m", "F e Dm",
      ] },
      { tipo: "lista", titulo: "Família de Lá menor", itens: [
        "Am, C, Dm, Em, F, G",
        "Na prática o Em costuma virar **E** ou **E7**, para puxar com mais força de volta para o Am (você ouviu isso na aula 6)",
      ] },
      { tipo: "progressao", titulo: "Em Lá menor", compassos: ["Am", "F", "C", "G"] },
      { tipo: "progressao", titulo: "Com a resolução", compassos: ["Am", "Dm", "E7", "Am"] },
      { tipo: "progressao", titulo: "Em Mi menor", compassos: ["Em", "C", "G", "D"], nota: "Mesmos acordes da família de G, descansando no Em." },
      { tipo: "texto", titulo: "Transpor sem capo", texto:
        "Transpor é mudar a música de tom mudando os acordes. Escreva a ordem das notas (C, C#, D, D#, E, F, F#, G, G#, A, A#, B) e ande o mesmo número de casas em todos os acordes. " +
        "O tipo do acorde não muda: m continua m, 7 continua 7." },
      { tipo: "atencao", titulo: "Exemplo", texto: "G, D, Em, C transposto 2 casas para cima: G vira A, D vira E, Em vira F#m, C vira D. Resultado: A, E, F#m, D." },
      { tipo: "progressao", titulo: "Transposto", compassos: ["A", "E", "F#m", "D"] },
    ],
    tarefa: [
      "Dizer o relativo menor de C, G, D, A e E sem olhar",
      "Am, Dm, E7, Am com a batida pop (3 minutos)",
      "Transpor G, D, Em, C para o tom de C no papel e tocar",
      "Transpor sua música do módulo para outro tom e testar com a voz",
    ],
  },
  professor: {
    preparar: "Papel com a ordem das 12 notas. Uma música em tom menor do gosto do aluno.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Pentatônica de Lá menor e uma frase sobre a base." },
      { minutos: 12, titulo: "Relativos", fazer: "Toque C, F, G, C e depois Am, F, G, Am. Mesmos acordes, outro clima." },
      { minutos: 10, titulo: "Família de Am", fazer: "Mostre a troca de Em por E7 e a força que isso dá à volta para Am." },
      { minutos: 15, titulo: "Transposição", fazer: "No papel: G, D, Em, C para A e para C. O aluno conta as casas." },
      { minutos: 13, titulo: "Aplicação", fazer: "Transponham a música do aluno para um tom melhor para a voz, sem capo." },
      { minutos: 5, titulo: "Fechamento", fazer: "Compare transpor com usar o capo (aula 13): quando cada um é melhor." },
    ],
    dicas: [
      "Use o braço do violão como régua: a corda 5, casa por casa, mostra a ordem das notas.",
      "O capo resolve quando o tom sobe; transpor resolve quando precisa descer ou evitar pestana.",
    ],
    errosComuns: [
      "Esquecer que entre E e F e entre B e C não há sustenido",
      "Mudar o tipo do acorde ao transpor (Em virando F#)",
    ],
    sucesso: "O aluno transpõe uma sequência de 4 acordes para outro tom no papel e toca.",
    checklist: [
      "Diz o relativo menor de 5 tons",
      "Toca uma sequência em Am com E7",
      "Transpõe uma sequência sem errar o tipo dos acordes",
    ],
  },
};
