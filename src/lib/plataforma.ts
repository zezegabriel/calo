// O que muda entre celular e computador fica aqui: vibração e caixas de confirmação.
import * as Haptics from "expo-haptics";
import { Alert, Platform } from "react-native";

const noCelular = Platform.OS === "ios" || Platform.OS === "android";

export const vibrar = {
  selecao: () => {
    if (noCelular) void Haptics.selectionAsync();
  },
  leve: () => {
    if (noCelular) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  },
  forte: () => {
    if (noCelular) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  },
  sucesso: () => {
    if (noCelular) void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  },
};

/** Pergunta antes de uma ação destrutiva. No computador usa a caixa do próprio navegador. */
export function confirmar(titulo: string, texto: string, rotuloAcao: string, acao: () => void) {
  if (Platform.OS === "web") {
    if (globalThis.confirm(`${titulo}\n\n${texto}`)) acao();
    return;
  }
  Alert.alert(titulo, texto, [
    { text: "Cancelar", style: "cancel" },
    { text: rotuloAcao, style: "destructive", onPress: acao },
  ]);
}
