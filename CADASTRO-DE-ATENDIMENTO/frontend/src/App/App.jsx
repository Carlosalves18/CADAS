import React from 'react'
import { Container } from "react-bootstrap";
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
import CadasForm from "../components/TodoForm.jsx"
import { BrowserRouter } from "react-router-dom"


const App = () => {

  return (
    <BrowserRouter>
    <Header/>
    <Container>
        <CadasForm />
    </Container>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;