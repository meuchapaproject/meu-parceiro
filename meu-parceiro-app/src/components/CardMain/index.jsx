import React from 'react';
import { Text, View, Image } from 'react-native';

import ButtonArrow from '../ButtonArrow';

import theme from '../../theme';

export default ({
  title, subtitle, image, imageWidth = 130, imageHeight = 130, styleImage = {}, style = {},
}) => (
  <View style={{
    width: '85%',
    height: 170,
    backgroundColor: theme.purple1,
    borderRadius: 7,
    justifyContent: 'space-between',
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
    <Image
      source={image}
      style={{
        position: 'absolute',
        top: -15,
        right: 0,
        ...styleImage,
      }}
      width={imageWidth}
      height={imageHeight}
    />
    <Text style={{
      color: theme.white1,
      fontFamily: 'bold',
      fontSize: theme.fontTitle,
      width: '60%',
      marginTop: 20,
      marginLeft: 20,
    }}
    >
      {title}
    </Text>
    <View style={{
      width: '100%',
      height: '33%',
      backgroundColor: theme.white1,
      borderRadius: 7,
      flexDirection: 'row',
      alignItems: 'center',
    }}
    >
      <Text style={{
        fontFamily: 'regular',
        color: theme.black1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
      }}
      >
        {subtitle}
      </Text>
      <ButtonArrow
        style={{
          marginRight: 10,
        }}
        isActive
      />
    </View>
  </View>
);
