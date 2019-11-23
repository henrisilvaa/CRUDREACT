import React from 'react'
import Button from '../Button'
import './style.css'

const Form = props => (
    <form>
      <label>Nome</label>
      <input
        type="text" 
        name="nome" 
        value={props.dadosForm.nome}
        onChange={props.pegarInformacao} 
      />
      <label>Telefone</label>
      <input 
        type="text" 
        name="telefone" 
        value={props.dadosForm.telefone}
        onChange={props.pegarInformacao} 
      />
      <label>E-mail</label>
      <input 
        type="email" 
        name="email" 
        value={props.dadosForm.email}
        onChange={props.pegarInformacao} 
      />
      {
        props.dadosForm.editar 
          ?
            <Button 
              onClick={props.salvarEditado}
            >
              Editar
            </Button>
          :
            <Button 
              onClick={props.salvarUsuario}
            >
              Salvar
            </Button> 
      }  
    </form>
)

export default Form