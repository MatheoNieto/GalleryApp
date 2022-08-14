import React from 'react';
import {Animated} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {DetailScreen, HomeScreen, ProfileScreen} from '../screens';
import {Header} from '../../../components/Header';

const Stack = () => {
  const {Navigator, Screen} = createStackNavigator();

  const forSlide = ({current, next, inverted, layouts: {screen}}) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
        : 0,
    );

    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [screen.width, 0, screen.width * -0.3],
                extrapolate: 'clamp',
              }),
              inverted,
            ),
          },
        ],
      },
    };
  };
  return (
    <Navigator initialRouteName={Routes.HOME_GALLERY}>
      <Screen
        name={Routes.HOME_GALLERY}
        component={HomeScreen}
        options={{
          cardStyleInterpolator: forSlide,
          header: () => <Header typeHeader="Home" />,
        }}
      />
      <Screen
        name={Routes.DETAIL_IMAGE}
        component={DetailScreen}
        options={{
          cardStyleInterpolator: forSlide,
          header: ({navigation}) => (
            <Header typeHeader="Detail" navigation={navigation} />
          ),
        }}
      />
      <Screen
        name={Routes.PROFILE_GALLERY}
        component={ProfileScreen}
        options={{
          cardStyleInterpolator: forSlide,
          header: ({navigation}) => (
            <Header typeHeader="Profile" navigation={navigation} />
          ),
        }}
      />
    </Navigator>
  );
};
export default Stack;
