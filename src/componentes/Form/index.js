import React from 'react'

const Form = props => (
    <form key={props.key}>
        <label>Nome</label>
        <input
          type="text" 
          name="nome" 
          onChange={props.pegarInformacao} 
        />
        <label>Telefone</label>
        <input 
          type="text" 
          name="telefone" 
          onChange={props.pegarInformacao} 
        />
        <label>E-mail</label>
        <input 
          type="email" 
          name="email" 
          onChange={props.pegarInformacao} 
        />
        <button onClick={props.salvarUsuario}>Salvar</button>
    </form>
)

export default Form