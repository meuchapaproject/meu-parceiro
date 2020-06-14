import React from 'react';
import { WebView } from 'react-native-webview';

export default ({
  uri,
  ...rest
}) => (
  <WebView
    style={{ flex: 1 }}
    {...rest}
    javaScriptEnabled
    source={{ uri }}
  />
);
