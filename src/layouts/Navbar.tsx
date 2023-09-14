

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
          <li><a>All Books</a></li>
          <li>
            <a>Register</a>
            <ul className="p-2">
            <li><a>SignUp</a></li>
              <li><a>Login</a></li>
            </ul>
          </li>
         
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">B-Catalog</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        
        <li><a>Home</a></li>
        <li><a>All Book</a></li>
        <li tabIndex={0}>
          <details>
            <summary>Register</summary>
            <ul className="p-2">
              <li><a>SignUp</a></li>
              <li><a>Login</a></li>
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
