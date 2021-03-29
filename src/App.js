import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import './App.css';

function App() {
  const [users,setUsers] = useState([]);
// const API_KEY = 'a14a734950ed43f096f4ad0d827aa987896e3a17';
  useEffect(() => {
    fetch('https://api.github.com/users')
    .then(response =>response.json())
    .then (data => {
      setUsers(data) // set users in state
    console.log(data)

    });
  }, [])

  return (
    <div className="container">
     <Navbar/> 
     <div className="users">
     {users.map((user)=>{
       return <Users key={user.id} {...user}/>
     })}  
     </div>
    </div>
  );
}

export default App;
