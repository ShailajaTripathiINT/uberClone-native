import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import HomeNavigation from './App/Navigation/HomeNavigation';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return <HomeNavigation />;
};
export default App;
