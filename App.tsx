import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoute from 'routes/AppRoute';
import {ThemeProvider} from '@rneui/themed';
import {Provider} from 'react-redux';
import store, {persistor} from 'store/store';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import SplashScreen from "react-native-lottie-splash-screen";
import { useEffect } from 'react';

const App = () => {
  
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <ThemeProvider>
            <AppRoute />
            <Toast />
          </ThemeProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
