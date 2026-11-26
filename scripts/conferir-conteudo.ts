// Confere o currículo: acordes, batidas e dedilhados citados existem e o roteiro fecha em 60 min.
import { acordes } from "../src/content/acordes";
import { aulas } from "../src/content/aulas";
import { batidas, dedilhados } from "../src/content/ritmos";

const problemas: string[] = [];
for (const a of aulas) {
  const total = a.professor.roteiro.reduce((s, r) => s + r.minutos, 0);
  if (total !== 60) problemas.push(`${a.id}: roteiro soma ${total} min`);
  for (const b of a.aluno.blocos) {
    if (b.tipo === "acordes") b.cifras.forEach((c) => acordes[c] || problemas.push(`${a.id}: acorde ${c} não existe`));
    if (b.tipo === "progressao") b.compassos.forEach((c) => acordes[c] || problemas.push(`${a.id}: acorde ${c} não existe`));
    if (b.tipo === "batida" && !batidas[b.id]) problemas.push(`${a.id}: batida ${b.id} não existe`);
    if (b.tipo === "dedilhado" && !dedilhados[b.id]) problemas.push(`${a.id}: dedilhado ${b.id} não existe`);
    if (b.tipo === "tab") b.tab.notas.forEach((n) => {
      const lista = n === null || n === "|" ? [] : Array.isArray(n[0]) ? (n as [number, number][]) : [n as [number, number]];
      lista.forEach(([corda, casa]) => (corda < 1 || corda > 6 || casa < 0 || casa > 15) && problemas.push(`${a.id}: nota inválida ${corda}/${casa}`));
    });
  }
}
for (const ac of Object.values(acordes)) {
  if (ac.casas.length !== 6 || ac.dedos.length !== 6) problemas.push(`${ac.cifra}: precisa de 6 cordas`);
  ac.casas.forEach((c, i) => { if (typeof c === "number" && c > 0 && ac.dedos[i] === 0) problemas.push(`${ac.cifra}: corda ${6 - i} sem dedo`); });
}
process.stdout.write(problemas.length ? problemas.join("\n") + "\n" : `ok: ${aulas.length} aulas, ${Object.keys(acordes).length} acordes\n`);
process.exitCode = problemas.length ? 1 : 0;
