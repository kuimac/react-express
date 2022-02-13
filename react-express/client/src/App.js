import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./routes/home";
import Users from "./routes/users";
import NoMatch from './routes/nomatch';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
