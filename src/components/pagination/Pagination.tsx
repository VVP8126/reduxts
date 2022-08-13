import React, { useState } from "react";
import {useTypedSelector} from "./../../hooks/useTypedSelector";
import {useActions} from "./../../hooks/useActions";

const Pagination: React.FunctionComponent = () => {
  
  const { page } = useTypedSelector(state => state.todo);
  const { setPage } = useActions();

  let i = 0, arr = [];
  while(i < 20) {
    arr[i] = i + 1;
    i++;
  }

  return (
    <div className="paginationBar">
      { 
        arr.map(x => <div key={x} onClick={() => setPage(x)} className={x == page ? "paginationItem active" : "paginationItem"}>{x}</div>)
      }
    </div>
  );
}
export default Pagination;
