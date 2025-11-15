import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home'
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Apprendre from "./pages/Apprendre";

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Test" element={<Test/>}/>
          <Route path="/Apprendre" element={<Apprendre/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
