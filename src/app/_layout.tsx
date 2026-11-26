import { Bitter_600SemiBold, Bitter_700Bold } from "@expo-google-fonts/bitter";
import { SourceSans3_400Regular, SourceSans3_600SemiBold } from "@expo-google-fonts/source-sans-3";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ProgressoProvider, useProgresso } from "../store/progresso";
import { cor, fonte } from "../theme";

void SplashScreen.preventAutoHideAsync();

function Navegacao() {
  const { pronto } = useProgresso();
  const [fontesProntas] = useFonts({ Bitter_700Bold, Bitter_600SemiBold, SourceSans3_400Regular, SourceSans3_600SemiBold });

  useEffect(() => {
    if (pronto && fontesProntas) void SplashScreen.hideAsync();
  }, [pronto, fontesProntas]);

  if (!pronto || !fontesProntas) return null;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: cor.fundo },
        headerShadowVisible: false,
        headerTintColor: cor.tinta,
        headerTitleStyle: { fontFamily: fonte.titulo },
        contentStyle: { backgroundColor: cor.fundo },
        headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="perfil" options={{ headerShown: false }} />
      <Stack.Screen name="(abas)" options={{ headerShown: false }} />
      <Stack.Screen name="aula/[id]" options={{ title: "" }} />
    </Stack>
  );
}

export default function Raiz() {
  return (
    <ProgressoProvider>
      <StatusBar style="dark" />
      <Navegacao />
    </ProgressoProvider>
  );
}
