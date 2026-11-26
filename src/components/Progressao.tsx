import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { acharAcorde } from "../content/acordes";
import { cor, fonte, raio } from "../theme";
import { DiagramaAcorde } from "./DiagramaAcorde";
import { Nota } from "./Texto";

/** Compassos de uma sequência. Tocar num acorde mostra o desenho dele. */
export function Progressao({ titulo, compassos, nota }: { titulo: string; compassos: string[]; nota?: string }) {
  const [aberto, setAberto] = useState<string | null>(null);
  const acorde = aberto ? acharAcorde(aberto) : undefined;

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontFamily: fonte.textoForte, fontSize: 15, color: cor.tinta, marginBottom: 6 }}>{titulo}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", borderLeftWidth: 2, borderColor: cor.tinta }}>
        {compassos.map((c, i) => (
          <Pressable
            key={i}
            onPress={() => setAberto(aberto === c ? null : c)}
            accessibilityRole="button"
            accessibilityLabel={`Ver o acorde ${c}`}
            style={({ pressed }) => ({
              width: "25%",
              minHeight: 48,
              borderRightWidth: 2,
              borderColor: cor.tinta,
              justifyContent: "center",
              paddingHorizontal: 8,
              backgroundColor: aberto === c ? cor.acentoClaro : pressed ? cor.linha : "transparent",
            })}
          >
            <Text style={{ fontFamily: fonte.titulo, fontSize: 18, color: cor.tinta }}>{c}</Text>
          </Pressable>
        ))}
      </View>
      {acorde && (
        <View style={{ alignSelf: "flex-start", marginTop: 8, padding: 8, borderRadius: raio, backgroundColor: cor.papel, borderWidth: 1, borderColor: cor.linha }}>
          <DiagramaAcorde acorde={acorde} />
        </View>
      )}
      {nota && <View style={{ marginTop: 6 }}><Nota>{nota}</Nota></View>}
    </View>
  );
}
