import {UserCredential} from 'controller/auth/type';
import API from 'services/utils/api';
import {url} from 'services/utils/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncStorage} from 'services/utils/constant';

export const loginUser = async (data: UserCredential) => {
  try {
    const result = await API.post(url.user.login, {...data});
    if (result?.status === 200) {
      await AsyncStorage.setItem(asyncStorage.app_token, result?.data?.token);

      return result?.data?.token;
    }

    return false;
  } catch (e) {
    return false;
  }
};
