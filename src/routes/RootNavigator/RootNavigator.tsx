import React from 'react';
import {PublicNavigator} from '../PublicNavigator';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

export const RootNavigator = () => {
  const [loaded] = useFonts({
    'semi-bold': require('@assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    regular: require('@assets/fonts/Poppins/Poppins-Regular.ttf'),
  });

  const Component = !loaded ? AppLoading : PublicNavigator;

  return <Component />;
};
