import {StyleSheet} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({spacing}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: spacing[2]
    },
  });
