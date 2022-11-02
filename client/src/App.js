import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home, DopeHoroscope } from './pages/'
import { Navbar } from "./components"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='dopehoroscope' element={<DopeHoroscope/>}/>
        </Routes>
    </Router>
  )
}

export default App;