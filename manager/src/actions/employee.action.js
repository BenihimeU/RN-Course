import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE_FIELD,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_LIST_SUCCESS
} from "./types";
import { Actions } from 'react-native-router-flux';

export const employeeFieldUpdate = ({ property, value }) => {
  return {
    type: EMPLOYEE_UPDATE_FIELD,
    payload: { property, value }
  }
};

export const employeeCreate = ({ name, phone, shift }) => {
  return dispatch => {
    dispatch({ type: EMPLOYEE_CREATE });
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
      }
      );
  }
};

export const employeeFetch = () => {
  return dispatch => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: snapshot.val() })
      });
  }
};

export const employeeUpdate = ({ name, phone, shift, uid }) => {
  return dispatch => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        goToEmployee()
      });
  }
}

export const employeeDelete = ({ uid }) => {
  return dispatch => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        goToEmployee()
      })

  }
}

const goToEmployee = () => {
  Actions.employee({ type: 'reset' });
}