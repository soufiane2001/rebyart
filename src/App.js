import './App.css';
import bateau from './assets/7.png';
import logo from './assets/Logo.png';
import inst from './assets/ins.png';
import email from './assets/email.png';
import arrow from './assets/arrow.png';
import ger from './assets/Germany.png';
import fran from './assets/fran.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Header from './Header/Header';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero from './Hero/Hero';
import About from './About/About';
import Me from './Me/Me';
import Tableaux from './Tableaux/Tableaux';
import Atelier from './Atelier/Atelier';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Bateau from './Bateau/Bateau';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
function App() {

  const sectionRef = useRef(null);
  var [colorheader,setcolorheader]=useState("white")
  var updtecolorheader=()=>{setcolorheader("black")}
  return (
    <div className="App">
     <LanguageProvider>

     <Router>

<Routes>
          <Route path="/" element={<Reby />} />
          <Route path="/bateau" element={<Bateau />} />
        
  </Routes>
</Router>
</LanguageProvider>
{/*
 
*/}

    </div>
  );
}


function Reby(){

  return(
    <>
    <About/>
 <Me/>
 <Hero/>
 <Tableaux/>
<Atelier/>  
   <Contact/>
   <Footer/></>
  )
}


export default App;
