import {TodosActionTypes} from './../../../utils/constants';

export interface LoadUserErrorAction {
    type: TodosActionTypes.LOAD_TODOS_ERROR,
    payload: string
}
