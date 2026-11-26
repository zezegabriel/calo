import { Redirect } from "expo-router";
import { useProgresso } from "../store/progresso";

export default function Inicio() {
  const { perfil } = useProgresso();
  return <Redirect href={perfil ? "/(abas)" : "/perfil"} />;
}
