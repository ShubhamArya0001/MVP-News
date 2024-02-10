
import './App.css';
import React, { useState } from 'react'
import NavBar from './component/NavBar';
import News   from './component/News';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
 const page  = 5;
 const[progress,setProgress] = useState(0);
    return (
      <div>
        <BrowserRouter>
            <NavBar />
            <LoadingBar
            height= {4}
        color='#f11946'
        progress={progress}
        
      />
          <Routes>
            <Route exact path='/'           element={<News  setProgress ={setProgress}  countries={'in'} page={page} category="general" />} />
            <Route exact path='/business'   element={<News  setProgress ={setProgress}  key="business" countries={'in'} page={page} category="business" />} />
            <Route path= '/health'          element={<News  setProgress ={setProgress}  key="health" countries={'in'} page={page} category="health" />} />
            <Route exact path='/general'    element={<News  setProgress ={setProgress}  key="general" countries={'in'} page={page} category="general" />} />
            <Route exact path='/entertainment' element={<News  setProgress ={setProgress}  key="entertainment" countries={'in'} page={page} category="entertainment" />} />
            <Route exact path='/science'    element={<News  setProgress ={setProgress}  key="scinece" countries={'in'} page={page} category="science" />} />
            <Route exact path='/sports'     element={<News  setProgress ={setProgress}  key="sports" countries={'in'} page={page} category="sports" />} />
            <Route exact path='/technology' element={<News  setProgress ={setProgress}  key="technology" countries={'in'} page={page} category="technology" />} />

          </Routes>
        </BrowserRouter>
      </div>
    )
  }

export default App;
