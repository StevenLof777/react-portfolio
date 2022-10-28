import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home, DopeHoroscope } from "./pages"
import { Navbar } from "./components"
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
          <div className='app'>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dopehoroscope" element={<DopeHoroscope/>}/>
              </Routes>
          </div>
    </BrowserRouter>
  )
}

export default App;