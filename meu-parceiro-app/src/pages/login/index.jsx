import React, { useState } from 'react';
import {
  View, Text, TextInput, SafeAreaView, TouchableOpacity, Image,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight, faLock } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import qs from 'query-string';
import ButtonArrow from '../../components/ButtonArrow';

import logo from '../../assets/logo.png';
import theme from '../../theme';

import { dispatch } from '../../store';
import types from '../../store/types';

const sendMessage = (phone) => {
  const min = 100000;
  const max = 900000;
  const code = Math.floor(min + Math.random() * (max));
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: 'ACec722a092d334ff283c69fa8f8514cff',
      password: '6b358bbaf734b9b45bdf65b7407c91fd',
    },
  };
  const requestBody = {
    From: 'whatsapp:+14155238886',
    Body: `Seu Código para Acessar o Meu Chapa é ${code}`,
    To: `whatsapp:+55${phone}`,
  };
  const url = 'https://api.twilio.com/2010-04-01/Accounts/ACec722a092d334ff283c69fa8f8514cff/Messages.json';
  axios.post(url, qs.stringify(requestBody), config);
  return code;
};

export default ({ navigation }) => {
  const [number, setNumber] = useState('');
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: theme.gray1,
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
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
              flex: 1,
            }}
            keyboardType="numeric"
            onChangeText={setNumber}
            maxLength={11}
            numberOfLines={1}
          />
          <ButtonArrow
            onPress={() => {
              dispatch({ type: types.SET_PHONE, payload: number });
              const code = sendMessage(number);
              navigation.navigate('Verification', { code });
            }}
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
