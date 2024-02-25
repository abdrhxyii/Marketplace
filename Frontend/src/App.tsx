import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Productdetails from './Components/Product-Details/Productdetails';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import './App.css'
import './index.css'

function App() {

  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Productdetails/>}/>
      <Route path='/auth/login' element={<Login/>}/>
      <Route path='/auth/register' element={<Signup/>}/>
    </Routes>
    </>
  )
}


export default App
