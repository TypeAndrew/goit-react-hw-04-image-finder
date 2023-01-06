import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'https://pixabay.com/api',
});

export const getImages = async (params = {}) => {
  const { page, search } = params;
  const { data } = await postsApi.get('/', {
    params: {
      q: search,
      page: page, 
      key: '12869198-d37a15061ea84e81a1308e6dd',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12
    },
    /*params: {
      key: '12869198-d37a15061ea84e81a1308e6dd',
      image_type: 'photo',
      orientation: 'horizontal',
      page: 1,
      per_page: 12
      
    },*/
  });

  return data;
};