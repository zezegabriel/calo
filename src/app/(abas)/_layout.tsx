import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import type { ColorValue } from "react-native";
import { cor, fonte } from "../../theme";

type Icone = keyof typeof Ionicons.glyphMap;

function icone(nome: Icone) {
  return function IconeAba({ color, size }: { color: ColorValue; size: number }) {
    return <Ionicons name={nome} color={color as string} size={size} />;
  };
}

export default function Abas() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: cor.fundo },
        headerShadowVisible: false,
        headerTitleStyle: { fontFamily: fonte.titulo, fontSize: 20, color: cor.tinta },
        tabBarActiveTintColor: cor.acento,
        tabBarInactiveTintColor: cor.tintaSuave,
        tabBarStyle: { backgroundColor: cor.papel, borderTopColor: cor.linha },
        tabBarLabelStyle: { fontFamily: fonte.textoForte, fontSize: 12 },
        sceneStyle: { backgroundColor: cor.fundo },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Aulas", tabBarIcon: icone("book-outline") }} />
      <Tabs.Screen name="acordes" options={{ title: "Acordes", tabBarIcon: icone("grid-outline") }} />
      <Tabs.Screen name="ritmo" options={{ title: "Ritmo", tabBarIcon: icone("pulse-outline") }} />
      <Tabs.Screen name="ajustes" options={{ title: "Ajustes", tabBarIcon: icone("settings-outline") }} />
    </Tabs>
  );
}
