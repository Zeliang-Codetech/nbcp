import React, {useEffect, useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome6';
import COLORS from '../../styles/colors';
import {Text, View} from 'react-native';
import FONTS from '../../styles/fonts';

const SelectInput = ({
  name,
  value,
  label,
  items = [],
  placeholder = {label: '', value: null},
  onChange = () => {},
}) => {
  const [newItems, setNewItems] = useState(items || []);
  useEffect(() => {
    setNewItems(
      items.map(item => ({
        label: item.name,
        value: item._id,
      })),
    );
  }, [items]);
  return (
    <View>
      <Text style={{...FONTS.label, marginBottom: 5}}>{label}</Text>
      <RNPickerSelect
        items={newItems || []}
        onValueChange={value => {
          onChange(name, value);
        }}
        onUpArrow={() => {}}
        onDownArrow={() => {}}
        value={value}
        // placeholder={placeholder}
        useNativeAndroidPickerStyle={false}
        style={{
          inputAndroidContainer: {},
          inputAndroid: {
            backgroundColor: '#fff',
            borderColor: '#ccc',
            borderRadius: 5,
            elevation: 1,
            padding: 10,
            fontFamily: 'Urbanist-Regular',
            color: COLORS.black,
            fontWeight: '400',
          },
          inputIOS: {},
          iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            right: 12,
          },
          placeholder: {},
        }}
        Icon={() => {
          return <Icon name="chevron-down" size={15} color="#ccc" />;
        }}
      />
    </View>
  );
};

export default SelectInput;
