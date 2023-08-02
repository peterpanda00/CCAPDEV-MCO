import React from 'react';

const Navbar = () => {
  return (
    <nav className="untree_co--site-nav js-sticky-nav">
      <div className="container d-flex align-items-center">
        <div className="logo-wrap">
          <a href="/" className="untree_co--site-logo"> Park Avenue 2443 </a>
        </div>
        <div className="site-nav-ul-wrap text-center d-none d-lg-block">
          <ul className="site-nav-ul js-clone-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Our Story</a></li>
            <li className="has-children">
              <a href="/rooms">Rooms</a>
              <ul className="dropdown">
                <li>
                  <a href="/rooms">Single Room</a>
                </li>
                <li>
                  <a href="/rooms">Superior Twin</a>
                </li>
                <li>
                  <a href="/rooms">Deluxe Queen</a>
                </li>
                <li>
                  <a href="/rooms">Imperial King</a>
                </li>
                <li>
                  <a href="/rooms">Family Room</a>
                </li>
              </ul>
            </li>
            <li><a href="/memories">Memories</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/booking"><strong>Booking</strong></a></li>
          </ul>
        </div>
        <div className="icons-wrap text-md-right">
          <ul className="icons-top d-none d-lg-block">
            <li className="mr-5 mt-4" style={{ zIndex: 'auto' }}>
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
  );
};

export default Navbar;
