import { ScrollView, Text, View } from "react-native";
import { Metronomo } from "../../components/Metronomo";
import { BatidaView, DedilhadoView } from "../../components/Ritmo";
import { todasAsBatidas, todosOsDedilhados } from "../../content/ritmos";
import { cor, fonte } from "../../theme";

export default function Ritmo() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <Metronomo />
      <Text style={{ fontFamily: fonte.titulo, fontSize: 19, color: cor.tinta, marginTop: 26 }}>Batidas</Text>
      <Text style={{ fontFamily: fonte.texto, fontSize: 14, lineHeight: 20, color: cor.tintaSuave, marginBottom: 4 }}>
        ↓ para baixo, ↑ para cima, ✕ abafado, · a mão passa sem tocar. P é o polegar no baixo e A os dedos pinçando.
      </Text>
      {todasAsBatidas.map((b) => <BatidaView key={b.id} batida={b} />)}
      <View style={{ marginTop: 18 }}>
        <Text style={{ fontFamily: fonte.titulo, fontSize: 19, color: cor.tinta }}>Dedilhados</Text>
        {todosOsDedilhados.map((d) => <DedilhadoView key={d.id} dedilhado={d} />)}
      </View>
    </ScrollView>
  );
}
