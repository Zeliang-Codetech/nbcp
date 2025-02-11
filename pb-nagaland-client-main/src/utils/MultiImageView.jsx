import {Alert, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ActivityIndicator, Text} from 'react-native-paper';
import COLORS from '../styles/colors';
import {IMAGE_URL} from './../utils/constants';
import IMAGES from './../assets/Images';
import {showToast} from './utils';
const MultiImageView = ({onPress, images, setImages}) => {
  const handleRemove = imagePath => {
    const newImages = images?.filter(image => image.path != imagePath);
    setImages(newImages);
  };
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        {images && images?.length > 0 ? (
          <>
            {images.map(image => (
              <View
                style={{
                  padding: 6,
                  marginEnd: 10,
                  borderWidth: 1,
                  borderColor: COLORS.light_gray,
                  borderStyle: 'dashed',
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  height: 100,
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{uri: image.path}}
                  style={{
                    height: 80,
                    width: 80,
                  }}
                  resizeMode="cover"
                />
                <RemoveView
                  onPress={() => {
                    handleRemove(image.path);
                  }}
                />
              </View>
            ))}
          </>
        ) : (
          <></>
        )}
        <DefaultView onPress={onPress} />
      </View>
    </ScrollView>
  );
};

const RemoveView = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: -1,
        right: -1,
        borderRadius: 50,
        padding: 0,
        backgroundColor: COLORS.white,
        elevation: 5,
      }}>
      <AntDesign
        name="closecircle"
        size={22}
        color={COLORS.red}
        onPress={onPress}
      />
    </TouchableOpacity>
  );
};
const DefaultView = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 100,
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderStyle: 'dashed',
          borderColor: COLORS.light_gray,
          backgroundColor: '#f7f8fd',
          borderRadius: 5,
        }}>
        <Feather name="plus" size={30} color={COLORS.gray} />
      </View>
    </TouchableOpacity>
  );
};
export default MultiImageView;
