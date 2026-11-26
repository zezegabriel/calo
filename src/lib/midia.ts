// Imagens e sons do app, com tipo. O Metro exige require() com caminho fixo.
import type { AudioSource } from "expo-audio";
import type { ImageSourcePropType } from "react-native";

export const marca = {
  icone: require("../../assets/marca/icone-arredondado.png") as ImageSourcePropType,
  nomeClaro: require("../../assets/marca/nome-claro.png") as ImageSourcePropType,
  nomeEscuro: require("../../assets/marca/nome-escuro.png") as ImageSourcePropType,
  sloganClaro: require("../../assets/marca/slogan-claro.png") as ImageSourcePropType,
};

export const sons = {
  cliqueForte: require("../../assets/sons/clique-forte.wav") as AudioSource,
  clique: require("../../assets/sons/clique.wav") as AudioSource,
};
