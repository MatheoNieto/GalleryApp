import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {DetailScreen, HomeScreen, ProfileScreen} from '../screens';
import {Header} from '../../../components/Header';

const Stack = () => {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator initialRouteName={Routes.HOME_GALLERY}>
      <Screen
        name={Routes.HOME_GALLERY}
        component={HomeScreen}
        options={{header: () => <Header typeHeader="Home" />}}
      />
      <Screen
        name={Routes.DETAIL_IMAGE}
        component={DetailScreen}
        options={{
          header: ({navigation}) => (
            <Header typeHeader="Detail" onClose={() => navigation.goBack()} />
          ),
        }}
      />
      <Screen
        name={Routes.PROFILE_GALLERY}
        component={ProfileScreen}
        options={{
          header: ({navigation}) => (
            <Header typeHeader="Profile" onClose={() => navigation.goBack()} />
          ),
        }}
      />
    </Navigator>
  );
};
export default Stack;
