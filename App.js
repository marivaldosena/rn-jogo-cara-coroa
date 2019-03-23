import React from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

import Logo from './src/images/logo.png';
import btnJogarImage from './src/images/botao_jogar.png';
import btnSobreJogoImage from './src/images/sobre_jogo.png';
import btnOutrosJogosImage from './src/images/outros_jogos.png';

export default class App extends React.Component {
  render() {
    const { principal, apresentacao, rodape } = estilos;

    return (
      <View style={principal}>
        <View style={apresentacao}>
          <Image source={Logo} />
          <Image source={btnJogarImage} />
        </View>
        <View style={rodape}>
          <Image source={btnSobreJogoImage} />
          <Image source={btnOutrosJogosImage} />
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#61bd8c',
  },
  apresentacao: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
