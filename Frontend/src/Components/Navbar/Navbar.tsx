import './Navbar.css'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const route = useNavigate()
  // const isLogin = true;

  const Registration = (action: string) => {
    if (action === 'login'){
      route("/authentication?", {state: {type: action}})
    } else{
      route('/registration', {state: {type: action}})
    }
  }

  return (
   <div>
    <div className="nav-bg">
      <div className='search-style'>
        <button className='category hoverClass'>Categories</button>
        <input className='input-search-field' type="search" name="search" placeholder='Search ceylinc' id="" />
        <div className='auth-btn'>
          <button onClick={ () => Registration('login')} className='btn'>Login</button>
          <button onClick={ () => Registration('Signup')} className='btn'>Sign Up</button>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Navbar