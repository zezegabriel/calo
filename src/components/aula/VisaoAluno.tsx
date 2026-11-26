import * as Haptics from "expo-haptics";
import { Text, View } from "react-native";
import type { Aula } from "../../content/tipos";
import { useProgresso } from "../../store/progresso";
import { cor, fonte, raio } from "../../theme";
import { BlocoView } from "../BlocoView";
import { Botao, LinhaCheck, Secao } from "../Controles";

export function VisaoAluno({ aula }: { aula: Aula }) {
  const { marcado, alternarMarca, aulaFeita, alternarAulaFeita } = useProgresso();
  const feita = aulaFeita(aula.id);

  return (
    <View>
      <View style={{ backgroundColor: cor.papel, borderRadius: raio, borderWidth: 1, borderColor: cor.linha, padding: 14, marginTop: 14 }}>
        <Text style={{ fontFamily: fonte.textoForte, fontSize: 14, color: cor.tintaSuave, marginBottom: 6 }}>Ao fim desta aula você vai</Text>
        {aula.objetivos.map((o) => (
          <Text key={o} style={{ fontFamily: fonte.texto, fontSize: 16, lineHeight: 23, color: cor.tinta }}>– {o}</Text>
        ))}
      </View>

      {aula.aluno.blocos.map((b, i) => <BlocoView key={i} bloco={b} />)}

      <Secao titulo="Tarefa para casa">
        <Text style={{ fontFamily: fonte.texto, fontSize: 14, color: cor.tintaSuave, marginBottom: 4 }}>
          10 a 15 minutos por dia. Marque o que já fez.
        </Text>
        {aula.aluno.tarefa.map((t, i) => {
          const chave = `${aula.id}:tarefa:${i}`;
          return <LinhaCheck key={chave} texto={t} marcado={marcado(chave)} aoTocar={() => alternarMarca(chave)} />;
        })}
      </Secao>

      <View style={{ marginTop: 26 }}>
        <Botao
          texto={feita ? "Desmarcar aula" : "Marcar aula como feita"}
          tipo={feita ? "secundario" : "principal"}
          aoTocar={() => {
            if (!feita) void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            alternarAulaFeita(aula.id);
          }}
        />
      </View>
    </View>
  );
}
