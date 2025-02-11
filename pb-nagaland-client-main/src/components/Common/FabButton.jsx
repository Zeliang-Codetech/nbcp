import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {FAB} from 'react-native-paper';
import COLORS from '../../styles/colors';
import {FONT_FAMILY} from '../../styles/fonts';

const AnimatedFabButton = ({
  style,
  label,
  icon = 'plus',
  onPress,
  color = 'white',
  scrollY,
}) => {
  return (
    <Animated.View
      style={[
        {alignItems: 'center'},
        {
          opacity: scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [1, 0],
            extrapolate: 'clamp',
          }),
        },
      ]}>
      <View style={{alignItems: 'center'}}>
        <FAB
          style={{...styles.fab, ...style}}
          icon={icon}
          label={label}
          small
          onPress={onPress}
          color={color}
        />
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    backgroundColor: COLORS.primary,
    bottom: 0,
    borderRadius: 50,
    minWidth: 150,
    fontFamily: FONT_FAMILY.URBANIST_REGULAR,
  },
});
export default AnimatedFabButton;
