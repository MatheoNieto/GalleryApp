import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Header.styles'

const Header = () => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>
    </View>
  );
};

export default Header;
