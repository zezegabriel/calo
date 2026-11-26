import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { apagarEstado, carregarEstado, estadoVazio, salvarEstado, type Estado, type Perfil } from "./armazenamento";

interface Progresso {
  pronto: boolean;
  perfil: Perfil | null;
  definirPerfil: (p: Perfil) => void;
  aulaFeita: (id: string) => boolean;
  alternarAulaFeita: (id: string) => void;
  marcado: (chave: string) => boolean;
  alternarMarca: (chave: string) => void;
  anotacao: (id: string) => string;
  definirAnotacao: (id: string, texto: string) => void;
  totalFeitas: number;
  recomecar: () => void;
}

const Contexto = createContext<Progresso | null>(null);

function alternar(lista: string[], item: string): string[] {
  return lista.includes(item) ? lista.filter((x) => x !== item) : [...lista, item];
}

export function ProgressoProvider({ children }: { children: ReactNode }) {
  const [estado, setEstado] = useState<Estado>(estadoVazio);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    void carregarEstado().then((e) => {
      setEstado(e);
      setPronto(true);
    });
  }, []);

  const atualizar = useCallback((fn: (e: Estado) => Estado) => {
    setEstado((atual) => {
      const novo = fn(atual);
      void salvarEstado(novo);
      return novo;
    });
  }, []);

  const valor = useMemo<Progresso>(() => ({
    pronto,
    perfil: estado.perfil,
    definirPerfil: (perfil) => atualizar((e) => ({ ...e, perfil })),
    aulaFeita: (id) => estado.feitas.includes(id),
    alternarAulaFeita: (id) => atualizar((e) => ({ ...e, feitas: alternar(e.feitas, id) })),
    marcado: (chave) => estado.marcas.includes(chave),
    alternarMarca: (chave) => atualizar((e) => ({ ...e, marcas: alternar(e.marcas, chave) })),
    anotacao: (id) => estado.anotacoes[id] ?? "",
    definirAnotacao: (id, texto) => atualizar((e) => ({ ...e, anotacoes: { ...e.anotacoes, [id]: texto } })),
    totalFeitas: estado.feitas.length,
    recomecar: () => {
      void apagarEstado();
      setEstado({ ...estadoVazio, perfil: estado.perfil });
    },
  }), [estado, pronto, atualizar]);

  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>;
}

export function useProgresso(): Progresso {
  const ctx = useContext(Contexto);
  if (!ctx) throw new Error("useProgresso fora do ProgressoProvider");
  return ctx;
}
