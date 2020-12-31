import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'src/routes/Router';
import { persistor, store } from 'src/store';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from './contexts/ThemeContext';
import './i18n';
import 'src/utils/debuggers/reactotron';
import 'src/utils/debuggers/flipper';

// Optimize React Navigation: https://reactnavigation.org/docs/react-native-screens/
enableScreens();

export const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
