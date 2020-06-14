import React, { useState } from 'react';
import {
  Text, View, Image, ScrollView,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faPaperPlane, faDollarSign, faClock, faShoppingCart, faFlagCheckered, faHome, faTruck,
} from '@fortawesome/free-solid-svg-icons';
import ButtonArrow from '../../components/ButtonArrow';
import Button from '../../components/Button';

import custo from '../../assets/custo.png';
import mapa01 from '../../assets/mapa01.png';
import mapa02 from '../../assets/mapa02.png';
import mapa03 from '../../assets/mapa03.png';
import mapa04 from '../../assets/mapa04.png';

import theme from '../../theme';

import { useGlobalState } from '../../store';

const mapas = {
  1: mapa01,
  2: mapa02,
  3: mapa03,
  4: mapa04,
};

export default ({
  imageWidth = 160,
  imageHeight = 160,
  styleImage = {},
  style = {},
  onPress = () => {},
}) => {
  const [eixo] = useGlobalState('eixo');
  const [mapa, setMapa] = useState(1);
  return (
    <ScrollView
      onPress={onPress}
      style={{ flex: 1, width: '100%' }}
    >
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            marginTop: 30,
            width: '85%',
            backgroundColor: theme.purple1,
            borderRadius: 7,
            justifyContent: 'space-between',
            ...style,
          }}
        >
          <Image
            source={custo}
            style={{
              position: 'absolute',
              top: -15,
              right: 0,
              ...styleImage,
            }}
            width={imageWidth}
            height={imageHeight}
          />
          <View style={{
            width: '50%',
            marginVertical: 30,
            marginLeft: 20,
          }}
          >
            <View style={{ flexDirection: 'row' }}>
              <FontAwesomeIcon icon={faHome} size={23} style={{ color: theme.white1 }} />
              <Text style={{ color: theme.white1, marginLeft: 10, fontFamily: 'regular' }}>
                Estrada do Boi Mirin
                {'\n'}
                504 - São Paulo - SP
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <FontAwesomeIcon icon={faFlagCheckered} size={23} style={{ color: theme.white1 }} />
              <Text style={{ color: theme.white1, marginLeft: 10, fontFamily: 'regular' }}>
                Rua Antonio Odil Peixoto
                {'\n'}
                352 - Porto Alegre - RS
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <FontAwesomeIcon icon={faTruck} size={23} style={{ color: theme.white1 }} />
              <Text style={{ color: theme.white1, marginLeft: 10, fontFamily: 'regular' }}>
                {`${eixo} eixos`}
              </Text>
            </View>
          </View>
          <View style={{
            width: '100%',
            height: 80,
            backgroundColor: theme.white1,
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          >
            <Text style={{
              fontFamily: 'bold',
              fontSize: theme.fontTitle,
              color: theme.black1,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 20,
            }}
            >
              Rotas
            </Text>
            <ButtonArrow
              style={{
                marginRight: 10,
              }}
              isActive={mapa === 1}
              text="A"
              onPress={() => setMapa(1)}
            />
            <ButtonArrow
              style={{
                marginRight: 10,
              }}
              isActive={mapa === 2}
              text="B"
              onPress={() => setMapa(2)}
            />
            <ButtonArrow
              style={{
                marginRight: 10,
              }}
              isActive={mapa === 3}
              text="C"
              onPress={() => setMapa(3)}
            />
            <ButtonArrow
              style={{
                marginRight: 10,
              }}
              isActive={mapa === 4}
              text="D"
              onPress={() => setMapa(4)}
            />
          </View>
          <Image
            style={{
              width: '100%',
              height: 250,
            }}
            source={mapas[mapa]}
          />
          <View style={{
            backgroundColor: theme.white1,
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
            padding: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 1,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 10,
          }}
          >
            <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
              <FontAwesomeIcon icon={faPaperPlane} style={{ color: theme.purple1 }} size={18} />
              <Text style={{ marginLeft: 10, fontFamily: 'semibold', fontSize: theme.fontDefault }}>1754 km de distância</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
              <FontAwesomeIcon icon={faClock} style={{ color: theme.purple1 }} size={18} />
              <Text style={{ marginLeft: 10, fontFamily: 'semibold', fontSize: theme.fontDefault }}>14 horas e 30 minutos</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
              <FontAwesomeIcon icon={faDollarSign} style={{ color: theme.purple1 }} size={18} />
              <Text style={{ marginLeft: 10, fontFamily: 'semibold', fontSize: theme.fontDefault }}>R$ 361,20 de pedágio</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
              <FontAwesomeIcon icon={faShoppingCart} style={{ color: theme.purple1 }} size={18} />
              <Text style={{ marginLeft: 10, fontFamily: 'semibold', fontSize: theme.fontDefault }}>236 estabelecimentos na rota</Text>
            </View>
          </View>
        </View>
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
    </ScrollView>
  );
};
