import React, { useState } from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar as faStarOO } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarO, faHandshake } from '@fortawesome/free-regular-svg-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Button from '../../components/Button';

import abastecimento from '../../assets/abastecimento.png';
import alimentacao from '../../assets/alimentacao.png';
import banho from '../../assets/banho.png';
import mecanica from '../../assets/mecanica.png';
import repouso from '../../assets/repouso.png';

import theme from '../../theme';

const buildStyleTab = (active) => ({
  alignItems: 'center',
  paddingHorizontal: 10,
  borderBottomWidth: active ? 3 : 1,
  borderBottomColor: active ? theme.purple1 : theme.gray3,
});

const buildStyleImage = (active) => ({
  width: 50,
  height: 50,
  color: active ? theme.purple1 : theme.black1,
});

const message = 'Dê uma nota de 1 a 5 para a qualidade do\nCombustível vendido pelo estabelecimento';

export default ({ route, navigation }) => {
  const { gasStation } = route.params;

  const [ok, setOk] = useState(false);
  const [tab, setTab] = useState(1);
  const [star, setStar] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
  });

  if (ok) {
    return (
      <View style={{ flex: 1, marginTop: 30, alignItems: 'center' }}>
        <View style={{
          width: '90%',
          backgroundColor: theme.white1,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderRadius: 7,
          elevation: 5,
          padding: 20,
        }}
        >
          <Text style={{ color: theme.black1, fontFamily: 'bold', fontSize: theme.fontTitle }}>Avaliação Finalizada</Text>
          <FontAwesomeIcon icon={faHandshake} color={theme.black1} size={100} />
          <Text style={{ color: theme.black1, fontFamily: 'regular', fontSize: theme.fontInfo }}>Obrigado! Continue avaliando e melhorando a vida dos caminhoneiros brasileiros!</Text>
        </View>
      </View>
    );
  }

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
            <Text style={{ fontFamily: 'bold', fontSize: theme.fontDefault, color: theme.black1 }}>{name}</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
        >
          {[abastecimento, banho, alimentacao, mecanica, repouso].map((ref, index) => (
            <TouchableOpacity onPress={() => setTab(index)} style={buildStyleTab(tab === index)}>
              <Image source={ref} style={buildStyleImage(tab === index)} />
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Text style={{ textAlign: 'center', marginTop: 20 }}>{message}</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
        }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <TouchableOpacity onPress={() => setStar({ ...star, [tab]: item })} style={{ paddingVertical: 25, alignItems: 'center' }}>
              <FontAwesomeIcon icon={item <= star[tab] ? faStarOO : faStarO} size={30} color={item <= star[tab] ? theme.purple1 : theme.black1} />
              <Text style={{
                marginTop: 15, fontFamily: 'bold', fontSize: theme.fontTitle, color: item <= star[tab] ? theme.purple1 : theme.black1,
              }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Button
        style={{
          marginTop: 25,
          width: '90%',
          height: 60,
        }}
        text="Finalizar avaliação"
        textColor={theme.white1}
        backgroundColor={theme.green1}
        onPress={() => {
          setOk(true);
          setTimeout(() => navigation.goBack(), 3000);
        }}
      />
    </View>
  );
};
