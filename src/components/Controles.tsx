import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { vibrar } from "../lib/plataforma";
import { cor, fonte, raio } from "../theme";

export function Botao({ texto, aoTocar, tipo = "principal" }: { texto: string; aoTocar: () => void; tipo?: "principal" | "secundario" }) {
  const principal = tipo === "principal";
  return (
    <Pressable
      onPress={aoTocar}
      accessibilityRole="button"
      style={({ pressed }) => ({
        minHeight: 48,
        borderRadius: raio,
        paddingHorizontal: 18,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: principal ? cor.tinta : "transparent",
        borderWidth: principal ? 0 : 1.5,
        borderColor: cor.tinta,
        opacity: pressed ? 0.8 : 1,
        transform: [{ scale: pressed ? 0.98 : 1 }],
      })}
    >
      <Text style={{ fontFamily: fonte.textoForte, fontSize: 16, color: principal ? cor.papel : cor.tinta }}>{texto}</Text>
    </Pressable>
  );
}

export function LinhaCheck({ texto, marcado, aoTocar, corMarca = cor.acento }: { texto: string; marcado: boolean; aoTocar: () => void; corMarca?: string }) {
  return (
    <Pressable
      onPress={() => {
        vibrar.selecao();
        aoTocar();
      }}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: marcado }}
      style={{ flexDirection: "row", alignItems: "flex-start", paddingVertical: 10, gap: 12, minHeight: 44 }}
    >
      <View
        style={{
          width: 24, height: 24, borderRadius: 6, borderWidth: 2,
          borderColor: marcado ? corMarca : cor.tintaSuave,
          backgroundColor: marcado ? corMarca : "transparent",
          alignItems: "center", justifyContent: "center", marginTop: 1,
        }}
      >
        {marcado && <Ionicons name="checkmark" size={16} color="#FFFFFF" />}
      </View>
      <Text style={{ flex: 1, fontFamily: fonte.texto, fontSize: 16, lineHeight: 22, color: marcado ? cor.tintaSuave : cor.tinta, textDecorationLine: marcado ? "line-through" : "none" }}>
        {texto}
      </Text>
    </Pressable>
  );
}

export function Segmentado<T extends string>({ opcoes, valor, aoMudar }: { opcoes: { valor: T; rotulo: string }[]; valor: T; aoMudar: (v: T) => void }) {
  return (
    <View style={{ flexDirection: "row", backgroundColor: cor.linha, borderRadius: raio, padding: 3 }}>
      {opcoes.map((o) => {
        const ativo = o.valor === valor;
        return (
          <Pressable
            key={o.valor}
            onPress={() => aoMudar(o.valor)}
            accessibilityRole="tab"
            accessibilityState={{ selected: ativo }}
            style={{ flex: 1, minHeight: 40, borderRadius: raio - 2, alignItems: "center", justifyContent: "center", backgroundColor: ativo ? cor.papel : "transparent" }}
          >
            <Text style={{ fontFamily: ativo ? fonte.textoForte : fonte.texto, fontSize: 15, color: cor.tinta }}>{o.rotulo}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export function Secao({ titulo, children }: { titulo?: string; children: React.ReactNode }) {
  return (
    <View style={{ marginTop: 22 }}>
      {titulo && <Text style={{ fontFamily: fonte.titulo, fontSize: 19, color: cor.tinta, marginBottom: 8 }}>{titulo}</Text>}
      {children}
    </View>
  );
}
