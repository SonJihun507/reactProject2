import { useState } from 'react'
import './App.css'
import styled from "styled-components"
import GlobalStyle from './GlobalStyle'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import DetailPage from './pages/Home'







function App() {
  
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/DetailPage' element = {<DetailPage />} />
        </Routes>
      </BrowserRouter>
  
      <GlobalStyle />
      
      
    </>
  )
}

export default App
