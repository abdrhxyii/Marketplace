import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Productdetails from './Components/Product-Details/Productdetails';
// import Navbar from './Components/Navbar/Navbar';
// import Banner from './Components/Navbar/Banner/Banner';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Blog from './Components/Blog/Blog';
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import BlogCreate from './Components/Blog/BlogCreate/BlogCreate';
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoutes'
>>>>>>> Stashed changes
=======
import BlogCreate from './Components/Blog/BlogCreate/BlogCreate';
>>>>>>> a6420784d24453cc571a97e493e933919261731f
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
<<<<<<< HEAD
<<<<<<< Updated upstream
      <Route path='/blog' element={<Blog/>}/>
=======
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/blog/create' element={<ProtectedRoute element={<BlogCreate/>}/>}/>
>>>>>>> Stashed changes
=======
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/blog/create' element={<BlogCreate/>}/>
>>>>>>> a6420784d24453cc571a97e493e933919261731f
    </Routes>
    </>
  )
}


export default App
