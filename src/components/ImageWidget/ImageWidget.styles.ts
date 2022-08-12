import {StyleSheet} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      with: 151,
      height: 218,
      justifyContent: 'center'
    },
    imgBackground: {
      flex: 1,
      justifyContent: "center"
    },
    contentInfo: {
      backgroundColor: 'red',
      bottom: 0
    }
  });
