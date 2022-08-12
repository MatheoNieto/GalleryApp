import React, {FC} from 'react';
import {View, Text, ImageBackground, ImageSourcePropType} from 'react-native';
import {useTheme} from '@contexts/Theme';
import {makeStyles} from './ImageWidget.styles';

type Props = {
  image: ImageSourcePropType;
  title: string;
  votes: string;
};

const ImageWidget: FC<Props> = ({image, title, votes}) => {
  const {theme} = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.imgBackground}/>
      <View style={styles.contentInfo}>
        <Text>{title}</Text>
        <Text>{votes}</Text>
      </View>
    </View>
  );
};

export default ImageWidget;
