import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const PopupMenuExample = ({adapterPosition, onSelectedMenu, item}) => {
  const showPopupMenu = () => {
    return (
      <Menu>
        <MenuTrigger>
          <Text>Show Menu</Text>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption
            onSelect={() => onSelectedMenu(adapterPosition, 'ADD', item.uom)}>
            <Text>Add Stock</Text>
          </MenuOption>
          <MenuOption
            onSelect={() =>
              onSelectedMenu(adapterPosition, 'REDUCE', item.uom)
            }>
            <Text>Reduce Stock</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  };

  return <View>{showPopupMenu()}</View>;
};

export default PopupMenuExample;
