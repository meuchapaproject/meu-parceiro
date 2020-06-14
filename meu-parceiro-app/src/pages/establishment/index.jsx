import React from 'react';
import {
  SafeAreaView, ScrollView, View, TextInput, TouchableOpacity,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CardEstablishment from '../../components/CardEstablishment';
import theme from '../../theme';

const commonStyle = {
  marginTop: 15,
};

export default () => (
  <SafeAreaView>
    <ScrollView style={{ backgroundColor: theme.gray1, padding: 30, minHeight: '100%' }}>
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
      <CardEstablishment
        style={commonStyle}
        gasStation={{
          name: 'Posto Alexandria',
          km: 3,
          rating: {
            gas: 3.4, shower: 4.4, food: 4.8, workshop: 2, sleep: 1.4,
          },
        }}
      />
      <CardEstablishment
        style={commonStyle}
        gasStation={{
          name: 'Auto Posto Emcubencia',
          km: 5.6,
          rating: {
            gas: 4.8, shower: 4.4, food: 4.8, workshop: 2, sleep: 5,
          },
        }}
      />
      <CardEstablishment
        style={commonStyle}
        gasStation={{
          name: 'Posto Memorial',
          km: 8.6,
          rating: {
            gas: 4.9, shower: 3.4, food: 4.8, workshop: 4.9, sleep: 4.8,
          },
        }}
      />
      <CardEstablishment
        style={commonStyle}
        gasStation={{
          name: 'Auto Posto Galinus',
          km: 12.3,
          rating: {
            gas: 4.9, shower: 4.4, food: 3.3, workshop: 2.9, sleep: 1.8,
          },
        }}
      />
      <CardEstablishment
        style={commonStyle}
        gasStation={{
          name: 'Posto Marinas',
          km: 15,
          rating: {
            gas: 4.9, shower: 4.4, food: 1.3, workshop: 4.1, sleep: 3.8,
          },
        }}
      />
    </ScrollView>
  </SafeAreaView>
);
