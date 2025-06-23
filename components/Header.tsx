import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
  },
});
