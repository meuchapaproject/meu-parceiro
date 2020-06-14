import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import theme from '../../theme';

export default ({
  inverted = false,
  isActive,
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
      borderColor: isActive ? theme.purple1 : theme.gray2,
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
        icon={inverted ? faArrowLeft : faArrowRight}
        style={{
          color: isActive ? theme.black1 : theme.gray2,
        }}
        size={18}
      />
    )}
  </TouchableOpacity>
);
