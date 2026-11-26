import { Text, type TextStyle, type StyleProp } from "react-native";
import { cor, fonte } from "../theme";

/** Texto com **negrito** e parágrafos separados por linha em branco. */
export function TextoRico({ children, estilo }: { children: string; estilo?: StyleProp<TextStyle> }) {
  const paragrafos = children.split("\n\n");
  return (
    <>
      {paragrafos.map((p, i) => (
        <Text key={i} style={[base, i > 0 && { marginTop: 10 }, estilo]}>
          {p.split(/(\*\*[^*]+\*\*)/g).map((parte, j) =>
            parte.startsWith("**") ? (
              <Text key={j} style={{ fontFamily: fonte.textoForte, color: cor.tinta }}>
                {parte.slice(2, -2)}
              </Text>
            ) : (
              parte
            ),
          )}
        </Text>
      ))}
    </>
  );
}

const base: TextStyle = { fontFamily: fonte.texto, fontSize: 16, lineHeight: 24, color: cor.tinta };

export function Titulo({ children, nivel = 2 }: { children: string; nivel?: 1 | 2 | 3 }) {
  const tamanhos = { 1: 28, 2: 20, 3: 17 } as const;
  return (
    <Text
      style={{
        fontFamily: nivel === 3 ? fonte.tituloMedio : fonte.titulo,
        fontSize: tamanhos[nivel],
        lineHeight: tamanhos[nivel] * 1.25,
        color: cor.tinta,
        marginBottom: 8,
      }}
    >
      {children}
    </Text>
  );
}

export function Nota({ children }: { children: string }) {
  return <Text style={{ fontFamily: fonte.texto, fontSize: 14, lineHeight: 20, color: cor.tintaSuave }}>{children}</Text>;
}
