import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import LandingPage from './page/LandingPage';
import Login from './page/Auth/Login';
import Register from './page/Auth/Register';
import Profile from './page/Profile';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
