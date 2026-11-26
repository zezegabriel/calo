import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { aulas, aulasDoModulo, modulos } from "../../content/aulas";
import { useProgresso } from "../../store/progresso";
import { cor, fonte, raio } from "../../theme";

export default function ListaDeAulas() {
  const { perfil, aulaFeita, totalFeitas } = useProgresso();
  const professor = perfil === "professor";
  const proxima = aulas.find((a) => !aulaFeita(a.id));

  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
      <View style={{ backgroundColor: professor ? cor.professor : cor.azulNoite, borderRadius: raio, padding: 18 }}>
        <Text style={{ fontFamily: fonte.textoForte, fontSize: 13, color: "#C9D3E0" }}>
          {professor ? "Modo professor" : `${totalFeitas} de ${aulas.length} aulas feitas`}
        </Text>
        <Text style={{ fontFamily: fonte.titulo, fontSize: 22, color: "#F8ECDE", marginTop: 4 }}>
          {proxima ? `Aula ${proxima.numero}: ${proxima.titulo}` : "Curso completo"}
        </Text>
        {proxima && (
          <Pressable
            onPress={() => router.push(`/aula/${proxima.id}`)}
            accessibilityRole="button"
            style={({ pressed }) => ({ marginTop: 14, alignSelf: "flex-start", backgroundColor: "#F8ECDE", borderRadius: raio, paddingVertical: 10, paddingHorizontal: 16, opacity: pressed ? 0.85 : 1 })}
          >
            <Text style={{ fontFamily: fonte.textoForte, fontSize: 15, color: cor.tinta }}>
              {professor ? "Abrir roteiro" : "Continuar"}
            </Text>
          </Pressable>
        )}
        {!professor && (
          <View style={{ height: 6, backgroundColor: "#3A4560", borderRadius: 3, marginTop: 16 }}>
            <View style={{ height: 6, width: `${(totalFeitas / aulas.length) * 100}%`, backgroundColor: cor.acento, borderRadius: 3 }} />
          </View>
        )}
      </View>

      {modulos.map((m) => (
        <View key={m.numero} style={{ marginTop: 26 }}>
          <Text style={{ fontFamily: fonte.titulo, fontSize: 20, color: cor.tinta }}>Módulo {m.numero}: {m.nome}</Text>
          <Text style={{ fontFamily: fonte.texto, fontSize: 14, lineHeight: 20, color: cor.tintaSuave, marginTop: 2, marginBottom: 8 }}>{m.descricao}</Text>
          <View style={{ backgroundColor: cor.papel, borderRadius: raio, borderWidth: 1, borderColor: cor.linha }}>
            {aulasDoModulo(m.numero).map((a, i) => {
              const feita = aulaFeita(a.id);
              return (
                <Pressable
                  key={a.id}
                  onPress={() => router.push(`/aula/${a.id}`)}
                  accessibilityRole="button"
                  style={({ pressed }) => ({
                    flexDirection: "row", alignItems: "center", gap: 12, padding: 14,
                    borderTopWidth: i === 0 ? 0 : 1, borderColor: cor.linha,
                    backgroundColor: pressed ? cor.fundo : "transparent",
                  })}
                >
                  <View style={{ width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center", backgroundColor: feita ? cor.ok : cor.fundo, borderWidth: feita ? 0 : 1, borderColor: cor.linha }}>
                    {feita ? <Ionicons name="checkmark" size={18} color="#FFFFFF" /> : <Text style={{ fontFamily: fonte.titulo, fontSize: 14, color: cor.tinta }}>{a.numero}</Text>}
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontFamily: fonte.textoForte, fontSize: 16, color: cor.tinta }}>{a.titulo}</Text>
                    <Text style={{ fontFamily: fonte.texto, fontSize: 13, lineHeight: 18, color: cor.tintaSuave }} numberOfLines={2}>{a.resumo}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color={cor.tintaSuave} />
                </Pressable>
              );
            })}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
