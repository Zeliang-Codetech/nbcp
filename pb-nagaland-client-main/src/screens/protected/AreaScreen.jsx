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
import colors from '../../styles/colors';
import {useGetCityQuery} from '../../store/apis/cityApi';
const AreaScreen = ({route}) => {
  const city_id = route.params?.id;
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {data: city = [], refetch: refreshCity} = useGetCityQuery(city_id, {
    skip: !city_id,
  });
  useEffect(() => {
    refreshCity();
  }, []);
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refreshCity();
    } catch (error) {
      console.error('Error', error);
    }
    setIsRefreshing(false);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={city?.areas || []}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item._id}
        ItemSeparatorComponent={() => (
          <View style={{backgroundColor: colors.border, height: 1}} />
        )}
        // ListFooterComponent={() => <View style={{height: 20}} />}
        renderItem={({item}) => <CityCard data={item} />}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

const CityCard = ({data}) => {
  return (
    <View
      style={{
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{...FONTS.h5}}>{data?.name}</Text>
      <Text
        style={{
          ...FONTS.h5,
          backgroundColor: 'green',
          borderRadius: 50,
          padding: 5,
          color: 'white',
          minWidth: 50,
          textAlign: 'center',
        }}>
        {data?.aqi || 0}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default AreaScreen;
