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
import CardEstablishment from '../../components/CardEstablishment';

import custo from '../../assets/custo.png';

import theme from '../../theme';

import { useGlobalState } from '../../store';

import { openGps } from '../../utils';

import data from './data';

export default ({
  imageWidth = 160,
  imageHeight = 160,
  styleImage = {},
  style = {},
  onPress = () => {},
  lat = 0,
  lng = 0,
  navigation,
}) => {
  const [eixo] = useGlobalState('eixo');
  const [mapa, setMapa] = useState(1);
  return (
    <>
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
                  São Paulo - SP
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <FontAwesomeIcon icon={faFlagCheckered} size={23} style={{ color: theme.white1 }} />
                <Text style={{ color: theme.white1, marginLeft: 10, fontFamily: 'regular' }}>
                  Porto Alegre - RS
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
            </View>
            <Image
              style={{
                width: '100%',
                height: 250,
              }}
              source={data[mapa].map}
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
                <Text style={{ marginLeft: 10, fontFamily: 'semibold', fontSize: theme.fontDefault }}>
                  {data[mapa].distancia}
                  {' '}
                  km de distância
                </Text>
              </View>
              <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                <FontAwesomeIcon icon={faClock} style={{ color: theme.purple1 }} size={18} />
                <Text style={{ marginLeft: 10, fontFamily: 'semibold', fontSize: theme.fontDefault }}>{data[mapa].tempo}</Text>
              </View>
              <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                <FontAwesomeIcon icon={faDollarSign} style={{ color: theme.purple1 }} size={18} />
                <Text style={{ marginLeft: 10, fontFamily: 'semibold', fontSize: theme.fontDefault }}>
                  {data[mapa].pedagio}
                  {' '}
                  de pedágio
                </Text>
              </View>
              <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: theme.purple1 }} size={18} />
                <Text style={{ marginLeft: 10, fontFamily: 'semibold', fontSize: theme.fontDefault }}>
                  {data[mapa].estabelecimentos}
                  {' '}
                  estabelecimentos na rota
                </Text>
              </View>
            </View>
          </View>

          <View style={{ width: '85%', marginTop: 20, marginBottom: 150 }}>
            <Text style={{
              width: '100%',
              textAlign: 'center',
              color: theme.black1,
              fontFamily: 'bold',
              fontSize: theme.fontDefault,
            }}
            >
              Sugestões de parada
            </Text>

            { data[mapa].sugestions.map((station) => (
              <CardEstablishment
                key={station.name}
                style={{ marginTop: 15 }}
                gasStation={station}
                onPress={() => navigation.navigate('Evaluation', { gasStation: station })}
              />
            )) }
          </View>
        </View>
      </ScrollView>
      <View style={{
        width: '100%', position: 'absolute', bottom: 30, alignItems: 'center',
      }}
      >
        <Button
          style={{
            width: '90%',
            height: 60,
          }}
          text="Iniciar viagem"
          textColor={theme.white1}
          backgroundColor={theme.green1}
          onPress={() => openGps(lat, lng)}
        />
      </View>
    </>
  );
};
