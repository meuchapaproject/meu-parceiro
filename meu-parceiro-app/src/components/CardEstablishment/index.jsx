import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import ButtonArrow from '../ButtonArrow';
import ButtonPromoted from '../ButtonPromoted';

import abastecimento from '../../assets/abastecimento.png';
import alimentacao from '../../assets/alimentacao.png';
import banho from '../../assets/banho.png';
import mecanica from '../../assets/mecanica.png';
import repouso from '../../assets/repouso.png';

import theme from '../../theme';

export default ({
  gasStation: {
    name,
    km,
    promoted,
    rating: {
      gas = 5,
      shower = 5,
      food = 5,
      workshop = 5,
      sleep = 5,
    } = {},
  },
  style = {},
  onPress = () => {},
}) => {
  const distance = `${km}km distância`;
  const stars = ((gas + shower + food + workshop + sleep) / 5).toFixed(1);

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={{
        width: '100%',
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
        elevation: 5,
        ...style,
      }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: 'semibold', fontSize: theme.fontDefault }}>{name}</Text>
            <View style={{ flexDirection: 'row', marginTop: 3 }}>
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
            </View>
          </View>
          { promoted ? (
            <ButtonPromoted
              isActive
              onPress={onPress}
            />
          ) : (
            <ButtonArrow
              isActive
              onPress={onPress}
            />
          )}
        </View>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 15,
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
    </TouchableWithoutFeedback>
  );
};
