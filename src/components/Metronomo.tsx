import { Ionicons } from "@expo/vector-icons";
import { setAudioModeAsync, useAudioPlayer } from "expo-audio";
import { useEffect, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { sons } from "../lib/midia";
import { vibrar } from "../lib/plataforma";
import { cor, fonte, raio } from "../theme";

const MIN = 40;
const MAX = 200;

export function Metronomo() {
  const [bpm, setBpm] = useState(70);
  const [tocando, setTocando] = useState(false);
  const [tempo, setTempo] = useState(-1);
  const forte = useAudioPlayer(sons.cliqueForte);
  const fraco = useAudioPlayer(sons.clique);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toques = useRef<number[]>([]);

  useEffect(() => {
    void setAudioModeAsync({ playsInSilentMode: true });
  }, []);

  useEffect(() => {
    if (!tocando) {
      setTempo(-1);
      return;
    }
    const intervalo = 60000 / bpm;
    let proximo = Date.now();
    let contagem = 0;
    const bater = () => {
      const t = contagem % 4;
      const som = t === 0 ? forte : fraco;
      void som.seekTo(0);
      som.play();
      if (t === 0) vibrar.forte();
      else vibrar.leve();
      setTempo(t);
      contagem += 1;
      proximo += intervalo;
      timer.current = setTimeout(bater, Math.max(0, proximo - Date.now()));
    };
    bater();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [tocando, bpm, forte, fraco]);

  const mudar = (d: number) => setBpm((b) => Math.min(MAX, Math.max(MIN, b + d)));

  function tocarNoTempo() {
    const agora = Date.now();
    toques.current = [...toques.current.filter((t) => agora - t < 3000), agora];
    if (toques.current.length >= 3) {
      const ts = toques.current;
      const media = (ts[ts.length - 1] - ts[0]) / (ts.length - 1);
      setBpm(Math.min(MAX, Math.max(MIN, Math.round(60000 / media))));
    }
  }

  return (
    <View style={{ backgroundColor: cor.azulNoite, borderRadius: raio, padding: 18 }}>
      <Text style={{ fontFamily: fonte.textoForte, fontSize: 13, color: "#C9D3E0" }}>Metrônomo</Text>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
        <BotaoRedondo icone="remove" rotulo="Diminuir 5 bpm" aoTocar={() => mudar(-5)} />
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontFamily: fonte.titulo, fontSize: 54, color: "#F8ECDE" }}>{bpm}</Text>
          <Text style={{ fontFamily: fonte.texto, fontSize: 13, color: "#AEB4C2", marginTop: -6 }}>batidas por minuto</Text>
        </View>
        <BotaoRedondo icone="add" rotulo="Aumentar 5 bpm" aoTocar={() => mudar(5)} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 14, marginVertical: 18 }}>
        {[0, 1, 2, 3].map((t) => (
          <View
            key={t}
            style={{
              width: t === 0 ? 22 : 16, height: t === 0 ? 22 : 16, borderRadius: 11, alignSelf: "center",
              backgroundColor: tempo === t ? (t === 0 ? cor.acento : "#F8ECDE") : "#3A4560",
            }}
          />
        ))}
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Pressable
          onPress={() => setTocando((v) => !v)}
          accessibilityRole="button"
          style={({ pressed }) => ({ flex: 2, minHeight: 48, borderRadius: raio, backgroundColor: cor.acento, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 8, opacity: pressed ? 0.85 : 1 })}
        >
          <Ionicons name={tocando ? "pause" : "play"} size={18} color="#FFFFFF" />
          <Text style={{ fontFamily: fonte.textoForte, fontSize: 16, color: "#FFFFFF" }}>{tocando ? "Parar" : "Começar"}</Text>
        </Pressable>
        <Pressable
          onPress={tocarNoTempo}
          accessibilityRole="button"
          accessibilityHint="Toque três vezes no ritmo da música para achar o andamento"
          style={({ pressed }) => ({ flex: 1, minHeight: 48, borderRadius: raio, borderWidth: 1.5, borderColor: "#5A6480", alignItems: "center", justifyContent: "center", backgroundColor: pressed ? "#2B3550" : "transparent" })}
        >
          <Text style={{ fontFamily: fonte.textoForte, fontSize: 15, color: "#F8ECDE" }}>Tocar no tempo</Text>
        </Pressable>
      </View>
    </View>
  );
}

function BotaoRedondo({ icone, rotulo, aoTocar }: { icone: "add" | "remove"; rotulo: string; aoTocar: () => void }) {
  return (
    <Pressable
      onPress={aoTocar}
      accessibilityRole="button"
      accessibilityLabel={rotulo}
      style={({ pressed }) => ({ width: 52, height: 52, borderRadius: 26, borderWidth: 1.5, borderColor: "#5A6480", alignItems: "center", justifyContent: "center", backgroundColor: pressed ? "#2B3550" : "transparent" })}
    >
      <Ionicons name={icone} size={24} color="#F8ECDE" />
    </Pressable>
  );
}
