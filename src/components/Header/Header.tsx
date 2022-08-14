import React, {FC} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './Header.styles';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import {StackNavigationProp} from '@react-navigation/stack';
import {Routes} from '@features/Gallery/navigation/routes';

type Props = {
  typeHeader: 'Home' | 'Detail' | 'Profile';
  navigation?: StackNavigationProp<any>;
};

const Header: FC<Props> = ({typeHeader, navigation}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  const onClose = () => navigation && navigation.navigate(Routes.HOME_GALLERY);

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
        <AntDesign name="closecircleo" size={30} color="white" />
      </Pressable>
    ),
    Profile: (
      <Pressable onPress={onClose}>
        <AntDesign name="closecircleo" size={30} color="black" />
      </Pressable>
    ),
  };

  return <View style={[styles.container, typeHeader === 'Detail' && styles.closeDetail]}>{opcionHeader[typeHeader]}</View>;
};

export default Header;
