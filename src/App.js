// En App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './components/Home'; // Asegúrate de que la importación sea correcta
import Contacto from './components/Contacto';
import Catalogo from './components/Catalogo';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
