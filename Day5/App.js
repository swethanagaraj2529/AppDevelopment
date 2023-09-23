import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Sign from './Sign';
import Home from './Home';
import Claim from './Claim';
import Report from './Report';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="sign" element={<Sign/>}></Route>
                <Route path="/claims" element={<Claim/>}></Route>
                <Route path="/report" element={<Report/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
