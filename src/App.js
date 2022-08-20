import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.components.jsx';
import Navigation from './pages/navigation/navigation.component.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route path='/' index element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
