import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import theme from '../../theme';

export default ({
  onPress, text, textColor, backgroundColor, style = {},
}) => (
  <TouchableOpacity
    style={{
      backgroundColor,
      width: 100,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    }}
    onPress={onPress}
  >
    <Text style={{
      color: textColor,
      fontFamily: 'bold',
      fontSize: theme.fontTitle,
    }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);
