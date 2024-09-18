import './App.css';
import React from 'react';
import Home from './components/home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;