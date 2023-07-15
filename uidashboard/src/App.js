import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './component/Signin';
import { Route, Routes } from 'react-router-dom'
import Inout from './component/Inout';
import Emails from './component/Emails';
import Dashboard from './component/Dashboard';
import React, {useState} from 'react';
import Charts from './component/Charts';
import '@progress/kendo-theme-default/dist/all.css';



function App() {



  return (

    <>
      
      <Routes>
        <Route path="/" element={<Signin  />} exect />
        <Route path="/Inout" element={<Inout />} exect />
        <Route path="/Signin" element={<Signin />} />
        <Route path="me" element={<Signin />} />
        <Route path="/Emails" element={<Emails />} />
        <Route path="/dashboard" element={<Dashboard />}  />
        <Route path="/charts" element={<Charts />}  />
      </Routes>


    </>

  );
}

export default App;
