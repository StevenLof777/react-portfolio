import { About, Footer, Header, Skills, Work } from "./container";
import {Helmet} from 'react-helmet'
import React from 'react'

export const Home = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Steven Lofquist</title>
      <link rel="canonical" href="http://stevenlofquist.com/" />
    </Helmet>
        <Header/>
        <About/>
        <Skills/>
        <Work/>
        <Footer/>
    </>
  )
}