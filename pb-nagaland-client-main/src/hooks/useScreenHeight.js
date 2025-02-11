import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState(
    Math.floor(Dimensions.get('window').height),
  );
  useEffect(() => {
    const updateHeight = () => {
      setScreenHeight(Math.floor(Dimensions.get('window').height));
    };
    Dimensions.addEventListener('change', updateHeight);
  }, []);
  return screenHeight;
};
export default useScreenHeight;
