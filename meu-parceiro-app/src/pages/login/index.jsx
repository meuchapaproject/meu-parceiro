import React, { useState } from 'react';
import {
  View, Text, TextInput, SafeAreaView, TouchableOpacity, Image,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight, faLock } from '@fortawesome/free-solid-svg-icons';

import ButtonArrow from '../../components/ButtonArrow';

import logo from '../../assets/logo.png';
import theme from '../../theme';

import { dispatch } from '../../store';
import types from '../../store/types';

export default () => {
  const [number, setNumber] = useState('');
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: theme.gray1,
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <TouchableOpacity style={{
        position: 'absolute',
        top: 50,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      >
        <Text style={{
          fontFamily: 'bold',
          fontSize: theme.fontDefault,
          color: theme.black1,
        }}
        >
          Pular
        </Text>
        <FontAwesomeIcon
          icon={faAngleRight}
          style={{ height: 18 }}
        />
      </TouchableOpacity>
      <Image
        source={logo}
        style={{
          width: 130,
          height: 130,
          marginTop: 100,
        }}
      />
      <View style={{
        marginTop: 50,
        width: '80%',
      }}
      >
        <Text style={{
          fontSize: theme.fontTitle,
          fontFamily: 'bold',
          color: theme.black1,
          textAlign: 'center',
        }}
        >
          Entre com seu Whatsapp
        </Text>
        <View style={{
          marginTop: 20,
          backgroundColor: theme.white1,
          borderColor: theme.gray2,
          borderWidth: 1,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        >
          <TextInput
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              fontSize: theme.fontInput,
            }}
            onChangeText={setNumber}
          />
          <ButtonArrow
            onPress={() => dispatch({ type: types.SET_PHONE, payload: number })}
            style={{ margin: 10 }}
            isActive={number !== ''}
          />
        </View>
        <View style={{
          marginTop: 30,
          backgroundColor: theme.gray3,
          borderColor: theme.gray2,
          borderWidth: 1,
          alignItems: 'center',
          borderRadius: 5,
        }}
        >
          <FontAwesomeIcon
            icon={faLock}
            style={{ marginTop: 20, color: theme.black1 }}
            size={22}
          />
          <Text style={{
            margin: 20,
            fontFamily: 'regular',
            fontSize: theme.fontInfo,
            textAlign: 'center',
          }}
          >
            Fique tranquilo, esse é um ambiente seguro
            e seus dados estão protegidos conosco.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
