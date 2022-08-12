import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Header.styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Ionicons name="menu-sharp" size={30} color="black" />
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Discover</Text>
      </View>
    </View>
  );
};

export default Header;
