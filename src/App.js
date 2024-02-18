import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import MulNews from './Components/MulNews';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App =()=>{
 const pageSize= 15;
 const apikey=process.env.API_KEY;

  const [progress,setProgress]= useState(0);


    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
        height={2}
        color='#f11946'
        progress={progress}
       
      />
          <Routes>
            <Route path="/" element={<MulNews apikey={apikey} setProgress={setProgress} key="sports" pageSize={pageSize} county='in' category='sports'/>} />
            <Route path="/business" element={<MulNews apikey={apikey} setProgress={setProgress} key="business" pageSize={pageSize} county='in' category='business'/>} />
            <Route path="/entertainment" element={<MulNews apikey={apikey} setProgress={setProgress} key="entertainment" pageSize={pageSize} county='in' category='entertainment'/>} />
            <Route path="/general" element={<MulNews apikey={apikey} setProgress={setProgress} key="general" pageSize={pageSize} county='in' category='general'/>} />
            <Route path="/health" element={<MulNews apikey={apikey} setProgress={setProgress} key="health" pageSize={pageSize} county='in' category='health'/>} />
            <Route path="/science" element={<MulNews apikey={apikey} setProgress={setProgress} key="science" pageSize={pageSize} county='in' category='science'/>} />
            <Route path="/sports" element={<MulNews apikey={apikey} setProgress={setProgress} key="sports" pageSize={pageSize} county='in' category='sports'/>} />
            <Route path="/technology" element={<MulNews apikey={apikey} setProgress={setProgress} key="technology" pageSize={pageSize} county='in' category='technology'/>} />
          </Routes>
        </Router>
      </>  
    )
  
}

export default App
