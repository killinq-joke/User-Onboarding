import React, { useState } from 'react';
import './App.css';
import NormalForm from './NormalForm';

function App() {
  const [users, setUsers] = useState([]);
  // console.log(users)
  
  return (
    <div className="App">
      <NormalForm users={users} setUsers={setUsers}/>
      {users.map(user => {
        return(
          <div>
          <h2>name: {user.name}</h2>
          <h2>email: {user.email}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
