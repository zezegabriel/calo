import type { Aula } from "../tipos";

export const a01: Aula = {
  id: "a01", numero: 1, modulo: 1,
  titulo: "Primeiros passos: Em e Am",
  resumo: "O nome das partes do violão, as 6 cordas, a postura e os dois primeiros acordes.",
  objetivos: [
    "Dizer o número e o nome de cada corda",
    "Sentar e segurar o violão sem dor",
    "Contar 1, 2, 3, 4 junto com uma música",
    "Tocar Em e Am com 4 batidas cada",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "As partes do violão", texto:
        "**Tarraxas** são as chaves na ponta do braço: girando, a corda estica (som mais agudo) ou afrouxa (som mais grave). " +
        "**Trastes** são os ferrinhos atravessados no braço. **Casa** é o espaço entre dois trastes; a 1ª casa é a mais perto das tarraxas. " +
        "A **boca** é o buraco redondo, e a mão direita toca as cordas mais ou menos em cima dela." },
      { tipo: "lista", titulo: "As 6 cordas, da grossa para a fina", itens: [
        "Corda 6: Mi (a mais grossa, perto do seu rosto)",
        "Corda 5: Lá", "Corda 4: Ré", "Corda 3: Sol", "Corda 2: Si",
        "Corda 1: Mi (a mais fina, perto do chão)",
      ] },
      { tipo: "atencao", titulo: "Para decorar", texto: "Mi, Lá, Ré, Sol, Si, Mi. As duas pontas são Mi: a grossa é o Mi grave, a fina é o Mi agudo." },
      { tipo: "lista", titulo: "Postura (destro)", itens: [
        "Cadeira sem braço, costas retas, pés no chão.",
        "A curva do violão apoiada na perna direita, braço do violão apontando para a esquerda.",
        "Antebraço direito por cima do corpo do violão; a mão cai em cima da boca.",
        "Polegar esquerdo atrás do braço do violão, dedos curvados chegando nas cordas pela frente.",
      ] },
      { tipo: "texto", titulo: "Os dedos têm números", texto:
        "Mão esquerda: **1** indicador, **2** médio, **3** anelar, **4** mínimo. Mão direita: **P** polegar, **I** indicador, **M** médio, **A** anelar." },
      { tipo: "texto", titulo: "Tempo", texto:
        "Toda música tem um pulso constante, aquele que faz o pé bater sozinho. Na maioria das músicas ele vem de 4 em 4: 1, 2, 3, 4. Cada grupo de 4 é um **compasso**." },
      { tipo: "tab", tab: {
        titulo: "Aquecimento: cordas soltas com o polegar",
        notas: [[6, 0], [5, 0], [4, 0], [3, 0], "|", [2, 0], [1, 0], [2, 0], [3, 0]],
        contagem: ["1", "2", "3", "4", "", "1", "2", "3", "4"],
      } },
      { tipo: "tab", tab: {
        titulo: "Exercício aranha: um dedo por casa",
        notas: [[1, 1], [1, 2], [1, 3], [1, 4], "|", [2, 1], [2, 2], [2, 3], [2, 4]],
        contagem: ["1", "2", "3", "4", "", "1", "2", "3", "4"],
      } },
      { tipo: "acordes", titulo: "Seus dois primeiros acordes", cifras: ["Em", "Am"] },
      { tipo: "texto", texto: "Em toca as 6 cordas. Am começa na corda 5 (a 6 não toca). Na troca, os dedos 2 e 3 descem juntos uma corda e o dedo 1 entra na casa 1 da corda 2." },
      { tipo: "batida", id: "quatro" },
      { tipo: "progressao", titulo: "Ciclo do dia", compassos: ["Em", "Em", "Am", "Am"], nota: "Repita sem parar a contagem. Errar a nota é melhor do que parar." },
    ],
    tarefa: [
      "Afinar com um app afinador",
      "Falar e tocar as cordas soltas: Mi, Lá, Ré, Sol, Si, Mi",
      "Exercício aranha nas cordas 1, 2 e 3 (3 minutos)",
      "Montar e desmontar Em e Am 10 vezes cada, sem tocar",
      "Ciclo Em e Am com 4 batidas cada (5 minutos)",
    ],
  },
  professor: {
    preparar: "Violão afinado, app afinador no celular e uma música com batida bem marcada que o aluno goste.",
    roteiro: [
      { minutos: 5, titulo: "Conversa", fazer: "Pergunte que músicas a pessoa gosta e por que quer aprender. Anote: isso define as músicas das próximas aulas." },
      { minutos: 10, titulo: "Partes e cordas", fazer: "Mostre as partes no violão real. Peça \"corda 3\", \"corda 5\", \"corda 1\" sem o aluno olhar a tela, até ele acertar sem pensar." },
      { minutos: 7, titulo: "Postura e afinação", fazer: "Ajuste a postura. Afine a primeira corda você; da segunda em diante, o aluno gira a tarraxa com você guiando." },
      { minutos: 8, titulo: "Pulso", fazer: "Com a música tocando: bater o pé, contar em voz alta, palma só no 1, depois palma nos 4 tempos." },
      { minutos: 8, titulo: "Aquecimento", fazer: "Cordas soltas com o polegar e o exercício aranha. Corrija o dedo: ponta do dedo, perto do traste." },
      { minutos: 17, titulo: "Em e Am", fazer: "Monte cada acorde, toque corda por corda para achar a nota abafada, depois o ciclo com 4 batidas." },
      { minutos: 5, titulo: "Fechamento", fazer: "Mostre a tarefa no app e combine 10 a 15 minutos por dia." },
    ],
    dicas: [
      "Na troca Em para Am, peça para manter os dedos 2 e 3 juntos como um bloco e só deslizar uma corda.",
      "Se o aluno acelera na contagem, use o metrônomo do app a 60 bpm.",
      "Unha comprida na mão esquerda impede a nota de soar. Vale avisar antes da próxima aula.",
    ],
    errosComuns: [
      "Polegar esquerdo por cima do braço apertando forte",
      "Dedo deitado encostando na corda de baixo",
      "Parar a contagem para olhar a mão",
    ],
    sucesso: "O aluno faz o ciclo Em, Em, Am, Am quatro vezes seguidas sem parar a contagem, mesmo com algumas notas abafadas.",
    checklist: [
      "Diz o número e o nome de qualquer corda apontada",
      "Mostra onde fica a 2ª casa",
      "Conta 1, 2, 3, 4 junto com a música",
      "Monta Em e Am olhando o diagrama",
      "Troca entre Em e Am sem parar a contagem",
    ],
  },
};
