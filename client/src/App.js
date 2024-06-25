import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Translator from './components/Translator';
import History from './components/History';
import DemographyGeography from './components/DemographyGeography';
import GeneralInfo from './components/GeneralInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Traducteur</Link></li>
            <li><Link to="/history">Histoire</Link></li>
            <li><Link to="/demography-geography">Démographie et Géographie</Link></li>
            <li><Link to="/general-info">Informations Générales</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Translator />} />
          <Route path="/history" element={<History />} />
          <Route path="/demography-geography" element={<DemographyGeography />} />
          <Route path="/general-info" element={<GeneralInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
