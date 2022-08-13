import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import Creator from "./../store/creators/creators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Creator, dispatch);
}
