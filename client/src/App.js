import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home, Project } from "./pages"
import { Navbar } from "./components"
import "./App.scss";

import { DopeHoroscopeContext } from './context/context';

const App = () => {
  return (
    <BrowserRouter>
          <div className='app'>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>

                <DopeHoroscopeContext.Provider>
                  <Route path="/dopehoroscope" element={<Project key={""}/>}/>
                </DopeHoroscopeContext.Provider>

              </Routes>
          </div>
    </BrowserRouter>
  )
}

export default App;