import React from 'react';
import {
  Text, View, Image, TouchableWithoutFeedback,
} from 'react-native';

import theme from '../../theme';

import play from '../../assets/play.png';
import timeImg from '../../assets/time.png';

export default ({
  title,
  time,
  image,
  style = {},
  onPress = () => {},
}) => (
  <TouchableWithoutFeedback
    onPress={onPress}
  >
    <View
      style={{
        width: '85%',
        height: 170,
        backgroundColor: theme.purple1,
        shadowColor: '#000',
        borderRadius: 7,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        ...style,
      }}
    >
      <View style={{
        overflow: 'hidden',
        borderTopEndRadius: 7,
        borderTopStartRadius: 7,
      }}
      >
        <Image
          source={play}
          style={{
            position: 'absolute',
            left: '43%',
            top: '40%',
            width: 50,
            height: 50,
            zIndex: 100,
          }}
        />
        <Image
          source={image}
          style={{
            width: '100%',
            height: '100%',
          }}
          width="100%"
          height="100%"
        />
      </View>

      <View style={{
        width: '100%',
        height: '43%',
        backgroundColor: theme.white1,
        borderBottomEndRadius: 7,
        borderBottomStartRadius: 7,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      >
        <Text style={{
          color: theme.black1,
          fontFamily: 'bold',
          fontSize: theme.fontDefault,
          width: '100%',
        }}
        >
          {title}
        </Text>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        >
          <Image
            source={timeImg}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text style={{
            fontFamily: 'regular',
            color: theme.black1,
            marginLeft: 4,
            flex: 1,
          }}
          >
            {time}
          </Text>
        </View>

      </View>
    </View>
  </TouchableWithoutFeedback>
);
