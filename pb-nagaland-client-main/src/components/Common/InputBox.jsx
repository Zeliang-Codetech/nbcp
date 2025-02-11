import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';
import {FONT_FAMILY} from '../../styles/fonts';
const InputBox = ({
  style,
  value,
  placeholder,
  mode = 'outlined',
  onChangeText,
  onBlur,
  error,
  label,
  maxLength,
  editable,
  theme,
  outlineColor = COLORS.border,
  keyboardType,
  multiline = false,
  numberOfLines,
  secureTextEntry = false,
}) => {
  return (
    <>
      <TextInput
        label={label}
        style={{
          ...styles.input,
          ...style,
        }}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        mode={mode}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid={'rgba(0,0,0,0)'}
        maxLength={maxLength}
        editable={editable}
        theme={theme}
        outlineColor={outlineColor}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      <Text style={styles.error}>{error}</Text>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.light_white,
    fontSize: 13.5,
  },
  error: {
    color: COLORS.red,
    ...FONTS.h6,
  },
});
export default InputBox;
