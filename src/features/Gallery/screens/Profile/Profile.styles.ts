import {StyleSheet} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({color, spacing, typography, sizes}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.white,
      paddingHorizontal: spacing[3]
    },
    author: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    authorImage: {
      width: 63,
      height: 63,
      marginRight: spacing[2],
    },
    infoAuthor: {
      padding: spacing[3],
      flex: 1,
    },
    nameAuthor: {
      fontFamily: typography.primaryBold,
      fontSize: sizes.large,
      lineHeight: spacing[5]
    },
    bioAuthor: {
      fontFamily: typography.primary,
      fontSize: sizes.small,
      lineHeight: spacing[4]
    },
    myPhotos: {
      marginVertical: spacing[6],
      flex: 1,
    },
    title: {
      fontFamily: typography.primaryBold,
      fontSize: sizes.xLarge,
      lineHeight: spacing[7],
    }
  });
