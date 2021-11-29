import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieAnimationDisplay from './components/LottieAnimationDisplay';
import catAnimation from './assets/animations/sleeping-cat.json';

export default function App() {
  return (
    <View style={styles.container}>
      <LottieAnimationDisplay
        source={catAnimation}
        width={300}
        height={300}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
