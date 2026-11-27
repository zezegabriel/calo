import { ScrollView, Text, View } from "react-native";
import { DiagramaAcorde } from "../../components/DiagramaAcorde";
import { acharAcorde } from "../../content/acordes";
import { cor, fonte, raio, pagina } from "../../theme";

const GRUPOS: { titulo: string; cifras: string[] }[] = [
  { titulo: "Abertos", cifras: ["C", "D", "E", "G", "A", "Am", "Dm", "Em"] },
  { titulo: "Com sétima", cifras: ["A7", "B7", "C7", "D7", "E7", "G7"] },
  { titulo: "Pestana", cifras: ["F", "F (pestana)", "Bm", "B", "F#m", "Cm", "Gm"] },
  { titulo: "Baixo invertido", cifras: ["G/B", "C/E", "D/F#", "Am/G"] },
  { titulo: "Sétima maior e menor", cifras: ["C7M", "G7M", "D7M", "A7M", "Am7", "Dm7", "Em7", "Bm7"] },
  { titulo: "Suspensos e com nona", cifras: ["Dsus4", "Dsus2", "Asus4", "Asus2", "Cadd9", "Em9"] },
  { titulo: "Power chords", cifras: ["E5", "A5", "G5", "C5", "D5"] },
];

export default function Acordes() {
  return (
    <ScrollView contentContainerStyle={pagina}>
      <Text style={{ fontFamily: fonte.texto, fontSize: 15, lineHeight: 21, color: cor.tintaSuave }}>
        Corda 6 (grave) à esquerda. Número na bolinha é o dedo; ○ é corda solta e × é corda que não toca.
      </Text>
      {GRUPOS.map((g) => (
        <View key={g.titulo} style={{ marginTop: 22 }}>
          <Text style={{ fontFamily: fonte.titulo, fontSize: 19, color: cor.tinta, marginBottom: 8 }}>{g.titulo}</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, backgroundColor: cor.papel, borderRadius: raio, borderWidth: 1, borderColor: cor.linha, padding: 8 }}>
            {g.cifras.map((c) => {
              const a = acharAcorde(c);
              return a ? <DiagramaAcorde key={c} acorde={a} /> : null;
            })}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
