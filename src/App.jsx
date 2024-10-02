// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useEffect, useState } from 'react';
import './App.css'
import Contact from './Componant/contact/Contact';
import Footer from './Componant/Footer/Footer';
import Header from './Componant/Header/Header';
import Hero from './Componant/herosec/Hero';
import Main from './Componant/Main/Main';
import Scroll from './Componant/scrool/Scrooll';


function App() {

  return (
    <div id='up' className='contaner'>
      <Header/>
      <Hero/>
      <div className='dived'></div>
      <Main/>
      <div className='dived'></div>
      <Contact/>
      <div className='dived'></div>
      <Footer/>
      <Scroll/>

    </div>
  );
}

export default App ;
