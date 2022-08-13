import { LoadUserAction } from "./../interfaces/user/LoadUserAction";
import { LoadUserErrorAction } from "./../interfaces/user/LoadUserErrorAction";
import { LoadUserSuccessAction } from "./../interfaces/user/LoadUserSuccessAction";

// Define custom type that unites three unterfaces
export type UserAction = LoadUserAction | LoadUserSuccessAction | LoadUserErrorAction;
