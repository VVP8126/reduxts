import {UserActionTypes} from './../../../utils/constants';

export interface LoadUserErrorAction {
    type: UserActionTypes.LOAD_USERS_ERROR,
    payload: string
}
