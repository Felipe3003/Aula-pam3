
import { StyleSheet, Text, View} from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao"; 

export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      < Botao 
      logo= "ios-game-controller"
      texto= "jogos"
      cor= "purple"
      logo2= "ios-game-controller-outline"
      texto2= "jogos"
      cor2= "black"
      />
    </View>
  );
}
