import type { Aula } from "../tipos";

export const a12: Aula = {
  id: "a12", numero: 12, modulo: 2,
  titulo: "Famílias de acordes (campo harmônico)",
  resumo: "Por que certos acordes andam juntos, e como descobrir os acordes de uma música pelo tom.",
  objetivos: [
    "Saber os acordes da família de C, G, D, A e E",
    "Entender o que são os graus I, IV, V e vi",
    "Montar uma sequência sozinho a partir do tom",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "A ideia", texto:
        "Cada tom tem uma família de 7 acordes que soam bem juntos. É por isso que uma música em Sol quase sempre usa G, C, D e Em. " +
        "Os acordes recebem números (graus) pela posição na família: o **I** é o acorde da casa, onde a música descansa." },
      { tipo: "lista", titulo: "As famílias que você já consegue tocar", itens: [
        "**Tom de C**: C, Dm, Em, F, G, Am",
        "**Tom de G**: G, Am, Bm, C, D, Em",
        "**Tom de D**: D, Em, F#m, G, A, Bm",
        "**Tom de A**: A, Bm, C#m, D, E, F#m",
        "**Tom de E**: E, F#m, G#m, A, B, C#m",
      ] },
      { tipo: "texto", texto: "Bm, F#m, B e C#m levam pestana (aulas 15 e 16). O 7º acorde de cada família quase não aparece em música popular, por isso ficou de fora." },
      { tipo: "lista", titulo: "Os graus que mais importam", itens: [
        "**I**: a casa. Em C é o C",
        "**IV**: sai de casa. Em C é o F",
        "**V**: tensão, quer voltar. Em C é o G (ou G7)",
        "**vi**: o menor da família. Em C é o Am",
      ] },
      { tipo: "progressao", titulo: "I, V, vi, IV em C", compassos: ["C", "G", "Am", "F"] },
      { tipo: "progressao", titulo: "I, V, vi, IV em G", compassos: ["G", "D", "Em", "C"], nota: "É a sequência da aula 5. Mesmos graus, outro tom." },
      { tipo: "progressao", titulo: "I, vi, IV, V em D", compassos: ["D", "Bm", "G", "A"], nota: "Se o Bm ainda não sai, use D no lugar só por hoje." },
      { tipo: "atencao", titulo: "Para que serve", texto: "Se você sabe o tom de uma música e ouve que entrou um acorde menor, provavelmente é o vi. Isso ajuda a tirar música de ouvido e a corrigir cifras erradas." },
    ],
    tarefa: [
      "Escrever num papel as famílias de C e de G sem olhar",
      "Tocar I, V, vi, IV em C e em G (4 minutos)",
      "Inventar uma sequência de 4 acordes no tom de C e tocar",
      "Ver o tom da sua música do módulo e achar o grau de cada acorde",
    ],
  },
  professor: {
    preparar: "Papel e caneta. Cifras de 2 músicas em tons diferentes para o aluno identificar os graus.",
    roteiro: [
      { minutos: 5, titulo: "Revisão", fazer: "C, Am, F, G com a batida pop." },
      { minutos: 15, titulo: "Família de C", fazer: "Toque C, Dm, Em, F, G, Am, um por um, e depois uma sequência com eles. Mostre que nenhum soa fora." },
      { minutos: 10, titulo: "Graus", fazer: "I, IV, V e vi em C. Toque I, IV, V, I e mostre a sensação de sair e voltar para casa." },
      { minutos: 15, titulo: "Mesmo grau, outro tom", fazer: "I, V, vi, IV em C, em G e em D. O aluno percebe que é a mesma música em alturas diferentes." },
      { minutos: 10, titulo: "Cifras reais", fazer: "Nas duas cifras, o aluno diz o tom e o grau de cada acorde." },
      { minutos: 5, titulo: "Fechamento", fazer: "Peça para o aluno inventar uma sequência para a próxima aula." },
    ],
    dicas: [
      "Não é preciso falar de escalas nem de intervalos agora. Família e grau bastam para o violão popular.",
      "Use os algarismos romanos só como apoio; o importante é o aluno pensar \"o menor da família\", \"o que puxa para casa\".",
    ],
    errosComuns: [
      "Achar que qualquer acorde menor serve",
      "Confundir o tom com o primeiro acorde da cifra (às vezes a música começa fora do I)",
    ],
    sucesso: "O aluno diz a família de C e de G de cabeça e acha o grau dos acordes de uma cifra.",
    checklist: [
      "Diz a família de C e de G",
      "Explica I, IV, V e vi com as próprias palavras",
      "Toca I, V, vi, IV em dois tons",
      "Identifica o tom de uma cifra",
    ],
  },
};
