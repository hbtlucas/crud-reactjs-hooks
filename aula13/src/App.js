import './App.css';
import React, { useState } from 'react';
import Home from './components/home';
import Add from './components/add';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DadosTable from './components/dadostable';

const App = () => {
  const [dadosTable, setDadosTable] = useState(DadosTable);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home dadosTable={dadosTable} setDadosTable={setDadosTable} />} />
          <Route path='/create' element={<Add dadosTable={dadosTable} setDadosTable={setDadosTable} />} />
          <Route path='/edit' element={<Edit dadosTable={dadosTable} setDadosTable={setDadosTable} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;