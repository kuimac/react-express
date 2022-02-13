import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import NoMatch from './routes/nomatch';

import Home from "./routes/home";
import Users from "./routes/users";
import Todos from './routes/todos';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
};

export default App;
