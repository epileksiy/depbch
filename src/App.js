import { BrowserRouter, Route, Routes, Link,useLocation} from "react-router-dom";
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Letters from "./Components/Letters";
import './App.scss';
import Retrospect from "./Components/Retrospect";
import Team from "./Components/Team";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Main/>
          }>
          </Route>
          <Route path="/letters" element={
            <Letters/> 
          }>
          </Route>
          <Route path="/retrospect" element={
            <Retrospect/> 
          }>
          </Route>
          <Route path="/team" element={
            <Team/> 
          }>
          </Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
