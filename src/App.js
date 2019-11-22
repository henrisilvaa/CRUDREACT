import React, { useState } from 'react';
import './App.css';

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
  return (
    <div>
      <table>
        <tr>
          <th>Nome</th>  
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
        {usuarios.map((usuario, index) => (
          <tr key={index}>
            <td>{usuario.nome}</td>  
            <td>{usuario.telefone}</td>
            <td>{usuario.email}</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        ))}
      </table>
      <form key={usuarios.length}>
        <label>Nome</label>
        <input
          type="text" 
          name="nome" 
          onChange={pegarInformacao} 
        />
        <label>Telefone</label>
        <input 
          type="text" 
          name="telefone" 
          onChange={pegarInformacao} 
        />
        <label>E-mail</label>
        <input 
          type="email" 
          name="email" 
          onChange={pegarInformacao} 
        />
        <button onClick={salvarUsuario}>Salvar</button>
      </form>
    </div>
  );
}

export default App;
