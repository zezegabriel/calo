import { View, Text } from "react-native";
import Svg, { Circle, G, Line, Rect, Text as SvgText } from "react-native-svg";
import type { Acorde } from "../content/tipos";
import { cor, fonte } from "../theme";

const LARG = 132;
const ALT = 150;
const X0 = 24;
const Y0 = 30;
const GW = 90;
const GH = 100;
const CASAS = 4;

/** Diagrama em pé: corda 6 à esquerda, corda 1 à direita, pestana do violão em cima. */
export function DiagramaAcorde({ acorde, compacto = false }: { acorde: Acorde; compacto?: boolean }) {
  const passoX = GW / 5;
  const passoY = GH / CASAS;
  const inicio = acorde.casaInicial ?? 1;
  const xCorda = (i: number) => X0 + i * passoX;
  const yCasa = (casa: number) => Y0 + (casa - inicio + 0.5) * passoY;

  return (
    <View style={{ alignItems: "center", width: LARG }}>
      <Text style={{ fontFamily: fonte.titulo, fontSize: 20, color: cor.tinta }}>{acorde.cifra}</Text>
      {!compacto && (
        <Text style={{ fontFamily: fonte.texto, fontSize: 12, color: cor.tintaSuave, textAlign: "center" }} numberOfLines={2}>
          {acorde.nome}
        </Text>
      )}
      <Svg width={LARG} height={ALT}>
        {inicio === 1 ? (
          <Rect x={X0} y={Y0 - 4} width={GW} height={4} fill={cor.tinta} />
        ) : (
          <SvgText x={X0 - 6} y={Y0 + passoY / 2 + 4} fontSize={11} fill={cor.tintaSuave} textAnchor="end">
            {`${inicio}ª`}
          </SvgText>
        )}
        {Array.from({ length: CASAS + 1 }, (_, i) => (
          <Line key={`c${i}`} x1={X0} x2={X0 + GW} y1={Y0 + i * passoY} y2={Y0 + i * passoY} stroke={cor.tinta} strokeWidth={1} />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <Line key={`s${i}`} x1={xCorda(i)} x2={xCorda(i)} y1={Y0} y2={Y0 + GH} stroke={cor.tinta} strokeWidth={1.6 - i * 0.18} />
        ))}
        {acorde.pestana && (
          <Rect
            x={xCorda(6 - acorde.pestana.de) - 7}
            y={yCasa(acorde.pestana.casa) - 7}
            width={(acorde.pestana.de - acorde.pestana.ate) * passoX + 14}
            height={14}
            rx={7}
            fill={cor.acento}
          />
        )}
        {acorde.casas.map((casa, i) => {
          const x = xCorda(i);
          if (casa === "x") {
            return <SvgText key={i} x={x} y={Y0 - 10} fontSize={12} fill={cor.acento} textAnchor="middle">×</SvgText>;
          }
          if (casa === 0) {
            return <Circle key={i} cx={x} cy={Y0 - 14} r={4} stroke={cor.tinta} strokeWidth={1.2} fill="none" />;
          }
          const naPestana = acorde.pestana && acorde.pestana.casa === casa && acorde.dedos[i] === 1;
          if (naPestana) return null;
          return (
            <G key={i}>
              <Circle cx={x} cy={yCasa(casa)} r={8} fill={cor.acento} />
              <SvgText x={x} y={yCasa(casa) + 4} fontSize={11} fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
                {String(acorde.dedos[i] || "")}
              </SvgText>
            </G>
          );
        })}
        {[6, 5, 4, 3, 2, 1].map((n, i) => (
          <SvgText key={`n${n}`} x={xCorda(i)} y={Y0 + GH + 14} fontSize={10} fill={cor.tintaSuave} textAnchor="middle">
            {String(n)}
          </SvgText>
        ))}
      </Svg>
    </View>
  );
}
