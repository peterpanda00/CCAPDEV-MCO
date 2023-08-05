import {useNavigate,Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import LoginSignUpForm from "./LoginSignup";

const Navbar = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const GUEST_USERID = "64ccfc4bc4db8bceaaec9ecb"
  const [userID, setUserID] = useState(Cookies.get('_id'));
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')

  const rawUserID = Cookies.get('_id').slice(3, 27);

  const navigate = useNavigate();
  console.log('Current User'+ userID)
  console.log('Guest User'+GUEST_USERID)
  console.log('User Name' + userName)

  useEffect(() => {
    const fetchUser = async () => {
      if (userID !== GUEST_USERID) {
        try {
          const response = await fetch(`/api/users/${rawUserID}`);
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
            setUserName(userData.userName);
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
            setEmailAddress(userData.emailAddress);
            
          } else {
            console.log('Unable to fetch user data.'); 
          }
        } catch (error) {
          console.log('An error occurred while fetching user data.'); 
        }
      }
    };

    fetchUser();
  },[]);


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    Cookies.set('_id', GUEST_USERID);
    navigate('/');
    alert('Log Out Successful')
    window.location.reload();
  };

    return(

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
              <li >
              {userID === GUEST_USERID ? <LoginSignUpForm /> : (
                  <>
                  <button type="button" className="custom-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  {userName} 
                  </button>
                  <ul className="dropdown-menu" >
                    
                    <li><p style={{ fontSize: '12px' }}><strong>Full Name:</strong> {lastName},{firstName}</p></li>
                    <li><p style={{ fontSize: '12px' }}><strong>Email:</strong> {emailAddress}</p></li>
                    <li><button onClick={handleLogout} className="dropdown-item custom-button">Log Out</button></li>
                    
                  </ul>

                </>
              )}

              </li>
             </ul>
            {/* Mobile Toggle */}
            <a href="#" className="d-block d-lg-none burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span />
            </a>
          </div>
        </div>
        {showPopup && <LoginSignUpForm />}
      </nav>

        
    )
}

export default Navbar