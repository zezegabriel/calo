import type { Aula } from "../tipos";

export const a24: Aula = {
  id: "a24", numero: 24, modulo: 3,
  titulo: "Montando seu arranjo",
  resumo: "Fechamento do curso: introdução, dinâmica, variação de batida, paradas e final, numa música sua.",
  objetivos: [
    "Criar uma introdução e um final para uma música",
    "Variar batida e volume entre verso e refrão",
    "Apresentar um arranjo próprio do começo ao fim",
  ],
  aluno: {
    blocos: [
      { tipo: "texto", titulo: "O que é um arranjo", texto:
        "Tocar os acordes certos é metade do trabalho. O arranjo é a outra metade: as escolhas que fazem a música ter começo, crescimento e fim. " +
        "Você já tem todas as ferramentas: batidas, dedilhados, baixos, enfeites e a pentatônica." },
      { tipo: "lista", titulo: "Ferramentas de arranjo", itens: [
        "**Introdução**: os acordes do refrão dedilhados, ou um riff com a pentatônica.",
        "**Dinâmica**: verso baixinho e dedilhado, refrão com batida cheia.",
        "**Variação**: troque de batida na segunda vez do refrão (pop para pop rock, por exemplo).",
        "**Parada**: um acorde só, deixando soar, antes do último refrão.",
        "**Enfeites**: um sus ou um hammer-on no fim das frases.",
        "**Final**: repita a última frase mais devagar e termine num acorde dedilhado, ou com uma batida só, abafada.",
      ] },
      { tipo: "progressao", titulo: "Exemplo: introdução dedilhada", compassos: ["G", "Cadd9", "Em9", "Dsus4"] },
      { tipo: "progressao", titulo: "Exemplo: verso (dedilhado P-I-M-I)", compassos: ["Em", "C", "G", "D/F#"] },
      { tipo: "progressao", titulo: "Exemplo: refrão (batida pop, depois pop rock)", compassos: ["G", "D", "Em", "C"] },
      { tipo: "progressao", titulo: "Exemplo: final", compassos: ["C", "D", "G", "G"], nota: "Último G com uma batida só, deixando soar até sumir." },
      { tipo: "lista", titulo: "Monte o seu", itens: [
        "Escolha a música do módulo 3.",
        "Escreva a forma (intro, verso, refrão...) num papel.",
        "Para cada parte, decida: dedilhado ou batida? Qual batida? Volume alto ou baixo?",
        "Decida a introdução e o final.",
        "Grave e ouça. Mude o que não funcionou.",
      ] },
      { tipo: "atencao", titulo: "Compare os três vídeos", texto: "Grave o arranjo e assista junto com os vídeos das aulas 8 e 16. É o seu caminho do zero até aqui." },
    ],
    tarefa: [
      "Escrever a forma da música do módulo 3 com as escolhas de arranjo",
      "Tocar só a introdução e o final, 5 vezes cada",
      "Tocar o arranjo completo 3 vezes",
      "Gravar o arranjo e comparar com os vídeos das aulas 8 e 16",
    ],
  },
  professor: {
    preparar: "Os vídeos das aulas 8 e 16 do aluno, se ele gravou. Papel para escrever a forma.",
    roteiro: [
      { minutos: 5, titulo: "Aquecimento", fazer: "Pestana, pentatônica e um enfeite, 1 minuto cada." },
      { minutos: 10, titulo: "Ferramentas", fazer: "Mostre o exemplo de arranjo tocando cada parte. Pergunte o que mudou entre o verso e o refrão." },
      { minutos: 20, titulo: "Arranjo do aluno", fazer: "Escrevam juntos a forma da música e as escolhas de cada parte. Deixe o aluno decidir; você só sugere." },
      { minutos: 15, titulo: "Ensaio", fazer: "Toquem o arranjo parte por parte, depois inteiro." },
      { minutos: 10, titulo: "Apresentação e balanço", fazer: "O aluno apresenta. Assistam aos três vídeos e conversem sobre os próximos passos." },
    ],
    dicas: [
      "O arranjo é do aluno. Mesmo uma escolha que você faria diferente vale mais se ele mesmo decidiu.",
      "Próximos passos comuns depois daqui: repertório próprio, tocar em grupo, violão fingerstyle ou aprofundar na bossa.",
    ],
    errosComuns: [
      "Todas as partes com a mesma batida e o mesmo volume",
      "Final que simplesmente para no meio",
    ],
    sucesso: "O aluno apresenta um arranjo próprio com introdução, diferença de dinâmica entre verso e refrão, e um final.",
    checklist: [
      "Escreveu a forma da música com as escolhas de arranjo",
      "Criou introdução e final",
      "Varia dinâmica entre as partes",
      "Apresentou o arranjo completo",
    ],
  },
};
