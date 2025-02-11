import React, {forwardRef, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  RefreshControl,
  Animated,
  Alert,
} from 'react-native';
import FONTS from '../../styles/fonts';
import IMAGES from '../../assets/Images';
import COLORS from '../../styles/colors';
import {Button, Divider, Searchbar} from 'react-native-paper';
import {showSnackbar, showToast} from '../../utils/utils';
import BottomSheetDialog from '../Common/BottomSheetDialog';
import {useGetCityQuery} from '../../store/apis/cityApi';
import useScreenHeight from '../../hooks/useScreenHeight';
const AreasDialog = forwardRef(({setData, city_id}, ref) => {
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false);
  const dialogRef = useRef();
  const [query, setQuery] = useState('');
  const screenHeight = useScreenHeight();
  const scrollY = new Animated.Value(0);
  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false},
  );
  const {
    data: city,
    isLoading: isLoadingCity,
    refetch: refreshCity,
  } = useGetCityQuery(city_id, {skip: !city_id});
  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await refreshCity();
    } catch (error) {
      console.error('Error', error);
    }
    setRefreshing(false);
  };

  useEffect(() => {
    refreshCity();
  }, []);

  return (
    <BottomSheetDialog
      ref={ref}
      title="Stations"
      onRefresh={() => {}}
      customContainerStyle={{
        height: screenHeight - 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      {/* <View style={{elevation: 3}}>
        <Searchbar
          style={{
            backgroundColor: COLORS.light_white2,
            marginVertical: 10,
          }}
          placeholder="Search"
          onChangeText={setQuery}
          value={query}
        /> 
      </View> */}

      <View style={{flex: 1}}>
        <FlatList
          data={city?.areas || []}
          ListHeaderComponent={() => <></>}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item._id}
          ItemSeparatorComponent={() => (
            <Divider
              style={{marginVertical: 10, backgroundColor: COLORS.border}}
            />
          )}
          ListFooterComponent={() => <View style={{height: 20}} />}
          renderItem={({item}) => (
            <CategoryCard
              data={item}
              onPress={() => {
                setData(item);
                ref?.current?.close();
              }}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
          onScroll={handleScroll}
          ListEmptyComponent={() => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{...FONTS.h3}}>No Data Found</Text>
            </View>
          )}
        />
      </View>
    </BottomSheetDialog>
  );
});
const CategoryCard = ({data, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{padding: 10}}>
        <Text>{data?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AreasDialog;
