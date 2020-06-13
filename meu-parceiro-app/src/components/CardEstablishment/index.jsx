import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import ButtonArrow from '../ButtonArrow';
import theme from '../../theme';

export default ({
  gasStation: {
    name,
    km,
    // rating: {
    // gas = 5,
    // shower = 5,
    // food = 5,
    // workshop = 5,
    // sleep = 5,
    // },
  },
  style = {},
}) => {
  const distance = `${km}km distância`;
  return (
    <TouchableOpacity
      style={{
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
      <View>
        <View>
          <Text>{name}</Text>
          <View>
            <Text>Stars</Text>
            <Text>{distance}</Text>
          </View>
        </View>
        <ButtonArrow
          style={{
            marginRight: 10,
          }}
          isActive
          onPress={() => {}}
        />
      </View>
      <View>
        <Text>Notas</Text>
      </View>
    </TouchableOpacity>
  );
};
