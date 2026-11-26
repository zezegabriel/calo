import { Text, View } from "react-native";
import type { Batida, Dedilhado, Golpe } from "../content/tipos";
import { cor, fonte, raio } from "../theme";
import { TextoRico } from "./Texto";

const SIMBOLO: Record<Golpe, string> = { B: "↓", C: "↑", X: "✕", P: "P", A: "A", PA: "P+A", "-": "·" };
const CONTAGEM = ["1", "e", "2", "e", "3", "e", "4", "e"];

export function BatidaView({ batida }: { batida: Batida }) {
  return (
    <View style={caixa}>
      <Text style={nome}>{batida.nome}</Text>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        {batida.golpes.map((g, i) => (
          <View key={i} style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontFamily: fonte.titulo, fontSize: g.length > 1 ? 13 : 22, color: g === "-" ? cor.linha : cor.tinta, height: 28 }}>
              {SIMBOLO[g]}
            </Text>
            <Text style={{ fontFamily: fonte.texto, fontSize: 12, color: i % 2 === 0 ? cor.tinta : cor.tintaSuave }}>{CONTAGEM[i]}</Text>
          </View>
        ))}
      </View>
      <TextoRico estilo={{ fontSize: 14, lineHeight: 20, color: cor.tintaSuave }}>{batida.dica}</TextoRico>
      <Text style={{ fontFamily: fonte.texto, fontSize: 13, color: cor.tintaSuave, marginTop: 6 }}>Andamento: {batida.andamento}</Text>
    </View>
  );
}

export function DedilhadoView({ dedilhado }: { dedilhado: Dedilhado }) {
  return (
    <View style={caixa}>
      <Text style={nome}>{dedilhado.nome}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6, marginVertical: 10 }}>
        {dedilhado.sequencia.map((d, i) => (
          <View key={i} style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: d === "P" ? cor.tinta : cor.acentoClaro, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontFamily: fonte.titulo, fontSize: 15, color: d === "P" ? cor.papel : cor.acento }}>{d}</Text>
          </View>
        ))}
      </View>
      <TextoRico estilo={{ fontSize: 14, lineHeight: 20, color: cor.tintaSuave }}>{dedilhado.dica}</TextoRico>
    </View>
  );
}

const caixa = { backgroundColor: cor.papel, borderRadius: raio, borderWidth: 1, borderColor: cor.linha, padding: 14, marginVertical: 8 };
const nome = { fontFamily: fonte.tituloMedio, fontSize: 16, color: cor.tinta };
