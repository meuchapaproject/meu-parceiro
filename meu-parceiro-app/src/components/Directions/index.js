import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

import config from '../../config';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey={config.googleApiKey}
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
