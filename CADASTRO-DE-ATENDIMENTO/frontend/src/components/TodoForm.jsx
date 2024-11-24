import React from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const CadasForm = () => {

    const [sagentCabo, setSagentCabo] = React.useState('')
    const [equipe, setEquipe] = React.useState(null)
    const [cocluido, setConcluido] = React.useState(null)
    const [solucaoAplic, setSAplic] = React.useState(null)
    const [message, setMessage] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    const handlePost = async (event) => {

        setLoading("Carregando...")

        try {
            await axios.post("http://localhost:7777/api/cadas", {
                sagentCabo, 
                equipe,
                cocluido,
                solucaoAplic

            })
            setMessage("Cadastro adicionado com sucesso!")
            setSagentCabo('')
            setEquipe('')
            setConcluido('')
            setSAplic('')
        } catch (error) {
            setMessage("Não foi possível adicionar esse cadastro!")
            console.error(error)
        }
    }

  return (
    <Form onSubmit={handlePost}>
      <Form.Group className="mb-3" controlId='sargentCabo'>
        <Form.Label>Sargento/Cabo</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Digite o nome do Sargento ou do Cabo" 
            value={sagentCabo}
            onChange={(e) => setSagentCabo(e.target.value)}
            required />
      </Form.Group>

      <Form.Group className="mb-3" controlId='equipe'>
        <Form.Label>Equipe</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Digite o nome da equipe"
            value={equipe}
            onChange={(e) => setEquipe(e.target.value)}
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId='concluido'>
        <Form.Label>Concluido</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Sim / Não"
            value={cocluido}
            onChange={(e) => setConcluido(e.target.value)}
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId='solucaoAplic'>
        <Form.Label>Qual foi a solução aplicada?</Form.Label>
        <Form.Control 
            type="textarea" 
            placeholder="Digite qual foi a solução aplicada"
            value={solucaoAplic}
            onChange={(e) => setSAplic(e.target.value)}
            />
      </Form.Group>

      <Button type="submit">
        ENVIAR
      </Button>
      {message ? <p>{message}</p> : <p>{loading}</p>}
    </Form>
  )
}

export default CadasForm;