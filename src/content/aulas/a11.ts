import type { Aula } from "../tipos";

export const a11: Aula = {
  id: "a11", numero: 11, modulo: 2,
  titulo: "O Fá e a meia pestana",
  resumo: "O primeiro acorde com o dedo 1 deitado sobre duas cordas, e as sequências que ele libera.",
  objetivos: [
    "Montar o F com meia pestana",
    "Trocar C, F e G no tempo",
    "Tocar C, Am, F, G",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "O que é pestana", texto:
        "Pestana é o dedo 1 deitado, apertando mais de uma corda na mesma casa. No F da meia pestana, o dedo 1 aperta as cordas 1 e 2 na casa 1 ao mesmo tempo." },
      { tipo: "acordes", titulo: "Acorde novo", cifras: ["F"] },
      { tipo: "lista", titulo: "Como montar", itens: [
        "Coloque primeiro o dedo 3 (casa 3, corda 4) e o dedo 2 (casa 2, corda 3).",
        "Deite o dedo 1 nas cordas 1 e 2, casa 1, usando a lateral do dedo, perto do traste.",
        "Toque só as cordas 4, 3, 2 e 1, uma por uma. As duas da pestana precisam soar.",
        "Se uma corda chiar, gire o dedo 1 levemente para o lado do polegar.",
      ] },
      { tipo: "atencao", titulo: "A força vem do braço", texto: "Não aperte com o polegar. Puxe o braço um pouco para trás, como se o peso do braço fizesse a pressão. Dor no polegar significa força no lugar errado." },
      { tipo: "progressao", titulo: "C, F, G", compassos: ["C", "F", "G", "C"] },
      { tipo: "progressao", titulo: "A sequência que faltava", compassos: ["C", "Am", "F", "G"] },
      { tipo: "progressao", titulo: "De volta à aula 6", compassos: ["Am", "G", "F", "E"] },
    ],
    tarefa: [
      "Montar o F e conferir corda por corda, 10 vezes",
      "Troca C e F, 20 vezes, sem tocar",
      "C, F, G, C com 4 para baixo (3 minutos)",
      "C, Am, F, G com a batida pop (4 minutos)",
      "Am, G, F, E com a batida pop (3 minutos)",
    ],
  },
  professor: {
    preparar: "Confira se o violão do aluno não está com a corda muito alta (ação alta deixa o F quase impossível). Se estiver, sugira regular com um luthier.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Baixo alternado em G, C, D, G." },
      { minutos: 15, titulo: "Montando o F", fazer: "Siga o passo a passo. Fique o tempo que precisar aqui: é o acorde que mais faz aluno desistir." },
      { minutos: 10, titulo: "Troca C e F", fazer: "No C para F, o dedo 3 vai da corda 5 para a 4 e o 2 da corda 4 para a 3: os dois descem uma corda." },
      { minutos: 20, titulo: "Sequências", fazer: "C, F, G, C; depois C, Am, F, G; depois Am, G, F, E." },
      { minutos: 10, titulo: "Música", fazer: "Aplique em uma música com F, de preferência a do módulo 2." },
    ],
    dicas: [
      "Avise que o F leva de uma a três semanas para sair limpo. Isso evita frustração.",
      "Se o aluno não consegue de jeito nenhum, deixe usar Dm no lugar do F por enquanto e volte nele toda aula.",
    ],
    errosComuns: [
      "Apertar o polegar com força",
      "Dedo 1 longe do traste",
      "Dedo 1 com a polpa em vez da lateral",
    ],
    sucesso: "O aluno monta o F com as 4 cordas soando e toca C, Am, F, G sem parar, mesmo que o F saia um pouco sujo.",
    checklist: [
      "Monta o F com as cordas 1 e 2 soando",
      "Troca C e F no tempo",
      "Toca C, Am, F, G",
      "Mantém o polegar relaxado",
    ],
  },
};
