import React from 'react';
import logo from './logo.svg';
import './App.css';
import Root from "./components/Root"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Root/>}/>
        </Routes>
    </Router>
  );
}

export default App;
