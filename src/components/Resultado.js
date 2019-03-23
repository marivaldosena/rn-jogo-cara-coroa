import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Cara from '../images/moeda_cara.png';
import Coroa from '../images/moeda_coroa.png';

class Resultado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultado: ''
    };
  }
  
  componentWillMount() {
    const numAleatorio = Math.floor(Math.random() * 2);
    let caraOuCoroa = '';

    if (numAleatorio === 0) {
      caraOuCoroa = 'cara';
    } else {
      caraOuCoroa = 'coroa';
    }

    this.setState({ resultado: caraOuCoroa });
  }

  render() {
    const { principal } = estilos;
    const { resultado } = this.state;
    const imagem = resultado === 'cara' ?
      <Image source={Cara} /> :
      <Image source={Coroa} />;
      
    return (
      <View style={principal}>
        {imagem}
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#61bd8c',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Resultado;
