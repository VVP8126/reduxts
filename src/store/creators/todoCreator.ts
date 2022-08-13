import axios from "axios";
import { Dispatch } from "redux";
import { TodosActionTypes } from "../../utils/constants";
import { TodoAction } from "../types/TodoAction";

export const loadTodos = (page = 1, limit=10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch( { type: TodosActionTypes.LOAD_TODOS } );
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`,
        {params: {_page:page, _limit:limit}});
      setTimeout(() => {
        dispatch( { type: TodosActionTypes.LOAD_TODOS_SUCCESS, payload: response.data } );
        // console.log(response.headers["x-total-count"]); // total todos ammount/count
      }, 500);
    }
    catch(e) {
      dispatch({
        type: TodosActionTypes.LOAD_TODOS_ERROR, 
        payload: "Error while loading todos from server !"
      });
    }
  }
}

export const setPage = (page:number):TodoAction => {
    return {type:TodosActionTypes.SET_PAGE, payload:page}
}
