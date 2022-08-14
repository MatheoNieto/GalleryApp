import {images} from '@assets/images';
import {ImageSourcePropType} from 'react-native';

export type dataMockType = {
  image: ImageSourcePropType;
  title: string;
  votes: string;
};

export const data: dataMockType[] = [
  {
    image: images.relaxOcean,
    title: 'Tranquilidad marina',
    votes: '200 votos'
  },
  {
    image: images.plants,
    title: 'Tropical paradice',
    votes: '100 votos'
  },
  {
    image: images.skyLine,
    title: 'Sky line',
    votes: '50 votos'
  },
  {
    image: images.architecture,
    title: 'Architecture',
    votes: '100 votos'
  },
  {
    image: images.flower,
    title: 'Tranquilidad marina',
    votes: '200 votos'
  },
  {
    image: images.wheel,
    title: 'Tranquilidad marina',
    votes: '200 votos'
  },
];
