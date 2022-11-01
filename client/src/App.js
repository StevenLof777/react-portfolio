import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from "./pages"
import { Project } from './pages'
import { Navbar } from "./components"
import "./App.scss";

import { DopeHoroscopePageData } from './data'

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='dopehoroscope' element={<Project projectObj={DopeHoroscopePageData} />}/>
        </Routes>
    </Router>
  )
}

export default App;