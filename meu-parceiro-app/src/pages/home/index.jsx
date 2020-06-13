import React from 'react';
import { SafeAreaView } from 'react-native';

import CardMain from '../../components/CardMain';

import theme from '../../theme';

import estabelecimento from '../../assets/estabelecimento.png';
import custo from '../../assets/custo.png';
import saude from '../../assets/saude.png';

const commonStyle = {
  marginTop: 30,
};

export default () => (
  <SafeAreaView style={{
    flex: 1,
    backgroundColor: theme.gray1,
    flexDirection: 'column',
    alignItems: 'center',
  }}
  >
    <CardMain
      style={commonStyle}
      title="Buscar Estabelecimentos"
      subtitle="Postos, restaurantes, paradas, hotéis, oficinas entre outros"
      image={estabelecimento}
    />
    <CardMain
      style={commonStyle}
      title="Mapear custo de viagem"
      subtitle="Pedágios, combustível e roteiros para sua viagem"
      image={custo}
    />
    <CardMain
      style={commonStyle}
      imageWidth={104}
      imageHeight={180}
      styleImage={{
        right: 20,
      }}
      title="Exercícios e relaxamento"
      subtitle="Vídeos de exercícios e alongamentos para evitar dores nas costas e pernas"
      image={saude}
    />
  </SafeAreaView>
);
