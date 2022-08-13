import {UserActionTypes} from '../../../utils/constants';

export interface LoadUserSuccessAction {
    type: UserActionTypes.LOAD_USERS_SUCCESS,
    payload: any[]
}
