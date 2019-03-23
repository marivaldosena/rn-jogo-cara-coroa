import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';
import Resultado from './src/components/Resultado';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key='root' headerLayoutPreset='center'>
          <Scene key='principal' component={Principal} initial title='Cara ou Coroa' />
          <Scene key='sobrejogo' component={SobreJogo} title='Sobre o Jogo' />
          <Scene key='outrosjogos' component={OutrosJogos} title='Outros Jogos' />
          <Scene key='resultado' component={Resultado} title='Resultado' />
        </Stack>
      </Router>
    );
  }
}
