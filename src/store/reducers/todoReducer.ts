import { TodoState } from "../interfaces/todo/TodoState";
import { TodoAction } from "../types/TodoAction";
import {TodosActionTypes} from "./../../utils/constants";

// Typed state
const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    limit: 10,
    page: 1
}; 

// Fully typed reducer with own action types
export const todoReducer = (state:TodoState = initialState, action:TodoAction):TodoState => {
    switch (action.type) {
        case TodosActionTypes.LOAD_TODOS: 
            return {...state, loading:true} // shorter than:  {todos: [], loading: true, error: null, limit:state.limit, page:state.page};
        case TodosActionTypes.LOAD_TODOS_SUCCESS: 
            return {...state, loading:false, error:null, todos:action.payload} // shorter than: {todos: action.payload, loading: false, error: null, limit:state.limit, page:state.page};
        case TodosActionTypes.LOAD_TODOS_ERROR: 
            return {...state, loading:false, error:action.payload} // shorter than: {todos: state.todos, loading: false, error: action.payload, limit:state.limit, page:state.page};
        case TodosActionTypes.SET_PAGE:
            return {...state, page:action.payload}// shorter than: {todos: state.todos, loading: false, error: null, limit:state.limit, page:action.payload};
        default:
            return state;
    }
}
