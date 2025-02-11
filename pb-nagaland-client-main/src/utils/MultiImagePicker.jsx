import {Alert, PermissionsAndroid, Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {openAppSettings, requestPermission} from './utils';

const getImageFromCamera = async () => {
  try {
    const image = await ImagePicker.openCamera({
      width: 100,
      height: 100,
      cropping: true,
      freeStyleCropEnabled: true,
      compressImageQuality: 0.8,
      includeExif: true,
      mediaType: 'photo',
      multiple: true,
      waitAnimationEnd: false,
    });
    return image;
  } catch (err) {
    console.log('ImagePickerCamera Error', err);
    return false;
  }
};
const pickMutlipleImages = async () => {
  try {
    const items = await ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      maxFiles: 4,
      sortOrder: 'asc',
      // includeExif: true,
      // forceJpg: true,
      // Advanced options
      compressImageQuality: 0.8, // Compression quality for the picked images (0 to 1)
      compressVideoPreset: 'MediumQuality', // Compression preset for videos ('HighestQuality', 'MediumQuality', 'LowQuality')
      // Android specific options
      showCropGuidelines: false, // Show guidelines during cropping on Android
      cropGuidelinesOpacity: 0.8, // Crop guidelines opacity on Android
      cropperCircleOverlay: false, // Use a circular crop overlay on Android
      cropperToolbarTitle: 'Crop Image', // Toolbar title for cropping on Android
      freeStyleCropEnabled: true, // Enable free-style cropping on Android
      enableRotationGesture: true, // Enable rotation gesture on Android
    });
    // console.log('pickMutlipleImages', items);
    return items;
  } catch (error) {
    return false;
  }
};

export const GalleryPicker = async (prevImages = [], setImages) => {
  console.log('prev images', prevImages);
  const androidVersion = Platform.Version;
  const storagePermission =
    androidVersion < 33
      ? PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      : PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
  // console.log('androidVersion',androidVersion,'storagePermission',storagePermission);
  const hasPermission = await requestPermission(storagePermission);
  if (hasPermission) {
    try {
      const images = await pickMutlipleImages();
      setImages([...prevImages, ...images]);
      console.log('new images', images);
    } catch (error) {
      console.log('Image picking error:', error);
    }
  } else {
    Alert.alert(
      'Permission Required',
      'This feature requires permission to access Images. Please enable it in your device settings.',
      [
        {
          text: 'Open Settings',
          onPress: async () => {
            await openAppSettings();
          },
        },
        {
          text: 'Cancel',
          style: 'can3cel',
        },
      ],
    );
  }
};

export const CameraPicker = async setImage => {
  const androidVersion = Platform.Version;
  // const storagePermission =
  //   androidVersion < 33
  //     ? PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
  //     : PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
  // console.log('androidVersion',androidVersion,'storagePermission',storagePermission);
  const hasPermission = await requestPermission(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );
  if (hasPermission) {
    try {
      getImageFromCamera()
        .then(async image => {
          setImage(image);
        })
        .catch(error => {});
    } catch (error) {
      console.log('Camera error:', error);
    }
  } else {
    Alert.alert(
      'Permission Required',
      'This feature requires permission to access Images. Please enable it in your device settings.',
      [
        {
          text: 'Open Settings',
          onPress: async () => {
            await openAppSettings();
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );
  }
};

export const checkNotficationPermission = async callback => {
  // const androidVersion = Platform.Version;
  // if (androidVersion >= 33) { }
  try {
    const hasPermission = await requestPermission(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    callback(hasPermission);
  } catch (error) {
    console.log('Error', error);
  }
};
