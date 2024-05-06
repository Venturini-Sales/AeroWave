import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { NotFound } from './pages/notFound/Not_Found'
import { Home } from './pages/home/Home';
import { AboutUs } from './pages/aboutUs/About_Us'
import { OurProducts } from './pages/ourProducts/Our_Products';
import { AlbumPage } from './pages/albumPage/Album_Page';



function App() {
  
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
