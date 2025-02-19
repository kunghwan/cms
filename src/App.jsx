import StuForm from "./CMS/StuForm.jsx";
import StuItem from "./CMS/StuItem";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <ul>
        {users.map((user, index) => {
          return (
            <StuItem
              key={user.studentid}
              index={index}
              user={user}
              users={users}
              setUsers={setUsers}
            />
          );
        })}
      </ul>
      <StuForm setUsers={setUsers} users={users} />
    </div>
  );
};

export default App;
