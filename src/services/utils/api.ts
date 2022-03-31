import axios from 'axios';
import {url} from './url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorage} from './constant';

const API = axios.create({
  baseURL: url.baseUrl,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/ld+json'
  }
});

API.interceptors.request.use(
  async (config: any) => {
    const token = await AsyncStorage.getItem(asyncStorage.app_token);
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default API;
