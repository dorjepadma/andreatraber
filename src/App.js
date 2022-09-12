import { Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Andrea from './pages/andrea/Andrea.component';
import Social from './pages/social/social.component';
import Collections from './pages/collections/collections.component';
import Contemplations from './pages/contemplations/contemplations.component';
import Cinema from './pages/cinema/cinema.component';
import Contact from './pages/contact/contact.component';
import Meditations from './pages/meditations/meditations.component';

import Navigation from './components/navigation/navigation.component';
import './App.css';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Navigation />} >
            <Route index element={<Homepage />} />
            <Route path='home' index element={<Homepage />} />
            <Route path='/collections' index element={<Collections />} />
            <Route path='/andrea' index element={<Andrea />} />
            <Route path='/contemplations' index element={<Contemplations />} />
            <Route path='/meditations' index element={<Meditations />} />
            <Route path='/social' index element={<Social />} />
            <Route path='/cinema' index element={<Cinema />} />
            <Route path='/contact' index element={<Contact />} />
          </Route>
        </Routes>

    </div>
  );
}

export default App;
