import React from 'react';
import {
  SafeAreaView, ScrollView, View, TextInput, TouchableOpacity,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CardEstablishment from '../../components/CardEstablishment';
import theme from '../../theme';

import data from './data';

const commonStyle = {
  marginTop: 15,
};

export default ({ navigation }) => (
  <SafeAreaView>
    <ScrollView style={{ backgroundColor: theme.gray1, padding: 20, minHeight: '100%' }}>
      <View style={{
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
          placeholder="Buscar estabelecimento"
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            fontSize: theme.fontInput,
            flex: 1,
          }}
        />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: 37,
            height: 37,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              color: theme.black1,
            }}
            size={18}
          />
        </TouchableOpacity>
      </View>
      { data.map((station) => (
        <CardEstablishment
          style={commonStyle}
          gasStation={station}
          onPress={() => navigation.navigate('Evaluation', { gasStation: station })}
        />
      )) }
    </ScrollView>
  </SafeAreaView>
);
