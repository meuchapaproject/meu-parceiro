import React, { useState } from 'react';
import {
  View, Text, SafeAreaView, Image,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
// import mapa01 from '../../assets/mapa01.png';

import eixos02 from '../../assets/02eixos.png';
import eixos03 from '../../assets/03eixos.png';
import eixos04 from '../../assets/04eixos.png';
import eixos05 from '../../assets/05eixos.png';
import eixos07 from '../../assets/07eixos.png';
import eixos09 from '../../assets/09eixos.png';

import ButtonArrow from '../../components/ButtonArrow';
import Search from '../../components/Search';

import theme from '../../theme';

const eixos = {
  2: eixos02,
  3: eixos03,
  4: eixos04,
  5: eixos05,
  7: eixos07,
  9: eixos09,
};

export default ({ style = {} }) => {
  const [eixo, setEixo] = useState(2);
  const message = `${eixo} eixos`;
  return (
    <SafeAreaView style={{ backgroundColor: theme.gray1, alignItems: 'center' }}>
      <View
        style={{
          marginTop: 20,
          width: '90%',
          backgroundColor: theme.white1,
          borderRadius: 7,
          padding: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          ...style,
        }}
      >
        <View style={{ width: '100%' }}>
          <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
              <FontAwesomeIcon icon={faHome} style={{ color: theme.black1 }} />
              <Text style={{
                fontFamily: 'semibold',
                fontSize: theme.fontDefault,
                color: theme.black1,
                marginLeft: 10,
              }}
              >
                Origem
              </Text>
            </View>
            <Search />
          </View>
          <View style={{ width: '100%', marginTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
              <FontAwesomeIcon icon={faFlagCheckered} style={{ color: theme.black1 }} />
              <Text style={{
                fontFamily: 'semibold',
                fontSize: theme.fontDefault,
                color: theme.black1,
                marginLeft: 10,
              }}
              >
                Destino
              </Text>
            </View>
            <Search />
          </View>
        </View>
        <Image
          style={{ width: '100%', height: 70, marginTop: 30 }}
          source={eixos[eixo]}
        />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 30,
          marginTop: 20,
        }}
        >
          <ButtonArrow
            isActive
            onPress={() => {
              if (eixo - 1 === 8 || eixo - 1 === 6) {
                setEixo(eixo - 2);
              } else if (eixo > 2) {
                setEixo(eixo - 1);
              }
            }}
            inverted
          />
          <Text style={{
            textAlign: 'center',
            fontFamily: 'bold',
            fontSize: theme.fontTitle,
          }}
          >
            {message}
          </Text>
          <ButtonArrow
            isActive
            onPress={() => {
              if (eixo + 1 === 8 || eixo + 1 === 6) {
                setEixo(eixo + 2);
              } else if (eixo < 9) {
                setEixo(eixo + 1);
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
