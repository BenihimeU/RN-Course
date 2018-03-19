import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_SUCCESS
} from '../actions/types';
import firebase from 'firebase';

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
    setTimeout(
      () => {
        let user = { email: email, id:`XXX-${email}-XXX`};
        dispatch({ type: LOGIN_SUCCESS, payload: user});
      }
    ,500);
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(user => {
    //     console.log(email);
    //     console.log(password);
    //     dispatch({ type: LOGIN_SUCCESS, payload: user });
    //   })
    //   .catch(err => {
    //     console.log(email);
    //     console.log(password);
    //   });
  };
}

/********** ASYNCH ACTIONS End ***********/