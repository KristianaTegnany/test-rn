import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from 'themes/themes';

export default function Loader() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={colors?.gray} />
    </View>
  );
}
