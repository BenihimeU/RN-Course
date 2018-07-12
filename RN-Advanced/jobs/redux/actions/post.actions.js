import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import { FETCH_POST_OFFICE, LIKE_OFFICE, CLEAR_FAVOURITES } from './types';

const POST_API = 'http://postalpincode.in/api/pincode/';

export const fetchPostOffice = (region, callback) => {
  return async (dispatch) => {
    try {
      let zipcode = await reverseGeocode(region);
      console.log(zipcode);
      let { data } = await axios.get(`${POST_API}${zipcode}`);
      dispatch({ type: FETCH_POST_OFFICE, payload: data });
      callback();
    }
    catch (error) {
      console.error(error);
    }
  }
}

export const likeOffice = (office) => {
  return {
    payload: office,
    type: LIKE_OFFICE
  }
}

export const clearFavourites = () => {
  return {
    type: CLEAR_FAVOURITES
  }
}