import { StyleSheet } from "react-native";
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({typography, sizes, color, spacing, fontWeight }: ThemeKeys) => StyleSheet.create({
  container:{
    backgroundColor: color.white,
    padding:spacing[5],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentTitle: {
    flex: 1
  },
  title: {
    fontFamily: typography.primaryBold,
    fontSize: sizes.large,
    fontWeight: fontWeight.bold,
    textAlign: 'center',
  }
})