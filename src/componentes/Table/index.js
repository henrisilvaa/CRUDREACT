import React from 'react'
import './style.css'

const Table = props => (
    <table>
        <tr>
            <th>Nome</th>  
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Ações</th>
        </tr>
        {props.usuarios.map((usuario, index) => (
        <tr key={index}>
            <td>{usuario.nome}</td>  
            <td>{usuario.telefone}</td>
            <td>{usuario.email}</td>
            <td>
                <button>Editar</button>
                <button onClick={
                        () => props.excluirUsuario(index)
                    }
                >
                    Excluir
                </button>
            </td>
        </tr>
        ))}
    </table>
)

export default Table