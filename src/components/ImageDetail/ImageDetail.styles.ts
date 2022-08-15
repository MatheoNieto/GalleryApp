import {StyleSheet, Dimensions} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';

const {width} = Dimensions.get('screen')

export const makeStyles = ({typography, color, sizes, spacing}: ThemeKeys) =>
  StyleSheet.create({
    pressable: {
      flex: 1,
      width,
      justifyContent: 'flex-end'
    },
    imageBackground: {
      ...StyleSheet.absoluteFillObject,
      
    },
    contentInfo: {
      backgroundColor: color.black,
      padding: spacing[3],
      height: 268,
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
    },
    title: {
      fontFamily: typography.primary,
      color: color.white,
      fontSize: sizes.xLarge,
      lineHeight: spacing[7],
      textTransform: 'capitalize',
      width: 253,
    },
    votes: {
      fontFamily: typography.primaryThin,
      color: color.white,
      fontSize: sizes.base - 2,
      lineHeight: spacing[4],
    },
    author: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    authorImage: {
      width: 37,
      height: 37,
      marginRight: spacing[2],
      borderRadius: 50
    },
    nameAuthor: {
      fontFamily: typography.primaryThin,
      color: color.white,
      fontSize: sizes.small,
    },
    viewProfile: {
      fontFamily: typography.primaryThin,
      color: color.white,
      fontSize: sizes.xSmall,
    },
  });
