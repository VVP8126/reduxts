import UserList from "../components/lists/UserList";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1 className="centered">TypeScript and Redux example</h1>
      <UserList />
      <br/><hr />
      <div className="margined centered">
        <Link className="centeredBlock" to="todos" >See more complex example (with pagination)</Link>
      </div>
    </div>
  );
}
export default Home;
