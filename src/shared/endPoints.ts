const baseURL = 'https://api.unsplash.com';

export const endPoints = {
  getPhotosRandom: `${baseURL}/photos/random`,
  getAuthor: `${baseURL}/users/:username`,
  getPhotosAuthor: `${baseURL}/users/:username/photos`,
  getPhoto: `${baseURL}/photos/:id`
};
