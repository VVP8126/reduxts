import { TodosActionTypes } from './../../../utils/constants';

export interface SetPageAction {
    type: TodosActionTypes.SET_PAGE,
    payload: number,
}
