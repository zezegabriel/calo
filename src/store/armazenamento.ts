// Camada de dados: o único arquivo que importa o AsyncStorage.
import AsyncStorage from "@react-native-async-storage/async-storage";
import { log } from "../lib/log";

const CHAVE = "calo:estado:v1";

export type Perfil = "professor" | "aluno";

export interface Estado {
  perfil: Perfil | null;
  /** ids das aulas marcadas como feitas */
  feitas: string[];
  /** marcações por aula: "a01:tarefa:0", "a01:check:2" */
  marcas: string[];
  /** anotações do professor por aula */
  anotacoes: Record<string, string>;
}

export const estadoVazio: Estado = { perfil: null, feitas: [], marcas: [], anotacoes: {} };

export async function carregarEstado(): Promise<Estado> {
  try {
    const bruto = await AsyncStorage.getItem(CHAVE);
    if (!bruto) return estadoVazio;
    return { ...estadoVazio, ...(JSON.parse(bruto) as Partial<Estado>) };
  } catch (e) {
    log.erro("não consegui ler o progresso salvo", e);
    return estadoVazio;
  }
}

export async function salvarEstado(estado: Estado): Promise<void> {
  try {
    await AsyncStorage.setItem(CHAVE, JSON.stringify(estado));
  } catch (e) {
    log.erro("não consegui salvar o progresso", e);
  }
}

export async function apagarEstado(): Promise<void> {
  await AsyncStorage.removeItem(CHAVE);
}
