import type { Aula } from "../tipos";

export const a03: Aula = {
  id: "a03", numero: 3, modulo: 1,
  titulo: "Ré, Mi e Lá",
  resumo: "Completa os acordes maiores abertos e as primeiras sequências em Ré e em Lá.",
  objetivos: [
    "Montar D, E e A",
    "Saber em que corda cada acorde começa",
    "Tocar sequências em D e em A",
  ],
  aluno: {
    blocos: [
      { tipo: "acordes", titulo: "Acordes novos", cifras: ["D", "E", "A"] },
      { tipo: "lista", titulo: "Onde cada acorde começa", itens: [
        "**E, Em, G**: tocam as 6 cordas",
        "**A, Am, C**: começam na corda 5",
        "**D**: começa na corda 4",
      ] },
      { tipo: "texto", texto: "Começar na corda certa faz muita diferença. A corda 6 tocada no D deixa o acorde pesado e fora do lugar. Mire a mão direita na corda onde o acorde começa." },
      { tipo: "atencao", titulo: "E e Em são vizinhos", texto: "E é o Em com o dedo 1 a mais, na casa 1 da corda 3. Toque um depois do outro e escute a diferença: maior soa aberto, menor soa mais triste." },
      { tipo: "texto", titulo: "Lá maior", texto: "No A os três dedos ficam na casa 2, nas cordas 4, 3 e 2, um ao lado do outro. Eles não cabem lado a lado na mesma linha: incline um pouco, o dedo 1 mais atrás." },
      { tipo: "progressao", titulo: "Sequência em Ré", compassos: ["D", "G", "A", "D"] },
      { tipo: "progressao", titulo: "Sequência em Lá", compassos: ["A", "D", "E", "A"] },
      { tipo: "progressao", titulo: "Desafio", compassos: ["G", "D", "C", "D"], nota: "Batida baixo e cima. Se travar, volte para 4 para baixo." },
    ],
    tarefa: [
      "Tocar E e Em seguidos 10 vezes, escutando a diferença",
      "Sequência em Ré com 4 para baixo (3 minutos)",
      "Sequência em Lá com 4 para baixo (3 minutos)",
      "Desafio G, D, C, D com baixo e cima (4 minutos)",
    ],
  },
  professor: {
    preparar: "Revise com o aluno quais trocas da aula 2 ficaram difíceis (veja suas anotações da aula 2).",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "C, G, Am, Em com baixo e cima." },
      { minutos: 10, titulo: "D", fazer: "Monte o D e toque só da corda 4 para baixo. Treine a mira da mão direita: 4 batidas só nas 4 cordas finas." },
      { minutos: 8, titulo: "E e Em", fazer: "Mostre que E é Em com um dedo a mais. Peça para o aluno tocar os dois e dizer qual é o triste." },
      { minutos: 10, titulo: "A", fazer: "Ajuste o ângulo dos três dedos. Se a corda 1 abafar, o dedo 3 está deitado demais." },
      { minutos: 22, titulo: "Sequências", fazer: "Ré, depois Lá, depois o desafio. Fique 5 minutos em cada uma antes de passar." },
      { minutos: 5, titulo: "Fechamento", fazer: "Mostre a tabela \"onde cada acorde começa\" e peça para o aluno repetir de cabeça." },
    ],
    dicas: [
      "O jogo do ouvido (maior ou menor?) ajuda muito na percepção. Repita com C e Am, G e Em.",
      "Na troca D para A, o dedo 1 sai da corda 3 casa 2 e vai para a corda 4 casa 2: é um movimento curto.",
    ],
    errosComuns: [
      "Tocar a corda 6 no D",
      "Corda 1 abafada no A",
      "Dedo 1 do E encostando na corda 2",
    ],
    sucesso: "O aluno toca as três sequências com 4 para baixo, começando cada acorde na corda certa.",
    checklist: [
      "Monta D, E e A com todas as cordas certas soando",
      "Diz em que corda cada acorde começa",
      "Diferencia maior e menor de ouvido",
      "Toca a sequência em Ré e em Lá sem parar",
    ],
  },
};
