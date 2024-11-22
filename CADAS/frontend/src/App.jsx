import React from 'react'
import Header from "./Header/Header.jsx"
import Footer from './Footer/Footer.jsx'
import Form from './Form/Form.jsx'
import { BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Form/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App