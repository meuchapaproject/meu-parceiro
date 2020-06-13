import React from 'react';
import {
  View, TouchableOpacity, Image, Text,
} from 'react-native';

// import ButtonArrow from '../ButtonArrow';

import whatsappLogo from '../../assets/whatsapp.png';

import theme from '../../theme';

export default ({
  name,
  image,
  km,
  minutes,
  style,
  // whatsapp,
}) => {
  const message = `${km}km distância a ${minutes} minutos atrás`;
  return (
    <TouchableOpacity style={{
      width: '85%',
      height: 70,
      backgroundColor: theme.white1,
      borderRadius: 7,
      paddingHorizontal: 10,
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
      flexDirection: 'row',
      ...style,
    }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={image}
          style={{}}
          width={50}
          height={50}
          borderRadius={30}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontFamily: 'semibold', fontSize: theme.fontDefault }}>{name}</Text>
          <Text style={{ fontFamily: 'regular', fontSize: theme.fontInfo }}>{message}</Text>
        </View>
      </View>
      <Image
        source={whatsappLogo}
        style={{}}
        width={30}
        height={30}
      />
    </TouchableOpacity>
  );
};
