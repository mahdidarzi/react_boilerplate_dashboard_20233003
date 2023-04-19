import axios from 'axios';

const fetchPosts = (url: string) => async () => {
  const { request, data } = await axios.get(process.env.REACT_APP_API_BASE_URL + url);
  if (request.status === 200 || request.status === 201) {
    return data;
  } else if (request.status === 401) {
    //refresh token and other logic according to backend
  } else {
    //show error according to backend response
  }
};

export { fetchPosts };
