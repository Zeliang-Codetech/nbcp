import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Linking,
  RefreshControl,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import COLORS from '../../styles/colors';
import FONTS, {FONT_FAMILY} from '../../styles/fonts';
import {Button, Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {openURL} from '../../utils/utils';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MapView, {Marker} from 'react-native-maps';
import colors from '../../styles/colors';
import {useGetCitiesQuery} from '../../store/apis/cityApi';
import {useGetComplaintsQuery} from '../../store/apis/complaintApi';
import NavigationStrings from '../../navigations/NavigationStrings';
const HomeScreen = () => {
  const navigator = useNavigation();
  const user = useSelector(state => state?.app?.user);
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      {/* <Tab.Navigator
        tabBarOptions={{
          activeTintColor: COLORS.primary,
          inactiveTintColor: COLORS.black,
          pressColor: COLORS.light_white,
          scrollEnabled: false,
          tabStyle: {},
          indicatorStyle: {
            backgroundColor: COLORS.primary,
          },
          style: {},
          labelStyle: {
            fontSize: 15,
            fontFamily: FONT_FAMILY.URBANIST_LIGHT,
            textTransform: 'capitalize',
          },
        }}>
        <Tab.Screen name="Map View" component={MapViewScreen} />
        <Tab.Screen name="City List" component={CitiesScreen} />
      </Tab.Navigator> */}
    </View>
  );
};

const MapViewScreen = () => {
  // const [complaints, setLocations] = useState([
  //   {
  //     title: 'Marker 1',
  //     coordinate: {latitude: 26.17931571931281, longitude: 91.74912043306743},
  //   },
  //   {title: 'Marker 2', coordinate: {latitude: 26.18, longitude: 91.75}},
  //   {title: 'Marker 3', coordinate: {latitude: 26.178, longitude: 91.751}},
  //   {title: 'Marker 4', coordinate: {latitude: 26.181, longitude: 91.748}},
  //   {title: 'Marker 5', coordinate: {latitude: 26.179, longitude: 91.75}},
  //   {title: 'Marker 6', coordinate: {latitude: 26.18, longitude: 91.752}},
  //   {title: 'Marker 7', coordinate: {latitude: 26.178, longitude: 91.748}},
  //   {title: 'Marker 8', coordinate: {latitude: 26.179, longitude: 91.751}},
  //   {title: 'Marker 9', coordinate: {latitude: 26.181, longitude: 91.75}},
  //   {title: 'Marker 10', coordinate: {latitude: 26.18, longitude: 91.749}},
  // ]);
  const {
    data: complaints = [],
    isLoading: isLoadingGetComlaints,
    isSuccess: isSuccessGetComlaints,
    isError: isErrorGetComlaints,
    refetch: refreshGetComplaints,
  } = useGetComplaintsQuery();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={false}
        initialRegion={{
          // latitude: 26.17931571931281,
          // longitude: 91.74912043306743,
          latitude: 25.67559977412287,
          longitude: 94.1078617009981,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {complaints?.map(complaint => {
          return (
            <Marker
              key={complaint._id}
              // coordinate={{
              //   latitude: 26.17931571931281,
              //   longitude: 91.74912043306743,
              // }}
              coordinate={{
                latitude: complaint?.latitude || 26.14271852,
                longitude: complaint?.longitude || 91.74385883,
              }}
              // title={complaint?.title}
              // description=""
            />
          );
        })}
      </MapView>
    </View>
  );
};

export const CitiesScreen = () => {
  const navigator = useNavigation();
  const {data: cities = [], refetch: refreshGetCities} = useGetCitiesQuery();
  const [isRefreshing, setIsRefreshing] = useState(false);
  useEffect(() => {
    refreshGetCities();
  }, []);
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refreshGetCities();
    } catch (error) {
      console.error('Error', error);
    }
    setIsRefreshing(false);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{backgroundColor: colors.border, height: 1}} />
        )}
        // ListFooterComponent={() => <View style={{height: 20}} />}
        renderItem={({item}) => (
          <CityCard
            data={item}
            onPress={() => {
              navigator.navigate(NavigationStrings.SCREEN_AREAS, {
                id: item?._id,
              });
            }}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

const CityCard = ({data, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{...FONTS.h5}}>{data?.name}</Text>
        <Icon name="chevron-right" size={15} color={COLORS.green} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    // backgroundColor: COLORS.light_white,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
// const mapStyle = [
//   {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//   {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//   {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [{color: '#263c3f'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#6b9a76'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{color: '#38414e'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#212a37'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9ca5b3'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{color: '#746855'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#1f2835'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#f3d19c'}],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [{color: '#2f3948'}],
//   },
//   {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{color: '#17263c'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#515c6d'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [{color: '#17263c'}],
//   },
// ];
export default HomeScreen;
