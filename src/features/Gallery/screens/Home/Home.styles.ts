import {StyleSheet} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({color, spacing}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: color.white,
      padding: spacing[5]
    },
  });
