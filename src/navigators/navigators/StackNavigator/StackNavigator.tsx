import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';

export const StackNavigator = ({ routes, ...props }) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator {...props}>
      {routes?.map((item, key) => (
        <Stack.Screen
          key={key}
          name={item.name}
          component={item.component}
          options={item.options}
        />
      ))}
    </Stack.Navigator>
  )
}