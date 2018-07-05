import axios from 'axios';
import qs from 'qs';
import { COORDINATES_AQUIRED } from './types';

const GEO_LOCATION_API = 'https://maps.googleapis.com/maps/api/geocode/json?';
const API_KEY = 'AIzaSyAnpAaxJ7XNH4L6vooNn602-2BJvYEzO50';

export const getGeoLocationForAddress = (address) => {
  return async (dispatch) => {
    try {
      let query = `${GEO_LOCATION_API}${qs.stringify({ address, key: API_KEY })}`;
      let { results } = await axios.get(query);
      if (results && results.length) {
        const payload = {
          latitude: results[0].geometry.location.lat,
          longitude: results[0].geometry.location.lng,
          longitudeDelta: 0.04,
          latitudeDelta: 0.09
        }
        console.log(payload);
        dispatch({ type: COORDINATES_AQUIRED, payload: payload });
      }
    }
    catch (error) {
      console.error(error);
    }
  }
}