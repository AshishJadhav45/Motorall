import React from 'react';
import { BrowserRouter as Router, Route, Routes, UNSAFE_DataRouterContext } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Mech from './pages/mech'
import Sales from './pages/sales'
import Electrical from './pages/Electrical';
import './index.css';






function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mech" element={<Mech />} />
          <Route path="/Electrical" element={<Electrical />} />
          <Route path="/sales" element={<Sales />} />
          


          
        </Routes>
        < Footer/>
        
        
      </div>
    </Router>
  );
  
}

export default App;
