import { FB_LOGIN_SUCCESS, FB_LOGIN_FAILED } from './types';
import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { AUTH_KEYS } from '../constant';

export const facebookLogin = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem(AUTH_KEYS.FB_TOKEN);
    if (token) {
      // We have Facebook token dispatch Success
      dispatch({ type: FB_LOGIN_SUCCESS, payload: token });
    } else {
      // We don't have Facebook token do FB login
      doFacebookLogin(dispatch);
    }
  }
}

const doFacebookLogin = async (dispatch) => {
  // Facebook Login initiate
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(AUTH_KEYS.FB_APP_ID, {
    permissions: ['public_profile']
  });
  // Facebook Login status failure
  if (type === 'cancel') {
    return dispatch({ type: FB_LOGIN_FAILED, payload: type });
  }
  // Facebook Login status Success
  try {
    await AsyncStorage.setItem(AUTH_KEYS.FB_TOKEN, token);
    dispatch({ type: FB_LOGIN_SUCCESS, payload: token });
  }
  //Asynch Storage failure
  catch (error) {
    //
    dispatch({ type: FB_LOGIN_FAILED, payload: 'Asynch Storage failure' });
  }
}