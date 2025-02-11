import React, {useEffect, useRef, useState} from 'react';
import {
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  useAddComplaintMutation,
  useUpdateComplaintMutation,
} from '../../store/apis/complaintApi';
import {useNavigation} from '@react-navigation/core';
import NavigationStrings from '../../navigations/NavigationStrings';
import {requestPermission, showToast} from '../../utils/utils';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';
import InputBox from '../../components/Common/InputBox';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button} from 'react-native-paper';
import ImagePickerCard from '../../components/Common/ImagePickerCard';
import SelectView from '../../components/Common/SelectView';
import CategoriesDialog from '../../components/dialogs/CategoriesDialog';
import CitiesDialog from '../../components/dialogs/CitiesDialog';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AreasDialog from '../../components/dialogs/AreasDialog';
const validationSchema = yup.object().shape({
  // category_id: yup.string().required('Select category'),
  // description: yup.string().required('Description is required'),
});

const AddEditComplaintScreen = ({data}) => {
  const [isLoading, setLoading] = useState(false);
  const formikRef = useRef();
  const categoriesRef = useRef();
  const citiesRef = useRef();
  const areasRef = useRef();
  const navigator = useNavigation();
  const [category, setCategory] = useState(null);
  const [city, setCity] = useState(null);
  const [area, setArea] = useState(null);
  const [image, setImage] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [addComplaint] = useAddComplaintMutation();
  const [isDisabled, setDisabled] = useState(true);
  const [updateComplaint] = useUpdateComplaintMutation();
  const handleSubmit = async values => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('category_id', category?._id);
      formData.append('city_id', city?._id);
      formData.append('area_id', area?._id);
      if (coordinates?.latitude) {
        formData.append('latitude', coordinates?.latitude);
      }
      if (coordinates?.longitude) {
        formData.append('longitude', coordinates?.longitude);
      }
      if (values?.description) {
        formData.append('description', values?.description);
      }
      if (values?.address) {
        formData.append('address', values?.address);
      }
      if (values?.pincode) {
        formData.append('pincode', values?.pincode);
      }
      if (image) {
        formData.append('image', {
          uri: image.path,
          type: image.mime,
          name: 'image.jpg',
        });
      }
      // let result;
      // if (data?._id) {
      //   formData.append('_id', data._id);
      //   result = await updateComplaint(formData).unwrap();
      // } else {
      //   result = await addComplaint(formData).unwrap();
      // }
      // {
      //   category_id: category._id,
      //   city_id: city._id,
      //   description: values.description,
      //   address: values.address,
      //   pincode: values.pincode,
      // }
      const result = await addComplaint(formData).unwrap();
      if (result.status) {
        showToast('Created Successfully');
        navigator.goBack();
      } else {
        showToast();
      }
    } catch (error) {
      showToast();
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {}, []);
  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(error),
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    });
  };
  console.log('area', area);
  return (
    <View style={styles.container}>
      <CategoriesDialog ref={categoriesRef} title={''} setData={setCategory} />
      <CitiesDialog
        ref={citiesRef}
        title={''}
        setData={value => {
          setCity(value);
          setArea(null);
        }}
      />
      {city?._id && (
        <AreasDialog
          ref={areasRef}
          title={''}
          setData={setArea}
          city_id={city._id}
        />
      )}

      <Formik
        innerRef={formikRef}
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          errors,
        }) => (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <View style={{marginBottom: 10}}>
                <ImagePickerCard
                  label="Upload"
                  style={{width: 100, height: 100}}
                  image={image}
                  setImage={setImage}
                  onClose={() => setImage(null)}
                />
              </View>
              <SelectView
                label="Select Category"
                placeholder=""
                data={category}
                error={errors.category_id}
                onPress={() => {
                  categoriesRef?.current?.open();
                }}
              />

              <InputBox
                label="Description"
                placeholder=""
                secureTextEntry={false}
                onChangeText={handleChange('description')}
                // onBlur={handleBlur('description')}
                value={values.description}
                error={errors.description}
                multiline={true}
                numberOfLines={4}
              />
              <SelectView
                label="Select City"
                placeholder=""
                data={city}
                onPress={() => {
                  citiesRef?.current?.open();
                }}
              />
              {city?._id && (
                <SelectView
                  label="Select Area"
                  placeholder=""
                  data={area}
                  onPress={() => {
                    areasRef?.current?.open();
                  }}
                />
              )}

              <InputBox
                label="Pincode"
                secureTextEntry={false}
                onChangeText={handleChange('pincode')}
                value={values.pincode}
                error={errors.pincode}
                keyboardType="numeric"
              />

              {/* <View style={styles.row}>
                <View style={{...styles.col, marginEnd: 5}}>
                </View>
                <View style={{...styles.col, marginStart: 5}}> 
                </View>
              </View> */}
              <InputBox
                label="Address"
                placeholder=""
                secureTextEntry={false}
                onChangeText={handleChange('address')}
                // onBlur={handleBlur('description')}
                value={values.address}
                error={errors.address}
                multiline={true}
                numberOfLines={4}
              />

              {!coordinates && (
                <Button
                  icon={<Icon name="location" />}
                  mode="outlined"
                  onPress={async () => {
                    const hasPermission = await requestPermission(
                      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    );
                    if (hasPermission) {
                      // const position = await getCurrentPosition();
                      Geolocation.getCurrentPosition(
                        position => {
                          const {latitude, longitude} = position.coords;
                          setCoordinates({latitude, longitude});
                          setDisabled(false);
                        },
                        error => {
                          setCoordinates(null);
                          setDisabled(true);
                        },
                        {
                          enableHighAccuracy: false,
                          timeout: 15000,
                          maximumAge: 10000,
                        },
                      );
                    } else {
                      setDisabled(true);
                    }
                  }}>
                  Select Location
                </Button>
              )}

              <Button
                style={{marginTop: 20}}
                mode="contained"
                onPress={handleSubmit}
                disabled={isDisabled}
                loading={isLoading}>
                Save
              </Button>
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light_white,
    padding: 15,
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    flex: 1,
  },
});
export default AddEditComplaintScreen;
