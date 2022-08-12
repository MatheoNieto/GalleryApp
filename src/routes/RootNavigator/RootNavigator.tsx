import React from 'react';
import {PublicNavigator} from '../PublicNavigator';
import {useFonts} from 'expo-font';

export const RootNavigator = () => {
  const [loaded] = useFonts({
    'Museo-Regular': require('@assets/fonts/MuseoSans.otf'),
    'Museo-Bold': require('@assets/fonts/MuseoSans_Bold.otf'),
    'Museo-Thin': require('@assets/fonts/MuseoSans_Thin.otf'),
  });

  if (!loaded) {
    return null;
  }

  return <PublicNavigator />;
};
