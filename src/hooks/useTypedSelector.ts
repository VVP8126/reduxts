import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/types/RootState";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
