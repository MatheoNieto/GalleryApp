import {StyleSheet} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({color, spacing, typography, sizes}: ThemeKeys) =>
  StyleSheet.create({
    pressable: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    imgBackground: {
      flex: 1,
      justifyContent: 'space-between',
      resizeMode: 'cover',
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
    actionSlides: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
    },
    btnAction: {
      padding: spacing[2],
      backgroundColor: color.black,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnLeft:{
      borderTopEndRadius:10,
      borderBottomEndRadius:10
    },
    btnRight:{
      borderTopStartRadius:10,
      borderBottomStartRadius:10
    }
  });
