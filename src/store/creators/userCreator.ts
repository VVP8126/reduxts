import axios from "axios";
import { Dispatch } from "redux";
import { UserActionTypes } from "../../utils/constants";
import { UserAction } from "../types/UserAction";

export const loadUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch( { type: UserActionTypes.LOAD_USERS } );
      const response = await axios.get("http://jsonplaceholder.typicode.com/users");
      setTimeout(() => {
        dispatch( { type: UserActionTypes.LOAD_USERS_SUCCESS, payload: response.data } );
      }, 500);
    }
    catch(e) {
      dispatch({
        type: UserActionTypes.LOAD_USERS_ERROR, 
        payload: "Error while data loading from server !"
      });
    }
  }
}