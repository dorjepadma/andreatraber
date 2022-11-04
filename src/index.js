import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import { UserProvider } from './Context/user.context';
import { PaintingsProvider } from './Context/paintings.context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PaintingsProvider>
            <App />
        </PaintingsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

