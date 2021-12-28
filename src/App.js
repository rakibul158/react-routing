import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<NoMatch/>}/>

        </Routes>
    </Router>
  );
}

export default App;
