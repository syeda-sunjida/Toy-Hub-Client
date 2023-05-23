import { Link } from "react-router-dom";
// import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = () => {

    const logo = {
        position: 'absolute',
        top: '10px',
        left: '50px',
        width: '100px', /* Adjust the width as needed */
        height: '100px', /* Let the height adjust proportionally */
      }
      

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{})
        .catch( error => console.log(error))
    }

    const navItems = <>
        <li><Link to="/">Home</Link> </li>
        <li> <Link to="/blog">Blogs</Link> </li>
        {/* { user?.email ?  <>
            <li><Link to="/bookings">My Toys</Link></li>
            <li><Link to="/bookings">All Toys</Link></li>
            <li><Link to="/bookings">Add A Toy</Link></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
        </> 
        : <li> <Link to="/login">Login</Link> </li>
       } */}
       <>
            {user ? (
              <>
                {user.photoURL && (
                  <img title={user.displayName}
                    className="h-12 rounded-full border-2 border-primary"
                    src={user?.photoURL}
                    alt=""
                  />
                )}
                <li><Link to="/bookings">My Toys</Link></li>
            <li><Link to="/bookings">All Toys</Link></li>
            <li><Link to="/bookings">Add A Toy</Link></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </>
    </>
    return (
        <div className="navbar h-28 mb-4  text-error shadow bg-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                <img
                        src="https://cdn.shopify.com/s/files/1/0034/9995/0129/files/logo_final-01_copy_876e5cdd-627f-4f27-8a0e-e7601e80e7b9_1200x1200.png?v=1634924327"
                        alt=""
                        style={logo}
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            
        </div>
    );
};

export default NavBar;