
type User = {
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

type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export type RequestGetPhotosResponse = {
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
  urls: Urls;
  likes: number;
  liked_by_user: boolean;
  sponsorship: null;
  user: User;
  views: number;
  downloads: number;
}