import {Link} from 'react-router-dom'

import LoginSignup from "./SignupForm";

const Navbar = () => {
    return(

        <nav className="untree_co--site-nav js-sticky-nav">
        <div className="container d-flex align-items-center">
          <div className="logo-wrap">
            <Link to="/" className="untree_co--site-logo"> Park Avenue 2443 </Link>
          </div>
          <div className="site-nav-ul-wrap text-center d-none d-lg-block">
            <ul className="site-nav-ul js-clone-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li className="has-children">
                <Link to="/rooms">Rooms</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/rooms">Single Room</Link>
                  </li>
                  <li>
                    <Link to="/rooms">Superior Twin</Link>
                  </li>
                  <li>
                    <Link to="/rooms">Deluxe Queen</Link>
                  </li>
                  <li>
                    <Link to="/rooms">Imperial King</Link>
                  </li>
                  <li>
                    <Link to="/rooms">Family Room</Link>
                  </li>
                </ul>
              </li>
              <li><Link to="/memories">Memories</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/booking" className="font-weight-bolder">Book Now</Link></li>
            </ul>
          </div>
          <div className="icons-wrap text-md-right">
            <ul className="icons-top d-none d-lg-block">
              <li className="mr-5 mt-4" style={{zIndex: 'auto'}}>
                <a href="#" className="js-search-toggle"><span className="icon-search2" /></a>
              </li>

            
              
             </ul>
            {/* Mobile Toggle */}
            <a href="#" className="d-block d-lg-none burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span />
            </a>
          </div>
        </div>
      </nav>

        
    )
}

export default Navbar