import { ScrollView, Text, View } from "react-native";
import Svg, { Line, Rect, Text as SvgText } from "react-native-svg";
import type { Tab } from "../content/tipos";
import { cor, fonte } from "../theme";

const NOMES = ["1 Mi", "2 Si", "3 Sol", "4 Ré", "5 Lá", "6 Mi"];
const PASSO_Y = 14;
const PASSO_X = 30;
const X0 = 40;
const Y0 = 10;

/** Tablatura: corda 1 (fina) em cima. Número = casa, 0 = corda solta. */
export function Tablatura({ tab }: { tab: Tab }) {
  const largura = X0 + tab.notas.length * PASSO_X + 16;
  const altura = Y0 + 5 * PASSO_Y + (tab.contagem ? 28 : 12);
  const yCorda = (c: number) => Y0 + (c - 1) * PASSO_Y;

  return (
    <View style={{ marginVertical: 8 }}>
      <Text style={{ fontFamily: fonte.textoForte, fontSize: 15, color: cor.acento, marginBottom: 4 }}>{tab.titulo}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Svg width={largura} height={altura}>
          {NOMES.map((n, i) => (
            <SvgText key={n} x={X0 - 6} y={yCorda(i + 1) + 3.5} fontSize={9} fill={cor.tintaSuave} textAnchor="end">
              {n}
            </SvgText>
          ))}
          {NOMES.map((n, i) => (
            <Line key={`l${n}`} x1={X0} x2={largura - 6} y1={yCorda(i + 1)} y2={yCorda(i + 1)} stroke={cor.tintaSuave} strokeWidth={0.8} />
          ))}
          {tab.notas.map((nota, k) => {
            const x = X0 + 14 + k * PASSO_X;
            if (nota === "|") {
              return <Line key={k} x1={x} x2={x} y1={yCorda(1)} y2={yCorda(6)} stroke={cor.tintaSuave} strokeWidth={1} />;
            }
            if (nota === null) return null;
            const lista = Array.isArray(nota[0]) ? (nota as [number, number][]) : [nota as [number, number]];
            return lista.map(([corda, casa]) => (
              <SvgTextoNota key={`${k}-${corda}`} x={x} y={yCorda(corda)} casa={casa} />
            ));
          })}
          {tab.contagem?.map((c, k) => (
            <SvgText key={`c${k}`} x={X0 + 14 + k * PASSO_X} y={yCorda(6) + 20} fontSize={11} fill={cor.professor} textAnchor="middle">
              {c}
            </SvgText>
          ))}
        </Svg>
      </ScrollView>
    </View>
  );
}

function SvgTextoNota({ x, y, casa }: { x: number; y: number; casa: number }) {
  return (
    <>
      <Rect x={x - 7} y={y - 6} width={14} height={12} fill={cor.papel} />
      <SvgText x={x} y={y + 4} fontSize={12} fontWeight="bold" fill={cor.tinta} textAnchor="middle">
        {String(casa)}
      </SvgText>
    </>
  );
}
