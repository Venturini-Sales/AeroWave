import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { NotFound } from './pages/Not_Found'
import { Home } from './pages/Home';
import { AboutUs } from './pages/About_Us'
import { OurProducts } from './pages/Our_Products';
import { AlbumPage } from './pages/Album_Page';



function App() {

  useEffect(() => {
    const lockOrientation = () => {
      if (screen.orientation.lock) {
        screen.orientation.lock('portrait'); 
      }
    };

    lockOrientation(); 
    return () => {
      if (screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    };
  }, []);


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/> 
      <Route path='/OurProducts' element={<OurProducts/>}/> 
      <Route path="/OurProducts/:album" element={<AlbumPage/>} />
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
