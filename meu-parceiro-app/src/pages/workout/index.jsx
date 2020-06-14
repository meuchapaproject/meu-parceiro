import React, { useState } from 'react';
import {
  SafeAreaView, ScrollView, View, Text,
} from 'react-native';
import VideoPlayer from '../../components/VideoPlayer';
import CardWorkout from '../../components/CardWorkout';

import theme from '../../theme';

import pescocoOmbros from '../../assets/pescoco-ombros.png';
import pernas from '../../assets/pernas.png';
import bracos from '../../assets/bracos.png';

const commonStyleCardMain = {
  marginTop: 30,
};

export default () => {
  const [state, setState] = useState({
    uri: '',
  });

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: theme.gray1,
    }}
    >
      <ScrollView
        style={{
          flex: 1,
          alignContent: 'center',
          flexDirection: 'column',
        }}
      >
        <View style={{
          width: '100%',
          alignItems: 'center',
          paddingBottom: 100,
        }}
        >

          {state.uri !== '' && (
          <VideoPlayer
            uri={state.uri}
          />
          )}
          <CardWorkout
            style={commonStyleCardMain}
            title="Alongamento de pescoço e ombros"
            time="8 minutos"
            image={pescocoOmbros}
            onPress={() => setState({
              uri: 'https://www.youtube.com/watch?v=7nHw6wUCWGc',
            })}
          />
          <CardWorkout
            style={{ marginTop: 95 }}
            title="Alongamento de pernas"
            time="5 minutos"
            image={pernas}
            onPress={() => setState({
              uri: 'https://www.youtube.com/watch?v=ZiSHSm-KUUM',
            })}
          />
          <CardWorkout
            style={{ marginTop: 95 }}
            onPress={() => setState({
              uri: 'https://www.youtube.com/watch?v=JUWB9ianwWk',
            })}
            title="Alongamento de braços"
            time="3 minutos"
            image={bracos}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
