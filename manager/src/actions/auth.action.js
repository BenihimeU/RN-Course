import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from '../actions/types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

/*********** SYNCH ACTIONS Start ***********/
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGE,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGE,
    payload: text
  }
};

/*********** SYNCH ACTIONS End ***********/

/********** ASYNCH ACTIONS Start ***********/
export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER});
    // setTimeout(
    //   () => {
    //     if((email === 'test@test.com') && (password === 'password')){
    //       let user = { email: email, id:`XXX-${email}-XXX`};
    //       dispatch({ type: LOGIN_SUCCESS, payload: user});
    //       Actions.Employee();
    //     }
    //   }
    // ,500);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        logingUserSuccess(dispatch, user);
      })
      .catch(err => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            logingUserSuccess(dispatch, user);
          }).catch(error => {
            logingUserFailure(dispatch, error);
          });
      });
  };
}

const logingUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
  Actions.Employee();
};

const logingUserFailure = (dispatch, error) => {
  dispatch({ type: LOGIN_USER_FAILED, payload: error });
};

/********** ASYNCH ACTIONS End ***********/