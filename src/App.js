import React from 'react';
import { AboutUs, Chef,Footer, Gallery, Header, Intro, SpecialMenu } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className='App'>
    <div className='app__bg'>
    <Navbar />
    <Header />
    </div>
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Gallery />
    <Footer />
  </div>
);
export default App;