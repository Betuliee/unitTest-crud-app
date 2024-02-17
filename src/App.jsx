import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  const [users, setUsers] = useState([
    {
      name: 'Sara',
      mail: 'sara60@gmail.com',
      age: 60,
    },
    {
      name: 'Vasco',
      mail: '	vasco@gmail.com',
      age: 30,
    },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="container">
      <h2 className="text-center my-5">Kullanıcı Paneli</h2>
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
};

export default App;
