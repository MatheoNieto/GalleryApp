import {StyleSheet} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      with: 151,
      height: 218,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    imgBackground: {
      flex: 1,
      justifyContent: 'center',
    },
    imageStyle: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    contentInfo: {
      backgroundColor: 'red',
    },
  });

export const gradient = ({color}: ThemeKeys) => ({
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
  colors: ['transparent', color.black],
});
