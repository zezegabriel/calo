import type { Aula } from "../tipos";

export const a21: Aula = {
  id: "a21", numero: 21, modulo: 3,
  titulo: "Enfeites: sus, add9 e ligados",
  resumo: "Acordes suspensos e com nona, e o martelo (hammer-on) dentro do acorde.",
  objetivos: [
    "Montar Dsus4, Dsus2, Asus4, Asus2, Cadd9 e Em9",
    "Alternar acorde e sus para criar movimento",
    "Fazer hammer-on e pull-off dentro do acorde",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "Sus e add9", texto:
        "**sus4** e **sus2** trocam uma nota do acorde por outra vizinha. O som fica suspenso, sem ser maior nem menor, e pede para voltar ao acorde normal. " +
        "**add9** acrescenta uma nota que deixa o acorde mais aberto e brilhante." },
      { tipo: "acordes", titulo: "Em torno do D", cifras: ["D", "Dsus4", "Dsus2"] },
      { tipo: "acordes", titulo: "Em torno do A", cifras: ["A", "Asus4", "Asus2"] },
      { tipo: "acordes", titulo: "Com nona", cifras: ["Cadd9", "Em9"] },
      { tipo: "progressao", titulo: "Movimento no D", compassos: ["D", "Dsus4", "D", "Dsus2"], nota: "Dois tempos em cada. Só o dedo da corda 1 se mexe." },
      { tipo: "texto", titulo: "Hammer-on e pull-off", texto:
        "**Hammer-on (martelo)**: toque uma corda e, sem tocar de novo, bata um dedo com força numa casa da mesma corda. A nota nova soa sozinha. " +
        "**Pull-off**: o contrário. Com o dedo na casa, toque a corda e puxe o dedo para baixo, fazendo a corda soar solta." },
      { tipo: "tab", tab: {
        titulo: "Hammer-on no Am (corda 3: solta, martelo na casa 2)",
        notas: [[5, 0], [3, 0], [3, 2], [2, 1], "|", [5, 0], [3, 0], [3, 2], [2, 1]],
        contagem: ["P", "I", "h", "M", "", "P", "I", "h", "M"],
      } },
      { tipo: "tab", tab: {
        titulo: "Pull-off no D (corda 1: casa 2 para solta)",
        notas: [[4, 0], [3, 2], [1, 2], [1, 0], "|", [4, 0], [3, 2], [1, 2], [1, 0]],
        contagem: ["P", "I", "A", "p", "", "P", "I", "A", "p"],
      } },
      { tipo: "progressao", titulo: "Tudo junto", compassos: ["G", "Cadd9", "Em9", "Dsus4"], nota: "Dedilhe com P-I-M-A-M-I, um compasso em cada acorde. No Dsus4, faça um pull-off na corda 1 voltando para o D no fim." },
    ],
    tarefa: [
      "D, Dsus4, D, Dsus2 com a batida pop (3 minutos)",
      "A, Asus4, A, Asus2 (3 minutos)",
      "Hammer-on no Am e pull-off no D, 20 vezes cada",
      "G, Cadd9, Em9, Dsus4 dedilhado (4 minutos)",
    ],
  },
  professor: {
    preparar: "Uma música pop acústica que use sus ou add9; é comum em violão de pop internacional e gospel.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "Bossa: II, V, I em C." },
      { minutos: 12, titulo: "Sus", fazer: "D, Dsus4, Dsus2 e A, Asus4, Asus2. Mostre que o sus resolve voltando ao acorde." },
      { minutos: 8, titulo: "add9", fazer: "Cadd9 e Em9. Mostre a ligação G para Cadd9 mantendo os dedos 3 e 4." },
      { minutos: 15, titulo: "Ligados", fazer: "Hammer-on e pull-off sozinhos, depois dentro do dedilhado." },
      { minutos: 15, titulo: "Aplicação", fazer: "G, Cadd9, Em9, Dsus4 e depois na música escolhida." },
      { minutos: 5, titulo: "Fechamento", fazer: "Peça para o aluno colocar um sus em alguma música que já toca." },
    ],
    dicas: [
      "Os enfeites ficam bons em pouca quantidade. Um sus por frase já dá movimento.",
      "Hammer-on fraco não soa: o dedo precisa cair rápido, na ponta, perto do traste.",
    ],
    errosComuns: [
      "Hammer-on sem força, sem som",
      "Pull-off empurrando a corda para cima em vez de puxar",
    ],
    sucesso: "O aluno usa sus e hammer-on numa sequência dedilhada sem perder o tempo.",
    checklist: [
      "Monta os 6 acordes da aula",
      "Alterna acorde e sus no tempo",
      "Faz hammer-on e pull-off com som claro",
    ],
  },
};
