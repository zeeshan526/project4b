import React from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import Services from './Components/services/Services'
import About from './Components/About/About'
import Samples from './Components/Samples/Samples'
import Footer from './Components/footer/Footer'
import './App.css';

function App() {
  return (
    <div >
   <Navbar/>
   <Home/>
   <Services/>
   <About/>
   <Samples/>
   <Footer/>
    </div>
  );
}

export default App;
