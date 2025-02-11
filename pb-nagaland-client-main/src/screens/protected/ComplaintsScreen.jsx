import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Animated,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {Chip, FAB} from 'react-native-paper';
import COLORS from '../../styles/colors';
import {FONT_FAMILY} from '../../styles/fonts';
import {useNavigation} from '@react-navigation/core';
import NAVIGATION_STRING from '../../navigations/NavigationStrings';
import {useGetComplaintsQuery} from './../../store/apis/complaintApi';
import ComplaintCard from '../../components/ui/ComplaintCard';

const ComplaintsScreen = () => {
  const scrollY = new Animated.Value(0);
  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false},
  );
  const navigator = useNavigation();
  const [isRefreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const chipStyle = isActive => ({
    backgroundColor: isActive ? COLORS.primary : '#f1f1f1',
  });
  const {
    data: complaints = [],
    isLoading: isLoadingGetComplaints,
    isSuccess: isSucessGetComplaints,
    isError: isErrorGetComplaints,
    refetch: refreshGetComplaints,
  } = useGetComplaintsQuery();
  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await refreshGetComplaints();
    } catch (error) {
      console.error('Error', error);
    }
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      {/* <View
        style={{backgroundColor: COLORS.white, elevation: 3, marginBottom: 10}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginVertical: 10, paddingHorizontal: 10}}>
          {complaints?.map(complaint => (
            <View style={{marginEnd: 10}}>
              <Chip
                onPress={() => {
                  setSelectedCategory(complaint._id);
                }}
                selected={selectedCategory === complaint._id}
                textStyle={{
                  color: selectedCategory === complaint._id ? 'white' : 'grey',
                  fontFamily: 'Urbanist-Regular',
                }}
                // mode={selectedCategory === category._id ? 'flat' : 'outlined'}
                style={chipStyle(selectedCategory === complaint._id)}
                icon={<></>}>
                {complaint?.name}
              </Chip>
            </View>
          ))}
        </ScrollView>
      </View> */}

      <View style={{flex: 1, paddingHorizontal: 10, marginTop: 10}}>
        <FlatList
          data={complaints}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item._id}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          ListFooterComponent={() => <View style={{height: 20}} />}
          renderItem={({item}) => (
            <ComplaintCard
              data={item}
              onPress={() => {
                // navigator.navigate(NAVIGATION_STRING, {
                //   id: item?._id,
                // });
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
        />
      </View>

      <Animated.View
        style={[
          {alignItems: 'center'},
          {
            opacity: scrollY.interpolate({
              inputRange: [0, 50],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <View style={{alignItems: 'center'}}>
          <FAB
            style={styles.fab}
            icon="plus"
            label="Add Complaint"
            small
            onPress={() => {
              navigator.navigate(NAVIGATION_STRING.SCREEN_ADD_EDIT_COMPLAINT);
            }}
            color="white"
          />
        </View>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light_white,
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    backgroundColor: COLORS.primary,
    bottom: 0,
    borderRadius: 50,
    width: 150,
    fontFamily: FONT_FAMILY.URBANIST_REGULAR,
  },
});

export default ComplaintsScreen;
