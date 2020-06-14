import React from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/Button';

import abastecimento from '../../assets/abastecimento.png';
import alimentacao from '../../assets/alimentacao.png';
import banho from '../../assets/banho.png';
import mecanica from '../../assets/mecanica.png';
import repouso from '../../assets/repouso.png';
import mapa01 from '../../assets/mapa01.png';

import theme from '../../theme';

import { openGps2 } from '../../utils';

export default ({ navigation, route }) => {
  const { gasStation } = route.params;
  navigation.setOptions({
    title: gasStation.name,
  });

  const {
    km,
    address,
    promoted,
    rating: {
      gas = 5,
      shower = 5,
      food = 5,
      workshop = 5,
      sleep = 5,
    } = {},
  } = gasStation;

  const distance = `${km}km distância`;
  const stars = ((gas + shower + food + workshop + sleep) / 5).toFixed(1);

  return (
    <View style={{
      width: '100%',
      alignItems: 'center',
      marginTop: 30,
    }}
    >
      <View style={{
        width: '90%',
        backgroundColor: theme.white1,
        borderRadius: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: 'bold', fontSize: theme.fontDefault }}>{address}</Text>
            <View style={{ flexDirection: 'row', marginTop: 6 }}>
              <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{
                    color: theme.black1,
                    marginRight: 5,
                  }}
                  size={13}
                />
                <Text style={{ fontFamily: 'regular', fontSize: theme.fontInfo }}>{stars}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{
                    color: theme.black1,
                    marginRight: 5,
                  }}
                  size={15}
                />
                <Text style={{ fontFamily: 'regular', fontSize: theme.fontInfo }}>{distance}</Text>
              </View>
              { promoted && (
              <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{
                    color: theme.yellow1,
                    marginRight: 5,
                  }}
                  size={15}
                />
                <Text style={{ fontFamily: 'bold', fontSize: theme.fontInfo, color: theme.yellow1 }}>Patrocinado</Text>
              </View>
              ) }
            </View>
          </View>
        </View>
        <Image
          style={{
            width: '100%',
            height: 250,
          }}
          source={mapa01}
        />
        <View style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 15,
        }}
        >
          <View style={{ alignItems: 'center' }}>
            <Image source={abastecimento} style={{ width: 45, height: 45 }} />
            <Text>{gas}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={banho} style={{ width: 45, height: 45 }} />
            <Text>{shower}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={alimentacao} style={{ width: 45, height: 45 }} />
            <Text>{food}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={mecanica} style={{ width: 45, height: 45 }} />
            <Text>{workshop}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={repouso} style={{ width: 45, height: 45 }} />
            <Text>{sleep}</Text>
          </View>
        </View>
      </View>
      <Button
        style={{
          marginTop: 25,
          width: '90%',
          height: 60,
        }}
        icon={faStar}
        text="Avaliar Estabelecimento"
        textColor={theme.white1}
        backgroundColor={theme.purple1}
        onPress={() => navigation.navigate('Quality', { gasStation })}
      />
      <Button
        style={{
          marginTop: 25,
          width: '90%',
          height: 60,
        }}
        text="Iniciar viagem"
        textColor={theme.white1}
        backgroundColor={theme.green1}
        onPress={() => openGps2()}
      />
    </View>
  );
};
