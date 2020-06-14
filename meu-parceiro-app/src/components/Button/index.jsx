import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import theme from '../../theme';

export default ({
  onPress, text, textColor, backgroundColor, style = {}, icon,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor,
      width: 100,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: icon ? 'space-around' : 'center',
      flexDirection: 'row',
      ...style,
    }}
    onPress={onPress}
  >
    { !!icon && <FontAwesomeIcon icon={icon} size={23} color={textColor} /> }
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
