
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Sign from './Sign';
import Home from './Home';
import Claim from './Claim';
import Report from './Report';
import Dashboard from './Dashboard';
import Privacy from './Privacy';
import UserHome from './UserHome';
import Policy from './Policy';
import Individual from './Individual';
import ClaimPro from './ClaimPro';
import ClaimIn from './Claimin';
import ClaimS from './ClaimS';
import ClaimUp from './Claimup';
import Pay from './Pay';
import ClaimAdmin from './ClaimAdmin';
import LoginAdmin from './LoginAdmin';
import Condition from './Condition';
import Faq from './Faq';
import Navbar from './Navbar';
import { NavLink } from "./MyConstant.jsx";
import Popup from './Popup';

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
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/privacy" element={<Privacy/>}></Route>
                <Route path="/user" element={<UserHome/>}></Route>
                <Route path='/policy' element={<Policy/>}></Route>
                <Route path='/indi' element={<Individual/>}></Route>
                <Route path='/claimpro' element={<ClaimPro/>}></Route>
                <Route path='/claimin' element={<ClaimIn/>}></Route>
                <Route path='/claimst' element={<ClaimS/>}></Route>
                <Route path='/claimup' element={<ClaimUp/>}></Route>
                <Route path='/pay' element={<Pay/>}></Route>
                <Route path='/claimadmin' element={<ClaimAdmin/>}></Route>
                <Route path='/loginadmin' element={<LoginAdmin/>}></Route>
                <Route path='/conditions' element={<Condition/>}></Route>
                {/* <Route path='/faq' element={<Faq/>}></Route> */}
                <Route path='/nav' element={<Navbar/>}></Route>
                <Route path='/pop' element={<Popup/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
