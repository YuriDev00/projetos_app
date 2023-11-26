import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros.ts';
import ControleEditora from './controle/ControleEditora.ts';

import './App.css'

const controladorLivros = new ControleLivros();
const controladorEditora = new ControleEditora();

function LinhaLivro({ livro, excluir }) {
  const nomeEditora = controladorEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.título}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>{livro.autores.join(', ')}</td>
      <td><button onClick={() => excluir(livro.codigo)}>Excluir</button></td>
      
      
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const excluir = (codigoLivro) => {
    controladorLivros.excluir(codigoLivro);
    setCarregado(false);
  };

  useEffect(() => {
    if (!carregado) {
      const livrosObtidos = controladorLivros.obterLivros();
      setLivros(livrosObtidos);
      setCarregado(true);
    }
  }, [carregado]);

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
}