import React from 'react';
import {
  ScrollView, View, Image, Text,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

import image from '../../assets/iguin.png';

import theme from '../../theme';

import data from './data';

export default () => (
  <ScrollView>
    <View style={{
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 25,
    }}
    >
      <View style={{
        flexDirection: 'row',
        backgroundColor: theme.gray3,
        width: '85%',
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: theme.gray2,
      }}
      >
        <View style={{ marginRight: 15, padding: 10 }}>
          <Image
            source={image}
            style={{ borderWidth: 3, borderColor: theme.white1 }}
            width={50}
            height={50}
            borderRadius={30}
          />
        </View>
        <View>
          <Text style={{ fontFamily: 'bold', fontSize: theme.fontTitle, color: theme.black1 }}>11 95559 3356</Text>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faTrophy} style={{ color: theme.black1 }} />
            <Text style={{
              fontFamily: 'regular', fontSize: theme.fontInfo, color: theme.black1, marginLeft: 5,
            }}
            >
              3456 pts
            </Text>
          </View>
        </View>
      </View>
    </View>
    <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
      <View style={{ height: 6, width: '13%', backgroundColor: theme.black1 }} />
    </View>
    <View style={{ width: '100%', marginBottom: 20, marginTop: 15 }}>
      <Text style={{
        flex: 1,
        textAlign: 'center',
        color: theme.black1,
        fontFamily: 'bold',
        fontSize: theme.fontDefault,
      }}
      >
        Extrato de pontos
      </Text>
    </View>
    {data.map((item) => (
      <View key={item.type + Math.random()} style={{ width: '100%', alignItems: 'center', marginBottom: 15 }}>
        <View style={{
          width: '85%',
          padding: 15,
          backgroundColor: theme.white1,
          borderRadius: 7,
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
          <Text style={{ fontFamily: 'bold', fontSize: theme.fontDefault, color: theme.black1 }}>{item.type}</Text>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faTrophy} style={{ color: theme.black1 }} />
            <Text style={{
              fontFamily: 'regular', fontSize: theme.fontInfo, color: theme.black1, marginLeft: 5,
            }}
            >
              {item.value}
              {' '}
              pts
            </Text>
          </View>
        </View>
      </View>
    ))}
  </ScrollView>
);
