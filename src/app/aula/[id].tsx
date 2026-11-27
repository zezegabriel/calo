import { router, Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { VisaoAluno } from "../../components/aula/VisaoAluno";
import { VisaoProfessor } from "../../components/aula/VisaoProfessor";
import { Segmentado } from "../../components/Controles";
import { acharAula, aulas, modulos } from "../../content/aulas";
import { useProgresso } from "../../store/progresso";
import { cor, fonte, pagina } from "../../theme";

type Visao = "roteiro" | "aluno";

export default function TelaAula() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { perfil } = useProgresso();
  const [visao, setVisao] = useState<Visao>("roteiro");
  const aula = acharAula(id);

  if (!aula) {
    return <Text style={{ padding: 20, fontFamily: fonte.texto }}>Aula não encontrada.</Text>;
  }

  const modulo = modulos.find((m) => m.numero === aula.modulo);
  const professor = perfil === "professor";
  const proxima = aulas[aulas.indexOf(aula) + 1];

  return (
    <>
      <Stack.Screen options={{ title: `Aula ${aula.numero}` }} />
      <ScrollView contentContainerStyle={[pagina, { paddingBottom: 48 }]} keyboardShouldPersistTaps="handled">
        <Text style={{ fontFamily: fonte.textoForte, fontSize: 13, color: cor.acento }}>
          Módulo {aula.modulo}: {modulo?.nome}
        </Text>
        <Text style={{ fontFamily: fonte.titulo, fontSize: 26, lineHeight: 32, color: cor.tinta, marginTop: 2 }}>{aula.titulo}</Text>
        <Text style={{ fontFamily: fonte.texto, fontSize: 16, lineHeight: 23, color: cor.tintaSuave, marginTop: 4 }}>{aula.resumo}</Text>

        {professor && (
          <View style={{ marginTop: 16 }}>
            <Segmentado<Visao>
              opcoes={[{ valor: "roteiro", rotulo: "Roteiro do professor" }, { valor: "aluno", rotulo: "Material do aluno" }]}
              valor={visao}
              aoMudar={setVisao}
            />
          </View>
        )}

        {professor && visao === "roteiro" ? <VisaoProfessor aula={aula} /> : <VisaoAluno aula={aula} />}

        {proxima && (
          <Pressable onPress={() => router.replace(`/aula/${proxima.id}`)} accessibilityRole="link" style={{ marginTop: 28, paddingVertical: 12 }}>
            <Text style={{ fontFamily: fonte.texto, fontSize: 14, color: cor.tintaSuave }}>Próxima aula</Text>
            <Text style={{ fontFamily: fonte.titulo, fontSize: 17, color: cor.acento }}>
              {proxima.numero}. {proxima.titulo}
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </>
  );
}
