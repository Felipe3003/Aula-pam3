
import { FlatList, StyleSheet, Text, View} from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao"; 
import Jogo from "./src/components/jogos";
import Dados from "./dados/dadosJogos"
export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho />
      < Botao 
      logo= "ios-game-controller"
      texto= "jogos"
      cor= "blue"
      logo2= "ios-game-controller-outline"
      texto2= "jogos"
      cor2= "black"
      />
       < Botao 
      logo= "ios-musical-note"
      texto= "Musicas"
      cor= "red"
      logo2= "ios-car-sport"
      texto2= "Carros"
      cor2= "gray"
      />

      <FlatList
      horizontal={true}
      data = {Dados}
      keyExtractor = {(item) => item.id}
      renderItem = { ({item})=>(

      <Jogo
      nome = {item.nome}
      imagem = {item.imagem}
      valor = {item.valor}
      />
      )}
/>
</View>
  );
      }
