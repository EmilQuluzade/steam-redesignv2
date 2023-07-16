import React, { useState, useEffect } from 'react';
import './App.css';
import AboutSteam from './Components/Pages/AboutSteam';
import Store from './Components/Pages/Store';
import Footer from './Components/Parts/Footer';
import Navbar from './Components/Parts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Privacy from './Components/Pages/Privacy';
import Legal from './Components/Pages/Legal';
import Refunds from './Components/Pages/Refunds';
import Signup from './Components/Pages/Signup.jsx';
import Categories from './Components/Pages/Categories';
import NotFound from './Components/Pages/NotFound';


const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? ( // Show the loader while loading is true
        <div className="loader-container">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        // Show the content after loading is false
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Store />} />
              <Route path="/aboutsteam" element={<AboutSteam />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/legal' element={<Legal />} />
              <Route path='/refunds' element={<Refunds />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/categories" element={<Categories />} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
