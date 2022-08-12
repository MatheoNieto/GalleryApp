import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemeProvider, Theme} from '@contexts/Theme';

import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

import English from './i18n/translations/en.json';
import Spanish from './i18n/translations/es.json';

import {QueryClientProvider} from 'react-query';
import {queryClient} from './shared/queryClient';
import RootNavigator from '@routes/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'en',
  compatibilityJSON: 'v3',
  defaultNS: 'local',
  resources: {
    es: {
      local: Spanish,
    },
    en: {
      local: English,
    },
  },
  react: {
    useSuspense: false,
  },
});

export const Application = ({theme}: {theme?: Theme}) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18next}>
          <SafeAreaView style={styles.safeAreaView}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </I18nextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});
