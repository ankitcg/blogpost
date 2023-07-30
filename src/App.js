import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import User from './component/User';
import Register from './component/Register';
import AdminLogin from './component/AdminLogin';
import Login from './component/Login';
import Footer from './component/Footer';
import DemoBlog from './component/DemoBlog';
import Write from './component/Write';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/demoblog' element={<DemoBlog/>}/>
      <Route path='/write' element={<Write/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
