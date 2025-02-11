import {StyleSheet} from 'react-native';
const Bubble = ({index, totalBubbles}) => {
  const progress = useSharedValue(0);
  const inputRange = [0, 1];

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, inputRange, [1, 1.5], 'clamp');
    const opacity = interpolate(progress.value, inputRange, [1, 0], 'clamp');

    return {
      transform: [{scale}],
      opacity,
    };
  });

  React.useEffect(() => {
    progress.value = withRepeat(
      withSpring(1, {damping: 2, stiffness: 80}),
      -1,
      false,
    );
  }, []);

  const angle = (360 / totalBubbles) * index;

  return (
    <Animated.View style={[styles.bubble, animatedStyle]}>
      <Svg width={60} height={60}>
        <Circle
          cx={30}
          cy={30}
          r={10}
          fill="#3498db"
          transform={`rotate(${angle} 30 30)`}
        />
      </Svg>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
  },
});

export default Bubble;
