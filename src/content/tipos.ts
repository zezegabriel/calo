// Modelo de dados do currículo. Tudo é conteúdo estático, sem servidor.

/** Casa de cada corda, da corda 6 (grave) até a 1 (aguda). "x" = não toca, 0 = solta. */
export type Casas = [Casa, Casa, Casa, Casa, Casa, Casa];
export type Casa = number | "x";

export interface Acorde {
  cifra: string;
  nome: string;
  casas: Casas;
  /** Dedo de cada corda, mesma ordem de `casas`. 0 = nenhum dedo. */
  dedos: [number, number, number, number, number, number];
  /** Pestana: o dedo 1 deitado na `casa`, cobrindo da corda `de` até a corda `ate`. */
  pestana?: { casa: number; de: number; ate: number };
  /** Primeira casa mostrada no diagrama quando o acorde fica mais para o meio do braço. */
  casaInicial?: number;
}

/**
 * Golpe de mão direita em cada colcheia (1 e 2 e 3 e 4 e).
 * B = para baixo, C = para cima, X = abafado, P = polegar no baixo,
 * A = dedos pinçando o acorde, PA = polegar e dedos juntos, "-" = pausa (a mão continua o movimento).
 */
export type Golpe = "B" | "C" | "X" | "P" | "A" | "PA" | "-";

export interface Batida {
  id: string;
  nome: string;
  golpes: Golpe[];
  andamento: string;
  dica: string;
}

export interface Dedilhado {
  id: string;
  nome: string;
  /** P = corda do baixo do acorde, I = corda 3, M = corda 2, A = corda 1. */
  sequencia: ("P" | "I" | "M" | "A")[];
  dica: string;
}

/** Nota de tablatura: [corda, casa]. Lista = notas juntas. "|" = barra de compasso. null = espaço. */
export type NotaTab = [number, number] | [number, number][] | "|" | null;

export interface Tab {
  titulo: string;
  notas: NotaTab[];
  contagem?: string[];
}

export type Bloco =
  | { tipo: "texto"; titulo?: string; texto: string }
  | { tipo: "lista"; titulo?: string; itens: string[] }
  | { tipo: "acordes"; titulo?: string; cifras: string[] }
  | { tipo: "batida"; titulo?: string; id: string }
  | { tipo: "dedilhado"; titulo?: string; id: string }
  | { tipo: "tab"; tab: Tab }
  | { tipo: "progressao"; titulo: string; compassos: string[]; nota?: string }
  | { tipo: "atencao"; titulo: string; texto: string };

export interface PassoRoteiro {
  minutos: number;
  titulo: string;
  fazer: string;
}

export interface Aula {
  id: string;
  numero: number;
  modulo: 1 | 2 | 3;
  titulo: string;
  resumo: string;
  objetivos: string[];
  aluno: {
    blocos: Bloco[];
    tarefa: string[];
  };
  professor: {
    preparar: string;
    roteiro: PassoRoteiro[];
    dicas: string[];
    errosComuns: string[];
    sucesso: string;
    checklist: string[];
  };
}

export interface Modulo {
  numero: 1 | 2 | 3;
  nome: string;
  descricao: string;
}
