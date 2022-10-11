import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "./pages/Home"
import { Navbar } from "./components"
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
          <div className='app'>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
              </Routes>
          </div>
    </BrowserRouter>
  )
}

export default App