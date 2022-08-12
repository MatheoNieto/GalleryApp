import { StyleSheet } from "react-native";
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({typography, sizes, color, spacing, fontWeight }: ThemeKeys) => StyleSheet.create({
  container:{
    backgroundColor: color.white,
    padding:spacing[4] 
  },
  title: {
    fontFamily: typography.primaryBold,
    fontSize: sizes.large,
    fontWeight: fontWeight.bold,
    textAlign: 'center',
  }
})