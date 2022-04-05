import React from "react";
import {View, TouchableOpacity,StyleSheet,Text,Image,} from "react-native";

export default function Jogos({nome, valor, imagem}) {
    return (
        <TouchableOpacity style={estilo.containerJogos}>
            <Image style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
            />
            <Text style = {estilo.nome}>{nome}</Text>
            <Text style = {estilo.valor}>{valor}</Text>


        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    containerJogos:{
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 8,
        padding:10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: 100,
        height: 150,
        marginLeft: 8,
    },
    titulo: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
    },
    images: {
        width: "100%",
        height: 75,
        borderRadius: 3,
    },
});
