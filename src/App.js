import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPaage/LandingPage';
import Histogram from './Components/Histogram/Histogram';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/histogram' element={<Histogram/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
