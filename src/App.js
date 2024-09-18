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

function App() {

  const sectionRef = useRef(null);
  var [colorheader,setcolorheader]=useState("white")
  var updtecolorheader=()=>{setcolorheader("black")}
  return (
    <div className="App">
     
 <About/>
 <Me/>
 <Hero/>
 <Tableaux/>
<Atelier/>  
   <Contact/>
   <Footer/>


    </div>
  );
}



export default App;
