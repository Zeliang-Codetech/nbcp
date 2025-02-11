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
import {showToast} from '../../utils/utils';
import BottomSheetDialog from '../../components/Common/BottomSheetDialog';
import {useGetCategoriesQuery} from '../../store/apis/categoryApi';
import useScreenHeight from '../../hooks/useScreenHeight';
const CategoriesDialog = forwardRef(({setData}, ref) => {
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false);
  const [query, setQuery] = useState('');
  const screenHeight = useScreenHeight();
  const scrollY = new Animated.Value(0);
  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false},
  );

  const {
    data: categories = [],
    isLoading: isLoadingGetCategories,
    isSuccess: isSucessGetCategories,
    isError: isErrorGetCategories,
    refetch: refreshGetCategories,
  } = useGetCategoriesQuery();

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await refreshGetCategories();
    } catch (error) {
      console.error('Error here', error);
    }
    setRefreshing(false);
  };

  useEffect(() => {
    refreshGetCategories();
  }, []);

  return (
    <BottomSheetDialog
      ref={ref}
      title="Categories"
      onRefresh={() => {}}
      customContainerStyle={{
        height: screenHeight - 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      <View style={{elevation: 3}}>
        <Searchbar
          style={{
            backgroundColor: COLORS.light_white2,
            marginVertical: 10,
          }}
          placeholder="Search"
          onChangeText={setQuery}
          value={query}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={categories}
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
const styles = StyleSheet.create({
  container: {},
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    backgroundColor: '#e4e6ec',
    borderRadius: 0,
    overflow: 'hidden',
    border: '1px solid #efefef',
  },
  hr: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 10,
  },
  btn: {},
});

export default CategoriesDialog;
