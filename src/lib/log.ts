// Único ponto do app que fala com o console. Em produção os logs de debug somem.
type Nivel = "debug" | "info" | "aviso" | "erro";

function escrever(nivel: Nivel, msg: string, extra?: unknown) {
  if (nivel === "debug" && !__DEV__) return;
  const linha = `[calo] ${msg}`;
  if (nivel === "erro") console.error(linha, extra ?? "");
  else if (nivel === "aviso") console.warn(linha, extra ?? "");
  else console.log(linha, extra ?? "");
}

export const log = {
  debug: (msg: string, extra?: unknown) => escrever("debug", msg, extra),
  info: (msg: string, extra?: unknown) => escrever("info", msg, extra),
  aviso: (msg: string, extra?: unknown) => escrever("aviso", msg, extra),
  erro: (msg: string, extra?: unknown) => escrever("erro", msg, extra),
};
