import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const OutrosJogos = () => {
  const { principal } = estilos;

  return (
    <View style={principal}>
      <Text>Outros Jogos</Text>
      <Text>Apresentar uma lista dos outros jogos.</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#61bd8c',
  }
});

export default OutrosJogos;
