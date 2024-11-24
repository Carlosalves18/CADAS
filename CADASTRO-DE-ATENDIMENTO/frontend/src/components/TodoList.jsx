
import React from 'react'
import { Table } from 'react-bootstrap'




const TableCadas = ({cadas, setCadas}) => {

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sargento/Cabo</th>
          <th>Equipe</th>
          <th>Concluido</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{cadas.sagentCabo}</td>
          <td>{cadas.equipe}</td>
          <td>{cadas.cocluido}</td>
          <td>{cadas.solucaoAplic}</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}

export default TableCadas;