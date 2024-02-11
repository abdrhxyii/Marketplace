import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Productdetails from './Components/Product-Details/Productdetails';
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import './index.css'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Productdetails/>}/>
    </Routes>
    </>
  )
}


export default App
