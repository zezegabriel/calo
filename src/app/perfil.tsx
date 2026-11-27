import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Perfil } from "../store/armazenamento";
import { marca } from "../lib/midia";
import { useProgresso } from "../store/progresso";
import { cor, fonte, raio } from "../theme";

const OPCOES: { perfil: Perfil; titulo: string; texto: string; icone: keyof typeof Ionicons.glyphMap }[] = [
  {
    perfil: "aluno",
    titulo: "Sou aluno",
    texto: "As 24 aulas com acordes, batidas e tablaturas, e a tarefa de cada semana para marcar.",
    icone: "musical-notes-outline",
  },
  {
    perfil: "professor",
    titulo: "Sou professor",
    texto: "O roteiro de cada aula com tempos, erros comuns, critério de sucesso e anotações por aluno.",
    icone: "easel-outline",
  },
];

export default function EscolherPerfil() {
  const { definirPerfil } = useProgresso();

  function escolher(p: Perfil) {
    definirPerfil(p);
    router.replace("/(abas)");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: cor.azulNoite }}>
      <View style={{ flex: 1, padding: 24, justifyContent: "center", width: "100%", maxWidth: 520, alignSelf: "center" }}>
        <Image source={marca.icone} style={{ width: 120, height: 120, alignSelf: "center" }} accessibilityIgnoresInvertColors />
        <Image source={marca.nomeClaro} style={{ width: 150, height: 58, alignSelf: "center", marginTop: 18 }} resizeMode="contain" accessibilityLabel="Calo" />
        <Image source={marca.sloganClaro} style={{ width: 200, height: 23, alignSelf: "center", marginTop: 6 }} resizeMode="contain" accessibilityLabel="Seu acorde mais firme" />

        <Text style={{ fontFamily: fonte.texto, fontSize: 16, color: "#C9CED8", textAlign: "center", marginTop: 36, marginBottom: 16 }}>
          Violão popular do zero ao intermediário. Como você vai usar?
        </Text>

        {OPCOES.map((o) => (
          <Pressable
            key={o.perfil}
            onPress={() => escolher(o.perfil)}
            accessibilityRole="button"
            style={({ pressed }) => ({
              flexDirection: "row", gap: 14, alignItems: "center",
              backgroundColor: pressed ? "#2B3550" : "#252E45",
              borderRadius: raio, padding: 16, marginBottom: 12,
            })}
          >
            <Ionicons name={o.icone} size={28} color={cor.acentoClaro} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: fonte.titulo, fontSize: 18, color: "#F8ECDE" }}>{o.titulo}</Text>
              <Text style={{ fontFamily: fonte.texto, fontSize: 14, lineHeight: 20, color: "#AEB4C2", marginTop: 2 }}>{o.texto}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#AEB4C2" />
          </Pressable>
        ))}

        <Text style={{ fontFamily: fonte.texto, fontSize: 13, color: "#8890A2", textAlign: "center", marginTop: 8 }}>
          Dá para trocar depois em Ajustes.
        </Text>
      </View>
    </SafeAreaView>
  );
}
