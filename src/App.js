import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/sidebar";
import Hero from "./components/hero";
import Contact from "./components/contact";

function App() {
  return (
      <div id="colorlib-page">
          <div className='container-wrap'>
            <Sidebar />
            <div id='colorlib-main'>
                <Hero />
                <Contact />
            </div>
          </div>
      </div>
  );
}

export default App;
