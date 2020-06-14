/* eslint-disable no-mixed-operators */
/* eslint-disable no-bitwise */
/* eslint-disable no-cond-assign */
// eslint-disable-next-line import/prefer-default-export
import { Linking } from 'react-native';

import { dispatch } from './store';
import types from './store/types';

export const encodeBase64 = (input) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  const str = input;
  let output = '';

  for (let block = 0, charCode, i = 0, map = chars;
    str.charAt(i | 0) || (map = '=', i % 1);
    output += map.charAt(63 & block >> 8 - i % 1 * 8)) {
    charCode = str.charCodeAt(i += 3 / 4);

    if (charCode > 0xFF) {
      console.log("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
    }

    block = block << 8 | charCode;
  }

  return output;
};

export const openGps = () => {
  dispatch({ type: types.SET_TRIP });
  const oring = 'https://www.google.com/maps/dir/S%C3%A3o+Paulo,+State+of+S%C3%A3o+Paulo/Porto+Alegre,+RS/@-26.7576892,-51.172329,7z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x94ce448183a461d1:0x9ba94b08ff335bae!2m2!1d-46.6333094!2d-23.5505199!1m5!1m1!1s0x95199cd2566acb1d:0x603111a89f87e91f!2m2!1d-51.2176584!2d-30.0346471';
  Linking.openURL(oring);
};

export const openGps2 = () => {
  dispatch({ type: types.SET_TRIP });
  const origin = 'https://www.google.com/maps/dir/Roseira,+State+of+S%C3%A3o+Paulo/Rod.+Pres.+Dutra+-+Pavuna,+Rio+de+Janeiro+-+RJ/@-22.8612742,-45.3165032,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x94cce7fd61ae55a5:0xfbc680ce82339ffd!2m2!1d-45.3089952!2d-22.9007966!1m5!1m1!1s0x9eac47d15d629f:0x1581178fbc401586!2m2!1d-45.1820474!2d-22.8179006';
  Linking.openURL(origin);
};
