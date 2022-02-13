import React, { useEffect, useState } from "react";

function Users() {
  const url = "/todos";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      // id,name
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
        console.log("err");
      });
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      {todos.map((todo, index) => (
        <div key={index}>{todo.name}</div>
      ))}
    </div>
  );
}

export default Users;
