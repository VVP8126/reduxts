import {TodosActionTypes} from '../../../utils/constants';

export interface LoadUserSuccessAction {
    type: TodosActionTypes.LOAD_TODOS_SUCCESS,
    payload: any[]
}
