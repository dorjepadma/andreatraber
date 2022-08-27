import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
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

        <Routes>
          <Route path='/' element={<Navigation />} >
            <Route index element={<Homepage />} />
            <Route path='home' index element={<Homepage />} />
            <Route exact path='/collections' index element={<Collections />} />
            <Route exact path='/andrea' index element={<Andrea />} />
            <Route exact path='/contemplations' index element={<Contemplations />} />
            <Route exact path='/meditations' index element={<Meditations />} />
            <Route exact path='/social' index element={<Social />} />
            <Route exact path='/cinema' index element={<Cinema />} />
            <Route exact path='/contact' index element={<Contact />} />
          </Route>
        </Routes>

    </div>
  );
}

export default App;
