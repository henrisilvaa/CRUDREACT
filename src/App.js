import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <table>
        <tr>
          <th>Nome</th>  
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
        <tr>
          <td>Henrique</td>  
          <td>951783899</td>
          <td>teste@teste.com</td>
          <td>
            <button>Editar</button>
            <button>Excluir</button>
          </td>
        </tr>
        <tr>
          <td>Alexandre</td>  
          <td>11111111111</td>
          <td>teste@teste.com</td>
          <td>
            <button>Editar</button>
            <button>Excluir</button>
          </td>
        </tr>
      </table>
      <form>
        <label>Nome</label>
        <input type="text" />
        <label>Telefone</label>
        <input type="text" />
        <label>E-mail</label>
        <input type="email" />
        <button>Salvar</button>
      </form>
    </div>
  );
}

export default App;
