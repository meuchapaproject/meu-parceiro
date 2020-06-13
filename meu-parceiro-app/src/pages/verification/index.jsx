import React from 'react';
import { SafeAreaView } from 'react-native';

import CardMain from '../../components/CardMain';

import theme from '../../theme';

import estabelecimento from '../../assets/estabelecimento.png';

const commonStyle = {
  marginTop: 30,
};

export default ({ route }) => {
  const { code } = route.params;
  console.log(code);
  return (
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
    </SafeAreaView>
  );
};
