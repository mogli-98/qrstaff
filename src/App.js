import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Pages/Header';
import Mainpage from './Pages/Mainpage';
import Footer from './Pages/Footer';
import Pricing from './Internalpage/Pricing';
import About from './Internalpage/About';
import Contact from './Internalpage/Contact';
import FAQ from './Internalpage/FAQ';
import Condition from './Internalpage/Condition';
import Free from './Layouts/Free';

function App() {
 
  return (
    <>
    <Router>
      <Header/>        
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path='/Condition' element={<Condition/>}/>
        <Route path="/FAQs" element={<FAQ/>}/>
        <Route path="/Free" element={<Free/>}/>

      </Routes>
      <Footer/>
    </Router>
    
      
      
    </>
  );
}


export default App;