import './App.css';
import Store from './Components/Pages/Store';
import Navbar from './Components/Parts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Store/>
    </div>
  );
}

export default App;
