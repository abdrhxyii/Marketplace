import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Productdetails from './Components/Product-Details/Productdetails';
// import Navbar from './Components/Navbar/Navbar';
// import Banner from './Components/Navbar/Banner/Banner';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Blog from './Components/Blog/Blog';
import BlogCreate from './Components/Blog/BlogCreate/BlogCreate';
import './App.css'
import './index.css'

function App() {

  return (
    <>
    {/* <Banner/> */}
    
    <Routes>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Productdetails/>}/>
      <Route path='/auth/login' element={<Login/>}/>
      <Route path='/auth/register' element={<Signup/>}/>
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/blog/create' element={<BlogCreate/>}/>
    </Routes>
    </>
  )
}


export default App
