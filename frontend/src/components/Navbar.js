import {Link} from 'react-router-dom'

const Navbar = () => {
    return(

        <nav className="untree_co--site-nav js-sticky-nav">
        <div className="container d-flex align-items-center">
          <div className="logo-wrap">
            <a href="index.html" className="untree_co--site-logo"> Park Avenue 2443 </a>
          </div>
          <div className="site-nav-ul-wrap text-center d-none d-lg-block">
            <ul className="site-nav-ul js-clone-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li><a href="about.html">Our Story</a></li>
              <li className="has-children">
                <Link to="/pages/Rooms">Rooms</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/pages/Rooms">Single Room</Link>
                  </li>
                  <li>
                    <Link to="/pages/Rooms">Superior Twin</Link>
                  </li>
                  <li>
                    <Link to="/pages/Rooms">Deluxe Queen</Link>
                  </li>
                  <li>
                    <Link to="/pages/Rooms">Imperial King</Link>
                  </li>
                  <li>
                    <Link to="/pages/Rooms">Family Room</Link>
                  </li>
                </ul>
              </li>
              <li><Link to="/pages/Memories">Memories</Link></li>
            <li><Link to="/pages/Contact">Contact</Link></li>
            <li><Link to="/pages/Booking" className="font-weight-bolder">Book Now</Link></li>
            </ul>
          </div>
          <div className="icons-wrap text-md-right">
            <ul className="icons-top d-none d-lg-block">
              <li className="mr-5 mt-4" style={{zIndex: 'auto'}}>
                <a href="#" className="js-search-toggle"><span className="icon-search2" /></a>
              </li>
              {/* REGISTER/LOGIN */}   
              <button className="btn btn-arrow btn-pill btn-medium btn-dark position-relative mb-3" style={{height: 0, borderColor: '#605753', backgroundColor: '#605753'}} onclick="openPopup()">
                <span>Login<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8" xmlSpace="preserve"><g>
                      <line fill="none" stroke="#FFFFFF" strokeWidth={3} strokeMiterlimit={10} x1={0} y1="12.9" x2={34} y2="12.9" />
                      <polyline fill="none" stroke="#FFFFFF" strokeWidth={3} strokeMiterlimit={10} points="22.2,1.1 34,12.9 22.2,24.7   ">                
                      </polyline></g></svg>
                </span>
              </button>
              {/* Pop-up container */}
              <div className="popup-container" id="popupContainer">
                <div className="popup-content">
                  <div className="wrapper">
                    <div className="title-text">
                      <div className="title login">
                        Login Form
                      </div>
                      <div className="title signup">
                        Signup Form
                      </div>
                    </div>
                    <div className="form-container">
                      <div className="slide-controls">
                        <input type="radio" name="slide" id="login" defaultChecked />
                        <input type="radio" name="slide" id="signup" />
                        <label htmlFor="login" className="slide login">Login</label>
                        <label htmlFor="signup" className="slide signup">Signup</label>
                        <div className="slider-tab" />
                      </div>
                      <div className="form-inner">
                        <form action="#" className="login">
                          <div className="field">
                            <input type="text" placeholder="Email Address" required />
                          </div>
                          <div className="field">
                            <input type="password" placeholder="Password" required />
                          </div>
                          <div className="pass-link">
                            <a href="#">Forgot password?</a>
                          </div>
                          <div className="field btn">
                            <div className="btn-layer" />
                            <input type="submit" defaultValue="Login" />
                          </div>
                          <div className="signup-link">
                            Not a member? <a href>Signup now</a>
                          </div>
                        </form>
                        <form action="#" className="signup">
                          <div className="field">
                            <input type="text" placeholder="Email Address" required />
                          </div>
                          <div className="field">
                            <input type="password" placeholder="Password" required />
                          </div>
                          <div className="field">
                            <input type="password" placeholder="Confirm password" required />
                          </div>
                          <div className="field btn">
                            <div className="btn-layer" />
                            <input type="submit" defaultValue="Signup" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div></div></ul>
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