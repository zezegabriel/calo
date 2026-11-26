import type { Batida, Dedilhado } from "./tipos";

// Cada batida tem 8 golpes: as colcheias de um compasso de 4 tempos (1 e 2 e 3 e 4 e).
const batidasLista: Batida[] = [
  {
    id: "quatro", nome: "Quatro para baixo",
    golpes: ["B", "-", "B", "-", "B", "-", "B", "-"],
    andamento: "60 a 80 bpm",
    dica: "Uma batida em cada tempo. Na pausa a mão sobe sem tocar as cordas.",
  },
  {
    id: "colcheias", nome: "Baixo e cima",
    golpes: ["B", "C", "B", "C", "B", "C", "B", "C"],
    andamento: "60 a 90 bpm",
    dica: "A mão não para: desce no número, sobe no \"e\". Na subida, pegue só as 3 ou 4 cordas mais finas.",
  },
  {
    id: "pop", nome: "Batida pop (folk)",
    golpes: ["B", "-", "B", "C", "-", "C", "B", "C"],
    andamento: "70 a 100 bpm",
    dica: "Fale \"baixo, baixo-cima, cima-baixo-cima\". Nos dois espaços a mão continua indo, só não encosta nas cordas.",
  },
  {
    id: "country", nome: "Baixo e batida",
    golpes: ["P", "-", "B", "C", "P", "-", "B", "C"],
    andamento: "70 a 110 bpm",
    dica: "P é o polegar tocando só a corda do baixo do acorde (a mais grave que o acorde usa). Base do sertanejo e do country.",
  },
  {
    id: "reggae", nome: "Reggae (contratempo)",
    golpes: ["-", "-", "X", "-", "-", "-", "X", "-"],
    andamento: "70 a 90 bpm",
    dica: "Acorde curto nos tempos 2 e 4, e logo em seguida solte a pressão da mão esquerda para o som parar.",
  },
  {
    id: "poprock", nome: "Pop rock com abafado",
    golpes: ["B", "C", "X", "C", "B", "C", "X", "C"],
    andamento: "80 a 120 bpm",
    dica: "X: a palma da mão direita bate nas cordas enquanto desce e corta o som, como uma caixa de bateria nos tempos 2 e 4.",
  },
  {
    id: "balada", nome: "Balada",
    golpes: ["B", "-", "-", "-", "B", "-", "B", "C"],
    andamento: "60 a 75 bpm",
    dica: "Deixe o primeiro acorde soar bem. O \"baixo-cima\" no fim do compasso puxa para o próximo acorde.",
  },
  {
    id: "bossa", nome: "Bossa nova (simplificada)",
    golpes: ["PA", "-", "P", "A", "P", "A", "P", "-"],
    andamento: "70 a 100 bpm",
    dica: "Polegar em todos os tempos, sempre no mesmo volume. Os dedos I, M e A pinçam as cordas 3, 2 e 1 juntos, entre os tempos.",
  },
];

const dedilhadosLista: Dedilhado[] = [
  {
    id: "pima", nome: "Arpejo P-I-M-A",
    sequencia: ["P", "I", "M", "A"],
    dica: "Uma nota por vez, devagar. Cada dedo tem sua corda: I na 3, M na 2, A na 1.",
  },
  {
    id: "balada6", nome: "Arpejo de balada (P-I-M-A-M-I)",
    sequencia: ["P", "I", "M", "A", "M", "I"],
    dica: "Seis notas por acorde, como uma valsa lenta. Bom para músicas românticas e para acompanhar voz.",
  },
  {
    id: "pimi", nome: "Arpejo P-I-M-I",
    sequencia: ["P", "I", "M", "I", "P", "I", "M", "I"],
    dica: "Oito notas, duas por tempo. O polegar entra no 1 e no 3. Serve para quase qualquer música em 4.",
  },
];

export const batidas: Record<string, Batida> = Object.fromEntries(batidasLista.map((b) => [b.id, b]));
export const dedilhados: Record<string, Dedilhado> = Object.fromEntries(dedilhadosLista.map((d) => [d.id, d]));
export const todasAsBatidas = batidasLista;
export const todosOsDedilhados = dedilhadosLista;
