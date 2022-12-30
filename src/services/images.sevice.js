import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'https://pixabay.com/api',
});

export const getImages = async (params = {}) => {
  const { per_page, search } = params;
  const { data } = await postsApi.get('/', {
    params: {
      q: search,
      page: 1, 
      key: '12869198-d37a15061ea84e81a1308e6dd',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: per_page
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