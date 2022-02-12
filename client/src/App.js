import React, { useEffect,useState } from 'react';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([])
 
  useEffect(()=> {
   fetch('/users')
   .then(res => {
     setUsers(res.data)
   }).catch(err => {
     console.log(err)
   })
 
  })
     return (
       <div classname="App">
         <h1>Users</h1>
         {users.map((user,index) =>
           <div key={index}>{user.name}</div>
         )}
       </div>
     );
 }
 
 export default App;