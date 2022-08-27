import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.components.jsx';
import Andrea from './pages/andrea/Andrea.component.jsx';
import Social from './pages/social/social.component.jsx';
import Collections from './pages/collections/collections.component';
import Contemplations from './pages/contemplations/contemplations.components.jsx';
import Cinema from './pages/cinema/cinema.components.jsx';
import Contact from './pages/contact/contact.components.jsx';
import Meditations from './pages/meditations/meditations.component.jsx';

import Navigation from './components/navigation/navigation.component.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
  <Navigation />
        <Routes>
          <Route path='/' element={<Homepage />} >
            <Route exact path='/home' element={<Homepage />} />
            <Route exact path='/collections' element={<Collections />} />
            <Route exact path='/andrea' element={<Andrea />} />
            <Route exact path='/contemplations' element={<Contemplations />} />
            <Route exact path='/meditations' element={<Meditations />} />
            <Route exact path='/social' element={<Social />} />
            <Route exact path='/cinema' element={<Cinema />} />
            <Route exact path='/contact' element={<Contact />} />
          </Route>
        </Routes>
 
    </div>
  );
}

export default App;
