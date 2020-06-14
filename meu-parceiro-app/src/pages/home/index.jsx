import React from 'react';
import {
  SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image,
} from 'react-native';

import CardMain from '../../components/CardMain';
import CardContact from '../../components/CardContact';
import CardCurrentTrip from '../../components/CardCurrentTrip';

import theme from '../../theme';

import estabelecimento from '../../assets/estabelecimento.png';
import custo from '../../assets/custo.png';
import saude from '../../assets/saude.png';
import trucker from '../../assets/trucker-driver.jpg';
import image from '../../assets/iguin.png';
import brenin from '../../assets/brenin.png';
import crossfit from '../../assets/crossfit.png';

import { useGlobalState } from '../../store';

const commonStyleCardMain = {
  marginTop: 30,
};

const commonStyleCardContact = {
  marginTop: 15,
};

export default ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={{ marginRight: 15, marginBottom: 5 }}>
          <Image
            source={image}
            style={{ borderWidth: 3, borderColor: theme.white1 }}
            width={50}
            height={50}
            borderRadius={30}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const [currentTrip] = useGlobalState('trip');

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
        { currentTrip && (
        <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
          <CardCurrentTrip />
        </View>
        ) }
        <View style={{ width: '100%', alignItems: 'center', marginTop: currentTrip ? 30 : 20 }}>
          <Text style={{ fontFamily: 'bold', fontSize: theme.fontDefault, color: theme.black1 }}>Amigos próximos</Text>
          <CardContact image={crossfit} name="João Pedro" km={4} minutes={8} style={commonStyleCardContact} phone="+5515998561991" />
          <CardContact image={brenin} name="Breno Andrade" km={13} minutes={3} style={commonStyleCardContact} phone="+5514996364520" />
          <CardContact image={trucker} name="José Ricardo" km={19.5} minutes={5} style={commonStyleCardContact} phone="+5515998561991" />
        </View>
        <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
          <Text style={{
            fontFamily: 'bold', fontSize: theme.fontDefault, color: theme.black1, marginBottom: -15,
          }}
          >
            Serviços
          </Text>
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
            onPress={() => navigation.navigate('Trip')}
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
            onPress={() => navigation.navigate('Workout')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
