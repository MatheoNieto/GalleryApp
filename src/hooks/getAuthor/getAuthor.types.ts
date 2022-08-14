type Links = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
};

type Images = {
  small: string;
  medium: string;
  large: string;
};

type Social = {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: null;
};

type Photos = {
  id: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
};

export type RequestGetAuthorResponse = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string | null;
  location: string;
  links: Links;
  profile_image: Images;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: true;
  for_hire: boolean;
  social: Social;
  followed_by_user: boolean;
  photos: Photos[];
  badge: string | null;

  followers_count: number;
  following_count: number;
  allow_messages: boolean;
  numeric_id: number;
  downloads: number;
};