import Toast from 'react-native-toast-message';
import {Snackbar} from 'react-native-paper';
import {
  Platform,
  ToastAndroid,
  PermissionsAndroid,
  Linking,
  Share,
} from 'react-native';
import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  openSettings,
} from 'react-native-permissions';
import {
  BusinessCategory,
  BusinessEntity,
  ComplaintStatus,
  OrderStatus,
  PaymentMode,
  PaymentStatus,
  PricingType,
  StockAdjType,
} from './Status';
// export const showToast = (text1, text2, type = 'success') => {
//   Toast.show({
//     type: type,
//     position: 'top',
//     text1: text1,
//     text2: text2,
//     visibilityTime: 1000,
//   });
// };
export const showToast = (message, duration = ToastAndroid.SHORT) => {
  if (message && typeof message === 'string') {
    ToastAndroid.show(message, duration);
  } else {
    ToastAndroid.show('Something Went Wrong', duration);
  }
};
export const showSnackbar = (
  message,
  duration = 1000,
  action = null,
  onActionPress = null,
) => {
  Snackbar.show({
    text: message,
    duration: duration,
    action: action ? {label: action, onPress: onActionPress} : undefined,
  });
};
export async function requestPermission(permission) {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(permission, {
        title: 'Permission Request',
        message: `We need access to ${permission} for this feature.`,
        buttonPositive: 'OK',
      });
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else if (Platform.OS === 'ios') {
      const status = await check(PERMISSIONS.IOS[permission]);
      if (status === RESULTS.GRANTED) {
        return true;
      } else if (status === RESULTS.DENIED) {
        const requestResult = await request(PERMISSIONS.IOS[permission]);
        return requestResult === RESULTS.GRANTED;
      }
    }
    return false;
  } catch (error) {
    console.error(`Error requesting ${permission} permission:`, error);
    return false;
  }
}

export async function openAppSettings() {
  try {
    if (Platform.OS === 'android') {
      await openSettings();
    } else if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    }
  } catch (error) {
    console.error('Error opening app settings:', error);
  }
}

export const openURL = url => {
  Linking.openURL(url)
    .then(result => {
      if (result) {
        console.log('Opened URL successfully');
      } else {
        console.error('Unable to open URL');
      }
    })
    .catch(error => {
      console.error('Error opening URL:', error);
    });
};
// Object.prototype.areFieldsNotEmpty = function () {
//   return Object.values(this).every(value => value.trim() !== '');
// };
export const validateFields = obj => {
  try {
    const values = Object.values(obj);
    return values.every(value => value.trim() !== '');
  } catch (error) {
    return false;
  }
};

export const share = async (url, message) => {
  try {
    const result = await Share.share({
      message: message,
      url: url,
      title: 'Omnitouch',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
      }
    } else if (result.action === Share.dismissedAction) {
    }
  } catch (error) {
    console.error('Error sharing:', error.message);
  }
};

// FormData.prototype.getValue = function (key) {
//   const formDataObject = formDataToObject(this);
//   return formDataObject[key];
// };
// FormData.prototype.findEntry = function (targetKey) {
//   for (let [key, value] of this.entries()) {
//     if (key === targetKey) {
//       return [key, value];
//     }
//   }
//   return null;
// };
// export const findFormDataEntry = (formData, targetKey) => {
//   for (let [key, value] of formData.entries()) {
//     if (key === targetKey) {
//       return [key, value];
//     }
//   }
//   return null;
// };
// export const findFormDataEntry = (formData, targetKey) => {
//   const parts = formData.getParts();
//   for (let part of parts) {
//     console.log('part', part[0]);
//     if (part[0] === targetKey) {
//       return part;
//     }
//   }
//   return null;
// };
export const getFormValue = (formData, fieldName) => {
  const parts = formData.getParts();
  const field = parts.find(item => item.fieldName === fieldName);
  return field ? field.string : null;
};

export const ParseFloat = (number, digits = 2) => {
  try {
    if (typeof number !== 'number' || isNaN(number)) return 0.0;
    return parseFloat(number.toFixed(digits));
  } catch (err) {
    return 0.0;
  }
};

export const jsonToFormData = object => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(object)) {
    if (value === undefined) {
      continue;
    }
    formData.append(key, value);
  }
  return formData;
};

export const getComplaintStatus = type => {
  let name = '';
  switch (type) {
    case ComplaintStatus.PENDING:
      name = 'Pending';
      break;
    case ComplaintStatus.APPROVED:
      name = 'Approved';
      break;
    case ComplaintStatus.REJECTED:
      name = 'Rejected';
      break;
    default:
  }
  return name;
};
