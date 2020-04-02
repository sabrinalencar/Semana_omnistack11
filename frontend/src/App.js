/**
 * Componente no react é uma funcao que retorna HTML
 * Quando temos html integrado em um arquivo js chamamos de JSX (JavaScript XML) 
 */
/**
 * Toda vez que um componente precisar armazenar uma informação  dentro dele 
 * não cria-se uma variavel comum e sim um estado.
 */
import React from 'react';
import './global.css';
import Routes from './routes';
function App() {
  
  return (
    <Routes/>
  );
}

export default App;
