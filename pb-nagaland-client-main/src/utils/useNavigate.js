import {useContext} from 'react';
import {NavigationContext} from '@react-navigation/native';
function useNavigate() {
  const navigation = useContext(NavigationContext);
  if (!navigation) {
    throw new Error('useNavigate must be used within a NavigationContainer');
  }
  return navigation.navigate;
}

export default useNavigate;
