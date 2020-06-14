import React, { Component } from 'react';
import {
  View, Text, TextInput, SafeAreaView, Image,
} from 'react-native';

import logo from '../../assets/sms.png';
import theme from '../../theme';

export default class Verification extends Component {
  constructor(props) {
    super(props);
    this.ref = {};
  }

  render() {
    const { navigation, route } = this.props;
    let total = '';
    const { code } = route.params;
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: theme.gray1,
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Image
          source={logo}
          style={{
            width: 130,
            height: 130,
            marginTop: 100,
          }}
        />
        <View style={{
          marginTop: 50,
          width: '80%',
        }}
        >
          <Text style={{
            fontSize: theme.fontTitle,
            fontFamily: 'bold',
            color: theme.black1,
            textAlign: 'center',
          }}
          >
            Digite o código enviado por Whatsapp
          </Text>
          <View style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          >
            <View style={{
              flex: 1,
              borderRadius: 5,
              backgroundColor: theme.white1,
              borderColor: theme.gray2,
              marginHorizontal: 3,
              borderWidth: 1,
              marginBottom: 10,
            }}
            >
              <TextInput
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  fontSize: theme.fontInput,
                }}
                maxLength={1}
                ref={(ref) => { this.ref['1'] = ref; }}
                keyboardType="numeric"
                onChangeText={(value) => {
                  total += value;
                  this.ref['1'].text = value;
                  if (value) this.ref['2'].focus();
                }}
              />
            </View>
            <View style={{
              flex: 1,
              borderRadius: 5,
              backgroundColor: theme.white1,
              borderColor: theme.gray2,
              marginHorizontal: 3,
              borderWidth: 1,
              marginBottom: 10,
            }}
            >
              <TextInput
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  fontSize: theme.fontInput,
                }}
                maxLength={1}
                numberOfLines={1}
                ref={(ref) => { this.ref['2'] = ref; }}
                keyboardType="numeric"
                onChangeText={(value) => {
                  total += value;
                  if (value) this.ref['3'].focus();
                }}
              />
            </View>
            <View style={{
              flex: 1,
              borderRadius: 5,
              backgroundColor: theme.white1,
              borderColor: theme.gray2,
              marginHorizontal: 3,
              borderWidth: 1,
              marginBottom: 10,
            }}
            >
              <TextInput
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  fontSize: theme.fontInput,
                }}
                maxLength={1}
                numberOfLines={1}
                ref={(ref) => { this.ref['3'] = ref; }}
                keyboardType="numeric"
                onChangeText={(value) => {
                  total += value;
                  if (value) this.ref['4'].focus();
                }}
              />
            </View>

            <Text style={{
              fontFamily: 'bold',
              fontSize: theme.fontDefault,
              color: theme.black1,
              paddingHorizontal: 5,
            }}
            >
              -
            </Text>
            <View style={{
              flex: 1,
              borderRadius: 5,
              backgroundColor: theme.white1,
              borderColor: theme.gray2,
              marginHorizontal: 3,
              borderWidth: 1,
              marginBottom: 10,
            }}
            >
              <TextInput
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  fontSize: theme.fontInput,
                }}
                maxLength={1}
                numberOfLines={1}
                ref={(ref) => { this.ref['4'] = ref; }}
                keyboardType="numeric"
                onChangeText={(value) => {
                  total += value;
                  if (value) this.ref['5'].focus();
                }}
              />
            </View>
            <View style={{
              flex: 1,
              borderRadius: 5,
              backgroundColor: theme.white1,
              borderColor: theme.gray2,
              marginHorizontal: 3,
              borderWidth: 1,
              marginBottom: 10,
            }}
            >
              <TextInput
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  fontSize: theme.fontInput,
                }}
                maxLength={1}
                numberOfLines={1}
                ref={(ref) => { this.ref['5'] = ref; }}
                keyboardType="numeric"
                onChangeText={(value) => {
                  total += value;
                  if (value) this.ref['6'].focus();
                }}
              />
            </View>
            <View style={{
              flex: 1,
              borderRadius: 5,
              backgroundColor: theme.white1,
              borderColor: theme.gray2,
              marginHorizontal: 3,
              borderWidth: 1,
              marginBottom: 10,
            }}
            >
              <TextInput
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  fontSize: theme.fontInput,
                  color: theme.black,
                }}
                maxLength={1}
                numberOfLines={1}
                ref={(ref) => { this.ref['6'] = ref; }}
                keyboardType="numeric"
                onChangeText={(value) => {
                  total += value;
                  if (total === String(code)) {
                    navigation.navigate('Home');
                  } else {
                    total = '';
                    this.ref['1'].text = '';
                    this.ref['2'].text = '';
                    this.ref['3'].text = '';
                    this.ref['4'].text = '';
                    this.ref['5'].text = '';
                    this.ref['6'].text = '';
                    this.ref['1'].focus();
                  }
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
