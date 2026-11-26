import type { Aula } from "../tipos";

export const a06: Aula = {
  id: "a06", numero: 6, modulo: 1,
  titulo: "Ré menor e o tom de Lá menor",
  resumo: "O último acorde menor aberto e sequências de som mais triste.",
  objetivos: [
    "Montar Dm",
    "Tocar Am, Dm, E e voltar para Am",
    "Sentir a diferença entre sequência maior e menor",
  ],
  aluno: {
    blocos: [
      { tipo: "acordes", titulo: "Acorde novo", cifras: ["Dm"] },
      { tipo: "texto", texto: "Dm começa na corda 4, igual ao D. A diferença está na corda 1: no D é a casa 2, no Dm é a casa 1, com o dedo 1." },
      { tipo: "acordes", titulo: "Os menores abertos", cifras: ["Am", "Dm", "Em"] },
      { tipo: "progressao", titulo: "Sequência em Lá menor", compassos: ["Am", "Dm", "E", "Am"], nota: "O E maior no fim puxa de volta para o Am. Escute essa tensão." },
      { tipo: "progressao", titulo: "Mais uma", compassos: ["Am", "G", "Dm", "E"], nota: "Muitas músicas usam F no lugar do Dm. Você aprende o F na aula 11." },
      { tipo: "progressao", titulo: "Misturando maior e menor", compassos: ["C", "Am", "Dm", "G"] },
      { tipo: "atencao", titulo: "Ouvido", texto: "Toque C, Am, Dm, G e depois Am, Dm, E, Am. A primeira é alegre e a segunda é mais pesada, mesmo usando acordes parecidos. O acorde onde a música \"descansa\" define o clima." },
    ],
    tarefa: [
      "Montar Dm 10 vezes, alternando com D",
      "Am, Dm, E, Am com a batida pop (4 minutos)",
      "C, Am, Dm, G com a batida pop (4 minutos)",
      "Sua música do módulo, do começo ao fim",
    ],
  },
  professor: {
    preparar: "Veja qual música o aluno escolheu na aula 5 e tire a cifra antes da aula.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "G, D, Em, C com a batida pop." },
      { minutos: 10, titulo: "Dm", fazer: "Monte o Dm a partir do D: só a corda 1 muda. Corrija o dedo 1, que costuma abafar a corda 2." },
      { minutos: 12, titulo: "Tom menor", fazer: "Am, Dm, E, Am. Toque a sequência e pare no E: pergunte ao aluno se parece que acabou." },
      { minutos: 8, titulo: "C, Am, Dm, G", fazer: "Mostre como é a mesma família de acordes do tom de Dó." },
      { minutos: 20, titulo: "Música do aluno", fazer: "Trabalhe a música escolhida: a forma, as trocas difíceis e a batida." },
      { minutos: 5, titulo: "Fechamento", fazer: "Combine o que precisa estar pronto da música na aula 8." },
    ],
    dicas: [
      "A sequência Am, G, F, E aparece em muitas músicas; deixar o F com interrogação cria curiosidade para a aula 11.",
      "Trocas que travam na música do aluno viram exercício isolado de 2 minutos.",
    ],
    errosComuns: [
      "Tocar as cordas 5 e 6 no Dm",
      "Dedo 1 do Dm deitado, abafando a corda 2",
    ],
    sucesso: "O aluno toca Am, Dm, E, Am e diz de ouvido que a sequência termina no Am.",
    checklist: [
      "Monta Dm com 4 cordas soando",
      "Toca Am, Dm, E, Am com batida",
      "Percebe a tensão do E puxando para o Am",
      "Toca a música do módulo ao menos até o primeiro refrão",
    ],
  },
};
