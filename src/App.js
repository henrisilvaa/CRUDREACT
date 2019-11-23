import React, { useState } from 'react';
import './App.css';
import Table from './componentes/Table'
import Form from './componentes/Form'


function App() {
  const [usuarios, setUsuarios] = useState([])
  const [form, setForm] = useState({})

  const pegarInformacao = (event) => {
    const valor = event.target.value
    const name = event.target.name
    setForm({
      ...form,
      [name]: valor
    })
  }

  const salvarUsuario = (event) => {
    event.preventDefault()
    setUsuarios([
      ...usuarios,
      form
    ])
    setForm({})
  }

  const excluirUsuario = (pos) => {
    setUsuarios(
      usuarios.filter(
        (usuario, index) => index !== pos
      )
    )
  }

  return (
    <div>
      <Table 
        usuarios={usuarios} 
        excluirUsuario={excluirUsuario}
      />
      <Form 
        key={usuarios.length}
        pegarInformacao={pegarInformacao}
        salvarUsuario={salvarUsuario}
      />
    </div>
  );
}

export default App;
