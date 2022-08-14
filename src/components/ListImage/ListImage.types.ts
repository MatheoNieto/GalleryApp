import {GalleryStackParamList} from '@features/Gallery/navigation';
import {StackNavigationProp} from '@react-navigation/stack';

export type dataImage = {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  categories: Array<any>;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: Array<any>;
  sponsorship: null;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string | null;
    portfolio_url: string;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: 1;
    total_likes: 13;
    total_photos: 196;
    accepted_tos: boolean;
    for_hire: boolean;
  };
  views: number;
  downloads: number;
};

export type ListImageProps = {
  data: dataImage[];
  navigation: StackNavigationProp<GalleryStackParamList>;
}