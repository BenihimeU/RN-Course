import { COORDINATIES_AQUIRED } from '../actions/types';


const INITIAL_STATE = {
  latlng: {
    longitude: 77.59,
    latitude: 12.97,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09
  }
}
const LocationReducers = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case COORDINATIES_AQUIRED:
      return action.payload
    default:
      return state;
  }
}

export default LocationReducers;