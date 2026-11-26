import { Text, TextInput, View } from "react-native";
import type { Aula } from "../../content/tipos";
import { useProgresso } from "../../store/progresso";
import { cor, fonte, raio } from "../../theme";
import { LinhaCheck, Secao } from "../Controles";
import { TextoRico } from "../Texto";

function Lista({ itens }: { itens: string[] }) {
  return (
    <>
      {itens.map((t) => (
        <View key={t} style={{ flexDirection: "row", gap: 10, marginVertical: 3 }}>
          <Text style={{ fontFamily: fonte.textoForte, fontSize: 16, color: cor.professor, lineHeight: 24 }}>–</Text>
          <View style={{ flex: 1 }}><TextoRico>{t}</TextoRico></View>
        </View>
      ))}
    </>
  );
}

export function VisaoProfessor({ aula }: { aula: Aula }) {
  const { marcado, alternarMarca, anotacao, definirAnotacao } = useProgresso();
  const p = aula.professor;
  const total = p.roteiro.reduce((s, r) => s + r.minutos, 0);

  return (
    <View>
      <View style={{ backgroundColor: cor.professorClaro, borderRadius: raio, padding: 14, marginTop: 14 }}>
        <Text style={{ fontFamily: fonte.textoForte, fontSize: 14, color: cor.professor, marginBottom: 4 }}>Antes da aula</Text>
        <TextoRico>{p.preparar}</TextoRico>
      </View>

      <Secao titulo={`Roteiro (${total} minutos)`}>
        {p.roteiro.map((r, i) => (
          <View key={r.titulo} style={{ flexDirection: "row", gap: 12, paddingVertical: 10, borderTopWidth: i === 0 ? 0 : 1, borderColor: cor.linha }}>
            <View style={{ width: 52 }}>
              <Text style={{ fontFamily: fonte.titulo, fontSize: 16, color: cor.professor }}>{r.minutos} min</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: fonte.textoForte, fontSize: 16, color: cor.tinta }}>{r.titulo}</Text>
              <TextoRico estilo={{ fontSize: 15, lineHeight: 22 }}>{r.fazer}</TextoRico>
            </View>
          </View>
        ))}
      </Secao>

      <Secao titulo="Dicas"><Lista itens={p.dicas} /></Secao>
      <Secao titulo="Erros comuns"><Lista itens={p.errosComuns} /></Secao>

      <Secao titulo="A aula deu certo quando">
        <View style={{ borderLeftWidth: 3, borderColor: cor.professor, paddingLeft: 12 }}>
          <TextoRico>{p.sucesso}</TextoRico>
        </View>
      </Secao>

      <Secao titulo="Avaliação do aluno">
        {p.checklist.map((c, i) => {
          const chave = `${aula.id}:check:${i}`;
          return <LinhaCheck key={chave} texto={c} marcado={marcado(chave)} aoTocar={() => alternarMarca(chave)} corMarca={cor.professor} />;
        })}
      </Secao>

      <Secao titulo="Anotações da aula">
        <TextInput
          value={anotacao(aula.id)}
          onChangeText={(t) => definirAnotacao(aula.id, t)}
          placeholder="Trocas que travaram, música escolhida, o que revisar na próxima"
          placeholderTextColor={cor.tintaSuave}
          multiline
          style={{ minHeight: 110, textAlignVertical: "top", backgroundColor: cor.papel, borderWidth: 1, borderColor: cor.linha, borderRadius: raio, padding: 12, fontFamily: fonte.texto, fontSize: 16, color: cor.tinta }}
        />
      </Secao>
    </View>
  );
}
