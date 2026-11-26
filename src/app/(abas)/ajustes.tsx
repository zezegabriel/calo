import { router } from "expo-router";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { Botao, Segmentado } from "../../components/Controles";
import { marca } from "../../lib/midia";
import type { Perfil } from "../../store/armazenamento";
import { useProgresso } from "../../store/progresso";
import { cor, fonte } from "../../theme";

export default function Ajustes() {
  const { perfil, definirPerfil, recomecar } = useProgresso();

  function confirmarRecomeco() {
    Alert.alert("Apagar o progresso?", "As aulas feitas, as marcações e as anotações deste aparelho serão apagadas.", [
      { text: "Cancelar", style: "cancel" },
      { text: "Apagar", style: "destructive", onPress: recomecar },
    ]);
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <Text style={{ fontFamily: fonte.titulo, fontSize: 19, color: cor.tinta, marginBottom: 10 }}>Como você usa o app</Text>
      <Segmentado<Perfil>
        opcoes={[{ valor: "aluno", rotulo: "Aluno" }, { valor: "professor", rotulo: "Professor" }]}
        valor={perfil ?? "aluno"}
        aoMudar={definirPerfil}
      />
      <Text style={{ fontFamily: fonte.texto, fontSize: 14, lineHeight: 20, color: cor.tintaSuave, marginTop: 8 }}>
        No modo professor, cada aula abre no roteiro, com a opção de ver o material do aluno.
      </Text>

      <Text style={{ fontFamily: fonte.titulo, fontSize: 19, color: cor.tinta, marginTop: 28, marginBottom: 10 }}>Progresso</Text>
      <Botao texto="Apagar progresso deste aparelho" tipo="secundario" aoTocar={confirmarRecomeco} />

      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Image source={marca.icone} style={{ width: 64, height: 64 }} />
        <Image source={marca.nomeEscuro} style={{ width: 90, height: 35, marginTop: 8 }} resizeMode="contain" accessibilityLabel="Calo" />
        <Text style={{ fontFamily: fonte.texto, fontSize: 13, color: cor.tintaSuave, marginTop: 4 }}>Versão de teste 0.1</Text>
        <Text onPress={() => router.replace("/perfil")} style={{ fontFamily: fonte.textoForte, fontSize: 14, color: cor.acento, marginTop: 14, padding: 8 }}>
          Ver a tela de boas-vindas
        </Text>
      </View>
    </ScrollView>
  );
}
