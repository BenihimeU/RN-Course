import { EMPLOYEE_UPDATE_FIELD } from "./types";

export const employeeUpdate = ({ property, value }) => {
  return{
    type: EMPLOYEE_UPDATE_FIELD,
    payload: {property, value }
  }
}