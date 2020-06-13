import React from 'react';
import { TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import theme from '../../theme';

export default ({ onPress }) => (
  <TouchableOpacity style={{ marginLeft: 20 }} onPress={onPress}>
    <FontAwesomeIcon
      icon={faArrowLeft}
      style={{
        color: theme.white1,
      }}
      size={18}
    />
  </TouchableOpacity>
);
