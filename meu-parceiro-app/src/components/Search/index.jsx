import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// import theme from '../../theme';

import config from '../../config';
import theme from '../../theme';

export default ({ onLocationSelected = () => {} }) => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <GooglePlacesAutocomplete
      suppressDefaultStyles
      placeholder="Buscar"
      placeholderTextColor="#333"
      onPress={onLocationSelected}
      query={{
        key: config.googleApiKey,
        language: 'pt',
      }}
      textInputProps={{
        onFocus: () => {
          setSearchFocused(true);
        },
        onBlur: () => {
          setSearchFocused(false);
        },
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      listViewDisplayed={searchFocused}
      fetchDetails
      enablePoweredByContainer={false}
      styles={{
        container: {
          marginTop: 10,
          padding: 15,
          borderWidth: 1,
          borderColor: theme.gray2,
          backgroundColor: theme.gray1,
          borderRadius: 8,
        },
        row: {
          paddingTop: 10,
        },
      }}
    />
  );
};
