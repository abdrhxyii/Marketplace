import './Navbar.css'

const Navbar = () => {
  return (
   <div>
    <div className="nav-bg">
      <div className='search-style'>
        <button className='category hoverClass'>Categories</button>
        <input className='input-search-field' type="search" name="search" placeholder='Search ceylinc' id="" />
        <div className='auth-btn'>
          <button className='btn'>Login</button>
          <button className='btn'>Sign Up</button>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Navbar