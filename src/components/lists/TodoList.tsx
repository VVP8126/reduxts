import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Pagination from "../pagination/Pagination";

const TodoList: React.FunctionComponent = () => {
  
  const {todos, error, loading, page} = useTypedSelector(state => state.todo);
  const { loadTodos } = useActions();
  
  useEffect(
    () => { loadTodos(page) },
    [page]
  );
  
  if(loading) {
    return <h2 className="centered">Loading...</h2>
  }
  
  if(error) {
    return <h2 className="centered">{error}</h2>
  }
  
  return (
    <div>
        <h1 className="centered">TODO LIST</h1>
        <Pagination />
        <h3 className="loadedElementsInfo">Loaded elements: {todos[0] && todos[0].id} - {todos[todos.length-1] && todos[todos.length-1].id}</h3>
        {todos.map(todo => <p key={todo.id} className="largeFontSize">{todo.id}. {todo.title}</p>)}
    </div>
  );
}
export default TodoList;
