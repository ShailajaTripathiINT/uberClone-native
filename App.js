import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './App/Navigation/RootNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <RootNavigation/>;
};
export default App;
