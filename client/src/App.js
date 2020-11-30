import React from "react";
import Main from "./containers/Main";
import Footer from './components/Footer.js'
import LeftNav from './components/LeftNav'
import { Container } from 'react-bootstrap'
import './css/main.css'
function App() {
  return (
    <Container className="" id="app">

      <Main />
      <Footer />

    </Container>
  );
}

export default App;
