import React from 'react';
import {TouchableNativeFeedback, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';
import {useNavigation} from '@react-navigation/core';
import NavigationStrings from '../../navigations/NavigationStrings';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {persistor} from '../../store/store';
import {apiSlice} from '../../store/apis/apiSlice';
import {openURL, showToast} from '../../utils/utils';
import {setLoggedIn} from '../../store/slices/appSlice';
import {scale} from '../../utils/responsive';

const AccountScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.app?.user);
  const handleLogout = () => {
    dispatch(setLoggedIn(false));
    dispatch(apiSlice.util.resetApiState());
    persistor
      .purge()
      .then(() => {
        console.log('Persisted data purged.');
      })
      .catch(error => {
        console.error('Error purging persisted data:', error);
      });
    showToast('Logout Successful');
  };
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: COLORS.white,
            padding: 15,
            elevation: 0,
            // borderBottomWidth: 1,
            // borderBottomColor: '#f6f6f6',
          }}>
          <View>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: '#e2eaed',
                borderRadius: 30,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 1,
              }}>
              <Icon name="user" size={30} color={'#a7bbc2'} />
            </View>
          </View>

          <View style={{flex: 1}}>
            {/* <Text style={{...FONTS.h3, color: COLORS.black}}>
              {user.name || ''}
            </Text> */}
            <Text style={{...FONTS.h4, color: COLORS.black}}>
              +91 {user.phone}
            </Text>
          </View>
        </View>
      </View>
      <View>
        {/* <Card
          icon="industry"
          title="Pollution Impact"
          description="Learn about the impact of pollution on the environment."
        /> */}
        {/* <Card
          icon="headphones-simple"
          title="Help"
          description="Get assistance and support from our team."
        /> */}
        <Card
          icon="download"
          title="Donwload Forms"
          description="Download key environmental forms with easy online consent and authorization."
          onPress={() => {
            openURL('https://npcb.nagaland.gov.in/?p=24');
          }}
        />
        <Card
          icon="user"
          title="About Us"
          description="Discover more about our organization."
          onPress={() => {
            navigation.navigate(NavigationStrings.SCREEN_ABOUT_US);
          }}
        />
        <Card
          icon="headphones"
          title="Contact Us"
          description="Reach out to us for inquiries and feedback."
          onPress={() => {
            openURL('https://npcb.nagaland.gov.in/?p=81');
          }}
        />

        <View>
          <Button onPress={() => handleLogout()}>Logout</Button>
        </View>
      </View>
    </View>
  );
  ``;
};

const Card = ({onPress, icon, title, description}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View>
        <View style={styles.container}>
          <View style={styles.icon}>
            <Icon name={icon} size={30} color={COLORS.primary} style={{}} />
          </View>
          <View style={styles.text_container}>
            <Text style={styles.text1}>{title}</Text>
            <Text style={styles.text2}>{description}</Text>
          </View>

          <View style={styles.arrow_icon}>
            <Icon name="chevron-right" size={15} color={COLORS.primary} />
          </View>
        </View>
        <View style={styles.divider}></View>
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    // marginTop: 10,
    // elevation: 3,
  },
  icon: {
    // marginRight: 0,
    // flex: 1,
    // alignItems: 'center',
    backgroundColor: COLORS.light_green,
    width: 60,
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_container: {
    flex: 4,
  },
  text1: {
    ...FONTS.h4,
    color: COLORS.black,
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Urbanist-Regular',
    color: COLORS.black,
  },

  arrow_icon: {
    marginLeft: 10,
    backgroundColor: COLORS.light_orange,
    padding: 5,
    borderRadius: 50,
    height: 25,
    width: 25,
    alignItems: 'center',
  },
  divider: {
    height: 0.5,
    backgroundColor: '#f1f1f1',
  },
});
export default AccountScreen;
