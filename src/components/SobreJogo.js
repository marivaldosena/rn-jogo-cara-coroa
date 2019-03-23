import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SobreJogo = () => {
  const { principal } = estilos;

  return (
    <View style={principal}>
      <Text>
        Descrição do Jogo e outras informações.
      </Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#61bd8c',
  },
});

export default SobreJogo;
