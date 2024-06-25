import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
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
            <li><NavLink to="/" exact activeClassName="active">Traducteur</NavLink></li>
            <li><NavLink to="/history" activeClassName="active">Histoire</NavLink></li>
            <li><NavLink to="/demography-geography" activeClassName="active">Démographie et Géographie</NavLink></li>
            <li><NavLink to="/general-info" activeClassName="active">Informations Générales</NavLink></li>
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
