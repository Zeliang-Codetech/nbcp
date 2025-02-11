import React, {forwardRef, useMemo, useRef, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import BottomSheet from 'react-native-raw-bottom-sheet';
import FONTS from '../../styles/fonts';
import IMAGES from '../../assets/Images';
import {Button} from 'react-native-paper';
import COLORS from '../../styles/colors';
import {MenuProvider} from 'react-native-popup-menu';
const BottomSheetDialog = forwardRef(
  (
    {
      title,
      openDuration = 100,
      closeDuration = 100,
      style,
      children,
      onRefresh,
      customContainerStyle,
      onOpen,
      onClose,
    },
    ref,
  ) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const handleRefresh = async () => {
      setIsRefreshing(true);
      try {
        onRefresh();
      } catch (error) {
        console.error('Error', error);
      }
      setIsRefreshing(false);
    };
    return (
      <BottomSheet
        ref={ref}
        dragFromTopOnly={true}
        openDuration={openDuration}
        closeDuration={closeDuration}
        closeOnDragDown={true}
        closeOnPressMask={true}
        onOpen={onOpen}
        onClose={onClose}
        customStyles={{
          wrapper: {},
          container: {
            backgroundColor: COLORS.white,
            // flex: 1,
            ...customContainerStyle,
          },
          draggableIcon: {},
        }}>
        <MenuProvider>
          <View style={{...styles.container}}>
            <View style={{...styles.flexBetween, alignItems: 'center'}}>
              <Text style={{...FONTS.h3}}>{title}</Text>
              {/* <Button
              icon="plus"
              mode="contained"
              onPress={() => {
                // ref?.current?.open();
              }}>
              Create
            </Button> */}
            </View>
            {children}
            {/* <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
              />
            }>
            {children}
          </ScrollView> */}
          </View>
        </MenuProvider>
      </BottomSheet>
    );
  },
);

const HorizontalLine = () => {
  return <View style={styles.hr} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hr: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 10,
  },
});

export default BottomSheetDialog;

// import BottomSheet from 'react-native-bottom-sheet';
// const MyComponent = () => {
//   const bottomSheetRef = React.createRef();
//   const openBottomSheet = () => {
//     bottomSheetRef.current?.snapTo(0); // Open the bottom sheet
//   };
//   const closeBottomSheet = () => {
//     bottomSheetRef.current?.snapTo(1); // Close the bottom sheet
//   };
//   return (
//     <View style={{flex: 1}}>
//       <TouchableOpacity onPress={openBottomSheet}>
//         <Text>Open Bottom Sheet</Text>
//       </TouchableOpacity>
//       <BottomSheet
//         ref={bottomSheetRef}
//         initialSnap={1} // 0 is open, 1 is closed
//         snapPoints={['30%', '50%', '90%']} // Snap points for the bottom sheet
//         borderRadius={10}>
//         <View style={{padding: 20}}>
//           <Text>Bottom Sheet Content</Text>
//           <TouchableOpacity onPress={closeBottomSheet}>
//             <Text>Close</Text>
//           </TouchableOpacity>
//         </View>
//       </BottomSheet>
//     </View>
//   );
// };
