import React, {FC} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Header.styles';
import {Ionicons, AntDesign} from '@expo/vector-icons';

type Props = {
  typeHeader: 'Home' | 'Detail' | 'Profile';
  onClose?: () => void;
};

const Header: FC<Props> = ({typeHeader, onClose}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  const opcionHeader = {
    Home: (
      <>
        <Ionicons name="menu-sharp" size={30} color="black" />
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Discover</Text>
        </View>
      </>
    ),
    Detail: (
      <Pressable onPress={onClose}>
        <AntDesign name="closecircleo" size={30} color="black" />
      </Pressable>
    ),
    Profile: (
      <Pressable onPress={onClose}>
        <AntDesign name="closecircleo" size={30} color="white" />
      </Pressable>
    ),
  };

  return <View style={styles.container}>{opcionHeader[typeHeader]}</View>;
};

export default Header;
