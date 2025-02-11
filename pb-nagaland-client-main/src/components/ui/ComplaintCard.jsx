import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import COLORS from './../../styles/colors';
import IMAGES from './../../assets/Images';
import FONTS from '../../styles/fonts';
import {Switch, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Config from 'react-native-config';
import {CompliantStatus} from '../../../../utils/Status';
import {getComplaintStatus} from '../../utils/utils';
const ComplaintCard = ({onPress, data}) => {
  console.log('ComplaintCard', data);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: COLORS.border,
        backgroundColor: COLORS.white,
        borderRadius: 5,
      }}>
      <View style={{elevation: 0, borderRadius: 5}}>
        <Image
          source={
            data?.image
              ? {uri: Config.IMAGE_URL + '/' + data?.image}
              : IMAGES.placeholder
          }
          style={{
            height: 70,
            width: 70,
          }}
          borderRadius={10}
          defaultSource={IMAGES.placeholder}
          onError={() => {}}
        />
      </View>
      <View style={{flex: 1}}>
        <Text numberOfLines={1} style={{...FONTS.h5, color: COLORS.gray}}>
          {data?.category_name}
        </Text>
        <Text numberOfLines={1} style={{...FONTS.h5, color: COLORS.gray}}>
          {data?.city_name}
        </Text>
        <Text numberOfLines={1} style={{...FONTS.h5, color: COLORS.gray}}>
          Status : {getComplaintStatus(data?.status)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ComplaintCard;
