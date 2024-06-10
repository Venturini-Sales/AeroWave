import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { NotFound } from './pages/notFound/Not_Found'
import { Home } from './pages/home/Home';
import { AboutUs } from './pages/aboutUs/About_Us'
import { OurProducts } from './pages/ourProducts/Our_Products';
import { MyAccount } from './pages/myAccount/My_Account';
import { AlbumPage } from './pages/albumPage/Album_Page';
import { AuthProvider, AuthContext } from './contexts/auth';
import useAuth from './hooks/useAuth';

const PrivateRoute = ({ element: Element }) => {
  const { signed } = useAuth();

  return signed ? <Element /> : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourProducts" element={<OurProducts />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path='/OurProducts' element={<OurProducts />} />
        <Route path="/OurProducts/:album" element={<AlbumPage />} />
        <Route path="/MyAccount" element={<PrivateRoute element={MyAccount} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer/>
    </AuthProvider>
  );
}

export default App;
