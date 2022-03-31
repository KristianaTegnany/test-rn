import API from 'services/utils/api';
import {url} from 'services/utils/url';
import {GuestUser} from './type';
import {NewGuest} from 'controller/guest/type';

/**
 * Get all guest lists
 * @returns {Promise<GuestUser[] | boolean>}
 */
export const getAllGuestList = async (
  page: number = 1
): Promise<GuestUser[] | boolean> => {
  try {
    const result = await API.get(`${url?.guest?.get}?page=${page}`);

    if (result?.status === 200) {
      return result?.data['hydra:member'];
    }

    return false;
  } catch (e) {
    return false;
  }
};

/**
 * Post new guest user
 * @param {NewGuest} data
 * @returns {Promise<GuestUser | boolean>}
 */
export const postGuestUser = async (
  data: NewGuest,
): Promise<GuestUser | boolean> => {
  try {
    const result = await API.post(url?.guest?.get, data);

    if (result?.status === 201) {
      return result?.data;
    }

    return false;
  } catch (e) {
    return false;
  }
};

/**
 * Update guest user
 * @param id
 * @param {NewGuest} data
 * @param willCome
 * @returns {Promise<GuestUser | boolean>}
 */
export const editGuestUser = async (
  id: number,
  data: NewGuest,
  willCome: boolean
): Promise<GuestUser | boolean> => {
  try {
    const result = await API.put(url?.guest?.get + '/' + id, {
      ...data,
      willCome
    });

    if (result?.status === 200) {
      return result?.data;
    }

    return false;
  } catch (e) {
    return false;
  }
};

/**
 * Remove guest user
 * @param id
 * @returns {Promise<GuestUser | boolean>}
 */
export const removeGuestUser = async (id: number): Promise<boolean> => {
  try {
    const result = await API.delete(url?.guest?.get + '/' + id);

    return result?.status === 204;
  } catch (e) {
    return false;
  }
};
