import Navigation from './Navigation.js';
import Content from './Content.js';
import React from 'react';
import { HashRouter as Router} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Content></Content>
    </Router>
  );
}

export default App;
