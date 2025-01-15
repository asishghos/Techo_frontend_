import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import AboutUsPage from './Pages/AboutUsPage';
import ContactPage from './Pages/ContactPage';
import ServicesPage from './Pages/ServicesPage';
import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';

const App = () => {
  return (
    <Router>
      <NavBar /> {/* Add NavBar component here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="*" element={<NotFound />} /> Catch-all route */}
      </Routes>
      <Footer /> {/* Add Footer component here */}
    </Router>
  );
};

export default App;