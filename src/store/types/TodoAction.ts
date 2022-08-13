import { LoadTodoAction        } from './../interfaces/todo/LoadTodoAction';
import { LoadUserErrorAction   } from './../interfaces/todo/LoadTodoErrorAction';
import { LoadUserSuccessAction } from './../interfaces/todo/LoadTodoSuccessAction';
import { SetPageAction         } from './../interfaces/todo/SetPageAction';

export type TodoAction = LoadTodoAction | LoadUserErrorAction | LoadUserSuccessAction | SetPageAction;
