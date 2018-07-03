import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import { FETCH_POST_OFFICE } from './types';

const POST_API = 'http://postalpincode.in/api/pincode/';

export const fetchPostOffice = (region) => {
  return async (dispatch) => {
    try {
      let zipcode = await reverseGeocode(region);
      console.log(zipcode);
      let { data } = await axios.get(`${POST_API}${zipcode}`);
      dispatch({ type: FETCH_POST_OFFICE, payload: data });
    }
    catch (error) {
      console.error(error);
    }
  }
}