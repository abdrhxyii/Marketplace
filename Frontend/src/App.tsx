import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import Productdetails from './Components/Product-Details/Productdetails';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Blog from './Components/Blog/Blog';
import BlogCreate from './Components/Blog/BlogCreate/BlogCreate';
import BlogPost from './Components/Blog/BlogPost';
import Cart from './Components/Cart/Cart';
import Category from './Components/Category/Category';
import AdminApp from './AdminPanel/AdminApp';
import { Provider } from 'react-redux';
import './App.css'
import './index.css'
import Store from './Redux/Store'

function App() {

  return (
    <>
    <Provider store={Store}>
    <Routes>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<Productdetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/blogs' element={<Blog/>}/>
      {/* <Route path='/blog/create' element={<ProtectedRoutes element={<BlogCreate/>}/>}/> */}
      <Route path='/blog/create' element={<BlogCreate/>}/>
      <Route path='/blogdetails/:id' element={<BlogPost/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/category/:id' element={<Category/>}/>
      <Route path='/admin' element={<AdminApp/>}/>
    </Routes>
    </Provider>
    </>
  )
}

export default App
