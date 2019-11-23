import React from 'react'

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
            <button 
              onClick={props.salvarEditado}
            >
              Editar
            </button>
          :
            <button 
              onClick={props.salvarUsuario}
            >
              Salvar
            </button> 
      }  
    </form>
)

export default Form