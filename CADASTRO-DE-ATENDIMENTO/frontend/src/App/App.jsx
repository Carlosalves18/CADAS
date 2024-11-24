import React from 'react'
import { Container } from "react-bootstrap";
import axios from 'axios';

import CadasForm from "../components/TodoForm.jsx"
import TableCadas from "../components/TodoList.jsx"

const App = () => {

  const [cadas, setcadas] = React.useState([])

  const handleGetList = async () => {
    try {
      const response = await axios.get("http://localhost:7777/api/cadas")
      setcadas(response.data.cadas)
    } catch(error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    handleGetList()
  }, [])

  return (
    <Container>
        <CadasForm />
        <TableCadas  cadas={cadas} setcadas={setcadas}/>
    </Container>
  )
}

export default App;