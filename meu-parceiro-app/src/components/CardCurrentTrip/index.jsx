import React, { useState } from 'react';
import { View, Image } from 'react-native';
import theme from '../../theme';

import ButtonArrow from '../ButtonArrow';

import ponto01 from '../../assets/ponto01.png';
import ponto02 from '../../assets/ponto02.png';
import ponto03 from '../../assets/ponto03.png';

const pontos = {
  1: ponto01,
  2: ponto02,
  3: ponto03,
};

export default () => {
  const [ponto, setPonto] = useState(1);
  return (
    <View
      style={{
        width: '90%',
        height: 230,
        backgroundColor: theme.white1,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
      }}
    >
      <Image
        source={pontos[ponto]}
        style={{}}
        width="95%"
        height={180}
        borderRadius={30}
      />
      <View style={{
        position: 'absolute',
        top: 140,
        left: 15,
        backgroundColor: theme.white1,
        borderRadius: 30,
      }}
      >
        <ButtonArrow
          inverted
          isActive
          onPress={() => {
            if (ponto > 1) {
              setPonto(ponto - 1);
            }
          }}
        />
      </View>
      <View style={{
        position: 'absolute',
        top: 140,
        right: 15,
        backgroundColor: theme.white1,
        borderRadius: 30,
      }}
      >
        <ButtonArrow
          isActive
          onPress={() => {
            if (ponto < 3) {
              setPonto(ponto + 1);
            }
          }}
        />
      </View>
    </View>
  );
};
