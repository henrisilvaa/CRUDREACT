import React from 'react'
import './style.css'

const Table = props => (
    <table>
        <thead>
            <tr>
                <th>Nome</th>  
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {props.usuarios.map((usuario, index) => (
                <tr key={index}>
                    <td>{usuario.nome}</td>  
                    <td>{usuario.telefone}</td>
                    <td>{usuario.email}</td>
                    <td>
                        <button onClick={
                                () => props.editarUsuario(index)
                            }
                        >
                            Editar
                        </button>

                        <button onClick={
                                () => props.excluirUsuario(index)
                            }
                        >
                            Excluir
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default Table