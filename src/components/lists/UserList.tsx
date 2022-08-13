import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const UserList: React.FunctionComponent = () => {
  
  const {users, error, loading} = useTypedSelector(state => state.user);
  const { loadUsers } = useActions();
  
  useEffect(
    () => { loadUsers() },
    []
  );
  
  if(loading) {
    return <h2 className="centered">Loading...</h2>
  }
  
  if(error) {
    return <h2 className="centered">{error}</h2>
  }
  
  return (
    <div>
        {users.map(user => <p key={user.id} className="largeFontSize">{user.id}. {user.name} {user.username}</p>)}
    </div>
  );
}
export default UserList;
