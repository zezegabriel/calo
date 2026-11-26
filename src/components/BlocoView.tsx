import { Text, View } from "react-native";
import { acharAcorde } from "../content/acordes";
import { batidas, dedilhados } from "../content/ritmos";
import type { Bloco } from "../content/tipos";
import { cor, fonte, raio } from "../theme";
import { DiagramaAcorde } from "./DiagramaAcorde";
import { Progressao } from "./Progressao";
import { BatidaView, DedilhadoView } from "./Ritmo";
import { Tablatura } from "./Tablatura";
import { TextoRico } from "./Texto";

function Subtitulo({ children }: { children?: string }) {
  if (!children) return null;
  return <Text style={{ fontFamily: fonte.tituloMedio, fontSize: 17, color: cor.tinta, marginBottom: 6 }}>{children}</Text>;
}

export function BlocoView({ bloco }: { bloco: Bloco }) {
  switch (bloco.tipo) {
    case "texto":
      return (
        <View style={{ marginVertical: 10 }}>
          <Subtitulo>{bloco.titulo}</Subtitulo>
          <TextoRico>{bloco.texto}</TextoRico>
        </View>
      );
    case "lista":
      return (
        <View style={{ marginVertical: 10 }}>
          <Subtitulo>{bloco.titulo}</Subtitulo>
          {bloco.itens.map((item, i) => (
            <View key={i} style={{ flexDirection: "row", gap: 10, marginVertical: 3 }}>
              <Text style={{ fontFamily: fonte.textoForte, fontSize: 16, color: cor.acento, lineHeight: 24 }}>–</Text>
              <View style={{ flex: 1 }}><TextoRico>{item}</TextoRico></View>
            </View>
          ))}
        </View>
      );
    case "acordes":
      return (
        <View style={{ marginVertical: 10 }}>
          <Subtitulo>{bloco.titulo}</Subtitulo>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", gap: 4 }}>
            {bloco.cifras.map((c) => {
              const a = acharAcorde(c);
              return a ? <DiagramaAcorde key={c} acorde={a} /> : <Text key={c}>{c}</Text>;
            })}
          </View>
        </View>
      );
    case "batida": {
      const b = batidas[bloco.id];
      return b ? <View><Subtitulo>{bloco.titulo}</Subtitulo><BatidaView batida={b} /></View> : null;
    }
    case "dedilhado": {
      const d = dedilhados[bloco.id];
      return d ? <View><Subtitulo>{bloco.titulo}</Subtitulo><DedilhadoView dedilhado={d} /></View> : null;
    }
    case "tab":
      return <Tablatura tab={bloco.tab} />;
    case "progressao":
      return <Progressao titulo={bloco.titulo} compassos={bloco.compassos} nota={bloco.nota} />;
    case "atencao":
      return (
        <View style={{ marginVertical: 10, padding: 14, borderRadius: raio, backgroundColor: cor.acentoClaro }}>
          <Text style={{ fontFamily: fonte.textoForte, fontSize: 15, color: cor.acento, marginBottom: 4 }}>{bloco.titulo}</Text>
          <TextoRico>{bloco.texto}</TextoRico>
        </View>
      );
  }
}
