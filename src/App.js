import React, { useState } from 'react';
import './App.css';
import Table from './componentes/Table'
import Form from './componentes/Form'


function App() {
  const [usuarios, setUsuarios] = useState([])
  const [form, setForm] = useState({
      editar: false,
      nome: "",
      telefone: "",
      email: ""
  })
  const [posicao, setPosicao] = useState(null)

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
    setForm({
      editar: false,
      nome: "",
      telefone: "",
      email: ""
    })
  }

  const excluirUsuario = (pos) => {
    setUsuarios(
      usuarios.filter(
        (usuario, index) => index !== pos
      )
    )
  }

  const editarUsuario = (pos) => {
    const procurarUsuario = usuarios.find(
      (usuario, index) => index === pos
    )
    setForm({
      ...procurarUsuario,
      editar: true
    })
    setPosicao(pos)
  }

  const salvarEditado = (event) => {
    event.preventDefault()
    setUsuarios(
      usuarios.map(
        (usuario, index) => index === posicao  
          ? form
          : usuario
      )
    )
    setPosicao(null)
    setForm({
      editar: false,
      nome: "",
      telefone: "",
      email: ""
    })
  }

  return (
    <div>
      <Table 
        usuarios={usuarios} 
        excluirUsuario={excluirUsuario}
        editarUsuario={editarUsuario}
      />
      <Form 
        dadosForm={form}
        pegarInformacao={pegarInformacao}
        salvarUsuario={salvarUsuario}
        salvarEditado={salvarEditado}
      />
    </div>
  );
}

export default App;
