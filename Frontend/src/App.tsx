import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Productdetails from './Components/Product-Details/Productdetails';
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth'
import './App.css'
import './index.css'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Productdetails/>}/>
      <Route path='/authentication' element={<Auth/>}/>
    </Routes>
    </>
  )
}


export default App
