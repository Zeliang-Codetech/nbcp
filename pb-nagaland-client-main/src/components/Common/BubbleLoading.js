import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';
import Bubble from './Bubble';
const BubbleLoading = () => {
  const bubbles = Array.from({length: 3}); // Number of bubbles

  return (
    <View style={styles.container}>
      {bubbles.map((_, index) => (
        <Bubble key={index} index={index} totalBubbles={bubbles.length} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BubbleLoading;
