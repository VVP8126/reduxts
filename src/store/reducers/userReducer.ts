import { UserActionTypes } from "../../utils/constants";
import { UserAction } from "../types/UserAction";
import { userState } from "../interfaces/user/UserState";

// Typed state
const initialState: userState = {
    users: [],
    loading: false,
    error: null
};

// Fully typed reducer with own action types
export const userReducer = (state = initialState, action:UserAction):userState => {
    switch (action.type) {
        case UserActionTypes.LOAD_USERS: 
            return {users: [], loading: true, error: null};
        case UserActionTypes.LOAD_USERS_SUCCESS: 
            return {users: [...state.users, ...action.payload], loading: false, error: null};
        case UserActionTypes.LOAD_USERS_ERROR: 
            return {users: state.users, loading: false, error: action.payload};
        default:
            return state;
    }
}
