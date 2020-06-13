import React from 'react';
import {
  SafeAreaView, ScrollView, View, Text,
} from 'react-native';

import CardMain from '../../components/CardMain';

import theme from '../../theme';

import estabelecimento from '../../assets/estabelecimento.png';
import custo from '../../assets/custo.png';
import saude from '../../assets/saude.png';
import trucker from '../../assets/trucker-driver.jpg';

import CardContact from '../../components/CardContact';

const commonStyleCardMain = {
  marginTop: 30,
};

const commonStyleCardContact = {
  marginTop: 15,
};

export default ({ navigation }) => (
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
      <View style={{ width: '100%', alignItems: 'center' }}>
        <CardMain
          style={commonStyleCardMain}
          title="Buscar Estabelecimentos"
          subtitle="Postos, restaurantes, paradas, hotéis, oficinas entre outros"
          image={estabelecimento}
          onPress={() => navigation.navigate('Establishment')}
        />
        <CardMain
          style={commonStyleCardMain}
          title="Mapear custo de viagem"
          subtitle="Pedágios, combustível e roteiros para sua viagem"
          image={custo}
        />
        <CardMain
          style={commonStyleCardMain}
          imageWidth={104}
          imageHeight={180}
          styleImage={{
            right: 20,
          }}
          title="Exercícios e relaxamento"
          subtitle="Vídeos de exercícios e alongamentos para evitar dores nas costas e pernas"
          image={saude}
        />
      </View>
      <View style={{ width: '100%', alignItems: 'center', marginTop: 40 }}>
        <View style={{ height: 6, width: '13%', backgroundColor: theme.black1 }} />
      </View>
      <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontFamily: 'bold', fontSize: theme.fontDefault }}>Amigos próximos</Text>
        <CardContact image={trucker} name="João Pedro" km={10} minutes={5} style={commonStyleCardContact} phone="+5515998561991" />
        <CardContact image={trucker} name="Breno Andrade" km={10} minutes={5} style={commonStyleCardContact} phone="+5514996364520" />
        <CardContact image={trucker} name="José Ricardo" km={10} minutes={5} style={commonStyleCardContact} phone="+5515998561991" />
      </View>
    </ScrollView>
  </SafeAreaView>
);
