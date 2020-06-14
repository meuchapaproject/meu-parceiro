import React, { useState } from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Button';

import abastecimento from '../../assets/abastecimento.png';
import alimentacao from '../../assets/alimentacao.png';
import banho from '../../assets/banho.png';
import mecanica from '../../assets/mecanica.png';
import repouso from '../../assets/repouso.png';

import theme from '../../theme';

const buildStyleTab = (active) => ({
  alignItems: 'center',
  borderBottomWidth: active ? 3 : 1,
  borderBottomColor: active ? theme.purple1 : theme.gray3,
});

const buildStyleImage = (active) => ({
  width: 45,
  height: 45,
});

export default ({ route }) => {
  const { gasStation } = route.params;

  const [tab, setTab] = useState(1);
  const [star, setStar] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
  });

  const {
    name,
  } = gasStation;

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
            <Text style={{ fontFamily: 'bold', fontSize: theme.fontTitle }}>{name}</Text>
          </View>
        </View>
        <View style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
        >
          {[abastecimento, banho, alimentacao, mecanica, repouso].map((ref, index) => (
            <TouchableOpacity onPress={() => setTab(index)} style={buildStyleTab(tab === index)}>
              <Image source={ref} style={buildStyleImage(tab === index)} />
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <TouchableOpacity />
        </View>
      </View>
      <Button
        style={{
          marginTop: 25,
          width: '90%',
          height: 60,
        }}
        icon={faStarO}
        text="Avaliar Estabelecimento"
        textColor={theme.white1}
        backgroundColor={theme.purple1}
        onPress={() => {}}
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
        onPress={() => {}}
      />
    </View>
  );
};
