import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const LottieAnimationDisplay = ({ source, width, height }) => {
  return (
    <View style={{width: width, height: height}}>
      <LottieView source={source} loop autoPlay/>
    </View>
  )
}

export default LottieAnimationDisplay;