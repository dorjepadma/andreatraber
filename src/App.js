import { Routes, Route} from 'react-router-dom';
import Homepage from './routes/homepage/homepage.component';
import Andrea from './routes/andrea/Andrea.component';
import Social from './routes/social/social.component';
import Collections from './routes/collections/collections.component';
import Contemplations from './routes/contemplations/contemplations.component';
import Cinema from './routes/cinema/cinema.component';
import Contact from './routes/contact/contact.component';
import Meditations from './routes/meditations/meditations.component';
import Authentication from './routes/authenticationPage/Authentication.component'
import Elements from './routes/paintings/elements/elements.component';
import Paintings from './routes/paintings/painting/painting.component'

import Navigation from './components/navigation/navigation.component';
import './App.css';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Navigation />} >
            <Route index element={<Homepage />} />
            <Route exact path='home' index element={<Homepage />} />
            <Route path='/collections' index element={<Collections />} />
            <Route path='/andrea' index element={<Andrea />} />
            <Route path='/contemplations' index element={<Contemplations />} />
            <Route path='/meditations' index element={<Meditations />} />
            <Route path='/social' index element={<Social />} />
            <Route path='/cinema' index element={<Cinema />} />
            <Route path='/contact' index element={<Contact />} />
            <Route path='signIn' index element={<Authentication />}/>
            <Route path='Elements' index element={<Elements />}/>
            <Route path='Paintings/*' index element={<Paintings />}/>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
