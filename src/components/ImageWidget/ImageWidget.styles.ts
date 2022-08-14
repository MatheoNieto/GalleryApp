import {StyleSheet} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({typography, color, sizes, spacing}: ThemeKeys) =>
  StyleSheet.create({
    container:{
      flex: 1,
      with: 151,
      height: 218,
      margin: spacing[2]
    },
    imgBackground: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    imageStyle: {
      borderRadius: 10,
    },
    contentInfo: {
      backgroundColor: color.black,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      padding: spacing[3]

    },
    label: {
      fontFamily: typography.primary,
      color: color.white,
      fontSize: sizes.small,
    },
    labelVotes: {
      fontSize: sizes.xSmall,
    },
  });
