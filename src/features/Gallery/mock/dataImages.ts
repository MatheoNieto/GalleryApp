import {images} from '@assets/images';
import {ImageSourcePropType} from 'react-native';

export type dataMockType = {
  image: ImageSourcePropType;
  title: string;
  votes: string;
  author: {
    fullName: string;
    bio: string;
    image: ImageSourcePropType;
  };
};

export const data: dataMockType[] = [
  {
    image: images.relaxOcean,
    title: 'Tranquilidad marina',
    votes: '200 votos',
    author: {
      fullName: 'Norman Foster',
      bio: 'British architect whose company, Foster + Partners, maintains an international design practice famous for high-tech architecture.',
      image: images.author,
    },
  },
  {
    image: images.plants,
    title: 'Tropical paradice',
    votes: '100 votos',
    author: {
      fullName: 'Norman Foster',
      bio: 'British architect whose company, Foster + Partners, maintains an international design practice famous for high-tech architecture.',
      image: images.author,
    },
  },
  {
    image: images.skyLine,
    title: 'Sky line',
    votes: '50 votos',
    author: {
      fullName: 'Norman Foster',
      bio: 'British architect whose company, Foster + Partners, maintains an international design practice famous for high-tech architecture.',
      image: images.author,
    },
  },
  {
    image: images.architecture,
    title: 'Architecture',
    votes: '100 votos',
    author: {
      fullName: 'Norman Foster',
      bio: 'British architect whose company, Foster + Partners, maintains an international design practice famous for high-tech architecture.',
      image: images.author,
    },
  },
  {
    image: images.flower,
    title: 'Tranquilidad marina',
    votes: '200 votos',
    author: {
      fullName: 'Norman Foster',
      bio: 'British architect whose company, Foster + Partners, maintains an international design practice famous for high-tech architecture.',
      image: images.author,
    },
  },
  {
    image: images.wheel,
    title: 'Tranquilidad marina',
    votes: '200 votos',
    author: {
      fullName: 'Norman Foster',
      bio: 'British architect whose company, Foster + Partners, maintains an international design practice famous for high-tech architecture.',
      image: images.author,
    },
  },
];
