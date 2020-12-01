import React from "react";
import Main from "./containers/Main";
import Footer from './components/Footer.js'
import LeftNav from './components/LeftNav'
import { Container } from 'react-bootstrap'
import './css/main.css'
function App() {
  return (
    <div className="app" id="app">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
