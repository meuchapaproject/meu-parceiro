/* eslint-disable global-require */
/* eslint-disable camelcase */
import 'react-native-gesture-handler';

import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { decode, encode } from 'base-64';
import LoginPage from './src/pages/login';
import HomePage from './src/pages/home';
import EstablishmentPage from './src/pages/establishment';
import VerificationPage from './src/pages/verification';

import theme from './src/theme';
import ButtonBack from './src/components/ButtonBack';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

const fetchFonts = () => Font.loadAsync({
  bold: require('./src/assets/fonts/Quicksand-Bold.ttf'),
  light: require('./src/assets/fonts/Quicksand-Light.ttf'),
  medium: require('./src/assets/fonts/Quicksand-Medium.ttf'),
  regular: require('./src/assets/fonts/Quicksand-Regular.ttf'),
  semibold: require('./src/assets/fonts/Quicksand-SemiBold.ttf'),
});

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginPage} />
        <Stack.Screen options={{ headerShown: false }} name="Verification" component={VerificationPage} />
        <Stack.Screen
          options={{
            title: 'Meu chapa',
            headerLeft: null,
            headerStyle: {
              backgroundColor: theme.purple1,
            },
            headerTitleStyle: {
              fontFamily: 'bold',
              color: theme.white1,
              fontSize: theme.fontTitle,
            },
          }}
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          options={{
            title: 'Buscar estabelecimentos',
            headerBackTitleVisible: false,
            // eslint-disable-next-line react/jsx-props-no-spreading
            headerLeft: ButtonBack,
            headerStyle: {
              backgroundColor: theme.purple1,
            },
            headerTitleStyle: {
              fontFamily: 'bold',
              color: theme.white1,
              fontSize: theme.fontTitle,
            },
          }}
          name="Establishment"
          component={EstablishmentPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
