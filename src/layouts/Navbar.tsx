import { Link } from "react-router-dom";


export default function Navbar() {
  const menuItems1 = <>
    <li><Link to= "/">Home</Link></li>
    <li><Link to= "/book">All Books</Link></li>
    {/* <li><Link to= "/signUp">SignUp</Link></li>
    <li><Link to= "/login">Login</Link></li> */}
    </>

  const menuItems2 = <>
    {/* <li><Link to= "/">Home</Link></li>
    <li><Link to= "/book">All Books</Link></li> */}
     <li><Link to= "/signUp">SignUp</Link></li>
    <li><Link to= "/login">Login</Link></li>
    </>
  return (
    <div className="navbar bg-base-300">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {menuItems1}
        {/* <li><a>Home</a></li>
          <li><a>All Books</a></li> */}
          <li>
            <a>Register</a>
            <ul className="p-2">
              {menuItems2}
            {/* <li><a>SignUp</a></li>
              <li><a>Login</a></li> */}
            </ul>
          </li>
         
        </ul>
      </div>
      <Link to= "/">
      <a className="btn btn-ghost normal-case text-xl">Book Store</a>
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 ">
        {menuItems1}
        
        {/* <li><a>Home</a></li>
        <li ><Link to= "/book">All Books</Link></li> */}
        <li tabIndex={0}>
          <details>
            <summary>Register</summary>
            <ul className="p-2">
              {menuItems2}
              {/* <li >SignUp</li>
              <li><a>Login</a></li> */}
            </ul>
          </details>
        </li>
       
      </ul>
    </div>
    <div className="navbar-end form-control">
    {/* <div className="form-control"> */}
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    {/* </div> */}
    </div>
  </div>
  )
}
