import { About, Footer, Header, Skills, Work } from "./container";

import React from 'react'

export const Home = () => {
  return (
    <>
        <Header/>
        <About/>
        <Skills/>
        <Work/>
        <Footer/>
    </>
  )
}

export default Home;