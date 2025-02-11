import {Alert, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ActivityIndicator, Text} from 'react-native-paper';
import COLORS from '../../styles/colors';
import {CameraPicker, GalleryPicker} from '../../utils/ImagePicker';
import {IMAGE_URL} from '../../utils/constants';
import IMAGES from '../../assets/Images';
import FONTS from '../../styles/fonts';
const ImagePickerCard = ({
  url,
  onPress,
  image,
  label,
  style = {},
  loading = false,
  onClose,
  setImage,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        Alert.alert(
          'Choose an Option',
          'Do you want to open the camera or the gallery?',
          [
            {
              text: 'Gallery',
              onPress: () => GalleryPicker(setImage),
              style: 'default',
            },
            {
              text: 'Camera',
              onPress: () => CameraPicker(setImage),
            },
          ],
          {
            cancelable: true,
          },
        )
      }
      style={{
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: COLORS.light_gray,
        backgroundColor: '#f7f8fd',
        borderRadius: 5,
        ...style,
      }}>
      {image ? (
        <>
          <Image
            source={{uri: image.path}}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: -10,
              right: -10,
              borderRadius: 50,
              padding: 5,
              backgroundColor: COLORS.white,
            }}
            onPress={() => {}}>
            <AntDesign
              name="closecircle"
              size={22}
              color={COLORS.red}
              onPress={() => onClose()}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          {url ? (
            <Image
              source={{uri: IMAGE_URL + url}}
              style={{
                height: '100%',
                width: '100%',
              }}
              defaultSource={IMAGES.logo_with_tagline}
              onError={() => {}}
            />
          ) : (
            <Feather name="plus" size={25} color={COLORS.gray} />
          )}
          <Text style={{...FONTS.h6}}>{label}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ImagePickerCard;
