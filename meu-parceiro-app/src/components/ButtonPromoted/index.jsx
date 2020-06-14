import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import theme from '../../theme';

export default ({
  style = {},
  onPress = () => {},
  text = '',
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      width: 37,
      height: 37,
      borderWidth: 5,
      borderColor: theme.yellow1,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    }}
  >
    {text ? (
      <Text style={{
        fontFamily: 'bold',
        fontSize: theme.fontTitle,
        textAlign: 'center',
        paddingBottom: 3,
      }}
      >
        {text}
      </Text>
    ) : (
      <FontAwesomeIcon
        icon={faStar}
        style={{
          color: theme.yellow1,
        }}
        size={18}
      />
    )}
  </TouchableOpacity>
);
