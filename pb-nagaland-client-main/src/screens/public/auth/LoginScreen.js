import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import InputBox from '../../../components/Common/InputBox';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import COLORS from '../../../styles/colors';
import {Button} from 'react-native-paper';
import {
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
} from '../../../store/apis/authApi';
import FONTS from '../../../styles/fonts';
import {showToast} from '../../../utils/utils';
import {useNavigation} from '@react-navigation/core';
import NavigationStrings from '../../../navigations/NavigationStrings';
import {
  setLoggedIn,
  setAccessToken,
  setRefreshToken,
  setUser,
} from '../../../store/slices/appSlice';
import {useDispatch} from 'react-redux';
const validationSchema = yup.object().shape({
  phone: yup
    .number()
    .required('Phone is required')
    // .matches(/^\d{10}$/, 'Phone must be exactly 10 digits'),
    .integer('Phone must be an integer')
    .test(
      'len',
      'Phone must be 10 digits',
      value => value && value.toString().length === 10,
    ),
});
const LoginScreen = () => {
  const formikRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [sessionId, setSessionId] = useState(null);
  const [showVerifyScreen, setShowVerifyScreen] = useState(false);
  const [verifyOtp] = useVerifyOtpMutation();
  const [sendOtp] = useSendOtpMutation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSendOtp = async () => {
    try {
      setLoading(true);
      const result = await sendOtp({
        phone: phone,
      }).unwrap();
      if (result.status) {
        showToast('Otp sent succesfully');
        setShowVerifyScreen(true);
        setSessionId(result?.session_id);
      } else {
        showToast();
      }
    } catch (err) {
      console.log('Error', err);
      showToast();
    } finally {
      setLoading(false);
    }
  };
  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      const result = await verifyOtp({
        phone: phone,
        otp,
        session_id: sessionId,
      }).unwrap();
      if (result.status) {
        showToast('Login Successful');
        dispatch(setLoggedIn(true));
        dispatch(setUser(result.user || {}));
        if (result?.accessToken) {
          dispatch(setAccessToken(result.accessToken));
        }
        if (result?.refreshToken) {
          dispatch(setRefreshToken(result.refreshToken));
        }
        navigation.navigate(NavigationStrings.SCREEN_MAIN);
      } else {
        showToast();
      }
    } catch (err) {
      console.log('Error', err);
      showToast();
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        {!showVerifyScreen ? (
          <Formik
            innerRef={formikRef}
            enableReinitialize={true}
            initialValues={{}}
            validationSchema={validationSchema}
            onSubmit={handleSendOtp}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              setFieldValue,
              errors,
            }) => (
              <View style={{flex: 1}}>
                <Text style={{...FONTS.h2, marginBottom: 20, marginTop: 30}}>
                  Login Or Register
                </Text>
                <View>
                  <InputBox
                    label="Phone Number"
                    secureTextEntry={false}
                    onChangeText={value => {
                      setPhone(value);
                      handleChange('phone')(value);
                    }}
                    value={values.phone}
                    error={errors.phone}
                    keyboardType="numeric"
                    maxLength={10}
                  />
                </View>

                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                  }}>
                  <Button
                    mode="contained"
                    style={{
                      borderRadius: 5,
                      height: 50,
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: 10,
                    }}
                    onPress={handleSendOtp}
                    loading={isLoading}
                    disabled={!values.phone || !!errors.phone}>
                    Sent OTP
                  </Button>
                  <Text
                    style={{
                      ...FONTS.h6,
                      marginBottom: 10,
                      textAlign: 'center',
                    }}>
                    By clicking on Verify, I accept the Terms & Conditions &
                    Privacy Policy
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        ) : (
          <View style={{flex: 1, marginTop: 30}}>
            <Text style={{...FONTS.h2, marginBottom: 20}}>Verification</Text>
            <Text style={{...FONTS.h5}}>Please enter your OTP here</Text>
            <OTPInputView
              pinCount={6}
              style={{
                width: '100%',
                height: 80,
              }}
              code={otp}
              onCodeChanged={code => {
                setOtp(code);
              }}
              autoFocusOnLoad={false}
              codeInputFieldStyle={{
                width: 50,
                height: 50,
                borderRadius: 8,
                color: 'black',
              }}
              codeInputHighlightStyle={{
                borderColor: COLORS.primary,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
              }}>
              <Button
                mode="contained"
                onPress={handleVerifyOtp}
                loading={isLoading}
                disabled={!otp}
                style={{
                  borderRadius: 5,
                  height: 50,
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 10,
                }}>
                Verify
              </Button>
            </View>
          </View>
        )}
        {/* </ScrollView> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
    // display: 'flex',
    // justifyContent: 'center',
    backgroundColor: COLORS.light_white,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    flex: 1,
  },
});
export default LoginScreen;
