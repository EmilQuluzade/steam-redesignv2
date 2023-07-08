import './App.css';
import AboutSteam from './Components/Pages/AboutSteam';
import Store from './Components/Pages/Store';
import Footer from './Components/Parts/Footer';
import Navbar from './Components/Parts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Store/>}/>
        <Route path='/aboutsteam' element={<AboutSteam/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
