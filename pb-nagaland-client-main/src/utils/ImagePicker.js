import {Alert, PermissionsAndroid, Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import React, {useState} from 'react';
// import {heightToDp, widthToDp} from '../responsive/responsive';
import {openAppSettings, requestPermission} from './utils';

const getImageFromCamera = async () => {
  try {
    const image = await ImagePicker.openCamera({
      width: 100,
      height: 100,
      cropping: true,
      freeStyleCropEnabled: true,
    });
    return image;
  } catch (err) {
    console.log('ImagePickerCamera Error', err);
    return false;
  }
};
const getImageFromGallery = async ({type = 'single'}) => {
  if (type === 'single') {
    let imageObj = null;
    try {
      const image = await ImagePicker.openPicker({
        width: 100,
        height: 100,
        cropping: true,
        freeStyleCropEnabled: true,
      });
      imageObj = image;
    } catch (error) {
      console.log('Image picking error:', error);
      return false;
    }
    return imageObj;
  } else if (type === 'multiple') {
    let images = null;
    await ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      maxFiles: 4,
      sortOrder: 'asc',
      includeExif: true,
      forceJpg: true,
    })
      .then(i => {
        images = i;
      })
      .catch(e => {
        return false;
      });
    return images;
  }
};

export const GalleryPicker = async setImage => {
  const androidVersion = Platform.Version;
  const storagePermission =
    androidVersion < 33
      ? PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      : PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
  // console.log('androidVersion',androidVersion,'storagePermission',storagePermission);
  const hasPermission = await requestPermission(storagePermission);
  if (hasPermission) {
    try {
      getImageFromGallery({type: 'single'})
        .then(async image => {
          setImage(image);
        })
        .catch(error => {});
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

// export const ImagePicker = async setImage => {
//   try {
//     if (Platform.OS === 'android') {
//       const androidVersion = Platform.Version;

//       if (androidVersion >= 23) {
//         const hasPermission = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//           {
//             title: 'Permission Required',
//             message: 'This feature requires permission to access Images.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           }
//         );
//         if (hasPermission === PermissionsAndroid.RESULTS.GRANTED) {
//           imagePickerGallery({ type: 'single' })
//             .then(async image => {
//               setImage(image);
//             })
//             .catch(error => {
//               console.error('Image picking error:', error);
//             });
//         } else {
//           Alert.alert(
//             'Permission Required',
//             'This feature requires permission to access Images. Please enable it in your device settings.',
//             [
//               {
//                 text: 'Open Settings',
//                 onPress: async () => {
//                   await openAppSettings();
//                 },
//               },
//               {
//                 text: 'Cancel',
//                 style: 'cancel',
//               },
//             ]
//           );
//         }
//       } else {
//         // Handle permissions for Android versions below 23 (no runtime permissions required)
//         imagePickerGallery({ type: 'single' })
//           .then(async image => {
//             setImage(image);
//           })
//           .catch(error => {
//             console.error('Image picking error:', error);
//           });
//       }
//     } else {
//       // Handle image picking for non-Android platforms (e.g., iOS)
//       // You may need a different approach for iOS
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
