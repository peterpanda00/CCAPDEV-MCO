import { useEffect, useState }from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "../component-style.css"; 
import RoomDetails from "../components/RoomDetails";
import DateAvailability from "../components/DateAvailability";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Modal from 'react-modal';

import Cookies from 'js-cookie';



import React from 'react';



const BookingForm = () => {

  const [check_in_date, setCheckin] = useState(new Date());
  const [check_out_date, setCheckout] = useState(new Date());
  const [num_of_guests, setNumofGuest] = useState('1')
  const [room, setRoom] = useState('')
  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [contactNumber, setNumber] = useState()
  const [emailAddress, setEmail] = useState('')
  const [specialRequest, setSpecial] = useState('')
  const [paymentMethod, setPayment] = useState('')

  const [isFormFilled, setIsFormFilled] = useState(false);

  const [searched, setIsSearched] = useState(false);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [showGuestDetailsForm, setShowGuestDetailsForm] = useState(false);
  const [showWrapper, setShowWrapper] = useState(false);

  const [error, setError] = useState(null )
  const [message, setMessage] = useState('')
  const [bookingMessage, setBookingMessage] = useState('')

  const [rooms, setRooms] = useState([]);

  const GUEST_USERID = "64ccfc4bc4db8bceaaec9ecb"
  const [userID, setUserID] = useState(''); 

  const [areDatesValid, setAreDatesValid] = useState(false);

  const [dateErrorMessage, setDateErrorMessage] = useState('');


  const calculateDateDifference = () => {
    const checkInDateWithoutTime = new Date(check_in_date, check_in_date, check_in_date);
    const checkOutDateWithoutTime = new Date(check_out_date, check_out_date, check_out_date);
  
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const differenceInMillis = checkOutDateWithoutTime - checkInDateWithoutTime;
  
    if (differenceInMillis < oneDayInMillis) {
      setAreDatesValid(false);
      setDateErrorMessage('Check-out date should be at least 1 day after the check-in date.');
    } else {
      setAreDatesValid(true);
      setDateErrorMessage('');
    }
  };
  
  

  
  useEffect(() => {
    calculateDateDifference();
  }, [check_in_date, check_out_date]);
  

  useEffect(() => {
    if(Cookies.get('_id') !== '64ccfc4bc4db8bceaaec9ecb' && Cookies.get('_id') !== undefined){
      var userID = (Cookies.get('_id').slice(3,27))
      setUserID((Cookies.get('_id').slice(3,27)))
      
    }
    else if (Cookies.get('_id') !== undefined){
      var userID = (Cookies.get('_id'))
      setUserID((Cookies.get('_id')))
    }
    else{
      var userID = '64ccfc4bc4db8bceaaec9ecb'
      setUserID('64ccfc4bc4db8bceaaec9ecb')
     
    }

    const fetchUser = async () => {
      if (userID !== GUEST_USERID) {
        try {
          const response = await fetch(`http://localhost:4000/api/users/${userID}`);
          if (response.ok) {
            const userData = await response.json();
            setFirst(userData.firstName);
            setLast(userData.lastName);
            setEmail(userData.emailAddress);
            setNumber(userData.contactNumber);
            
           
            
          } else {
            console.log('Unable to fetch user data.'); 
          }
        } catch (error) {
          console.log('An error occurred while fetching user data.'); 
        }
      }
    };

    fetchUser();
}, []);


  
const handleSearch = async (e) => {

  
const formattedCheckInDate = check_in_date.toLocaleDateString('en-PH');
const formattedCheckOutDate = check_out_date.toLocaleDateString('en-PH');

 
  const response = await fetch(`http://localhost:4000/api/rooms/search?checkIn=${formattedCheckInDate}&checkOut=${formattedCheckOutDate}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      checkIn: check_in_date,
      checkOut: check_out_date,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    setRooms(data);
    setShowWrapper(true);
    setIsSearched(true);
    
  }else {
    setShowWrapper(false);
    const errorResponse = await response.json();
    setBookingMessage(errorResponse.error)
    //console.log('Error:', errorResponse.error); 
    setIsSearched(true);
  }

  
};


  const checkFormFilled = () => {
    if (
      firstName !== '' &&
      lastName !== '' &&
      contactNumber !== '' &&
      emailAddress !== '' &&
      paymentMethod !== "Select a payment method"
    ) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
   
  };


  const handleSubmit = async (e) => {
  
    e.preventDefault();

    const booking = {check_in_date,check_out_date,room,num_of_guests,firstName,
      lastName,contactNumber,emailAddress,specialRequest,paymentMethod}

    const response = await fetch('http://localhost:4000/api/bookings',{
      method:'POST',
      body:JSON.stringify(booking),  
      headers:{
        'Content-Type':'application/json'
      }
    })

    const json = await response.json( )

    if(!response.ok){

      setError(json.error)

    }
    if(response.ok){
      setCheckin('')
      setCheckout('')
      setRoom('')
      setNumofGuest('')
      setFirst('')
      setLast('')
      setNumber('')
      setEmail('')
      setSpecial('')
      setPayment('')
      setError(null)
      console.log('Booking successful',json)
      alert('Booking successful')
      window.location.reload(true);
      
    }
  }
  

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setRoom(room);
    
    setShowGuestDetailsForm(true);
  };



  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmation = () => {
    if (isFormFilled && areDatesValid) {
      setIsModalOpen(true);
    } else {
      setError("Fill up all missing fields or ensure that the dates are at least 1 day apart.");
    }
  };
  

  const formatDate = (date) => {
    if (date instanceof Date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    }
    return ''; 
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px', 
  };

  return (

  
<div class="container">


    
  <DateAvailability 
  check_in_date={check_in_date}
  check_out_date={check_out_date}
  num_of_guests={num_of_guests} 
  setCheckin={setCheckin}
  setCheckout={setCheckout}
  setNumofGuest={setNumofGuest}
  onSearch={handleSearch} />


{rooms.length === 0 && searched==true ? (
        <>
        <div id="post-container">
          <h2>{bookingMessage}</h2>
          <h2 style={{ textAlign: 'center' }}>No Available Rooms. Check other dates.</h2>
        </div>
        </>
        
      ) : (
    <>
    {showWrapper && (
          <div className="wrapper">
            {rooms.map((room) => (
                <RoomDetails
                  key={room._id}
                  room={room}
                  onRoomClick={() => handleRoomClick(room)}
                ></RoomDetails>
              ))}
          </div>
        )}
    </>
      )}


          
{showGuestDetailsForm && (

      <section id="contact" className="overflow-hidden margin-small"> 
        <div className="row justify-content-center text-center pt-0 pb-5">  
          <div className="col-lg-6 section-heading" data-aos="fade-up">
            <h3 className="text-center">Guest Details</h3>
          </div>
        </div>
        <div className="row">  
          <div className="col-lg-6 col-md-12 bg-gray-100 d-flex justify-content-center align-items-center g-0">
            <div className="contact-detail">
              <h2>Fill out the details</h2>
              <p>Kindly complete all the necessary details.</p>
              <form action className="contact-form my-5">

              {userID === GUEST_USERID ? (
                <>
                  <input
                    type="text"
                    name="first name"
                    placeholder="First Name"
                    className="text-dark w-100 border-0 bg-transparent fs-4 mb-4"
                    onChange={(e) => {
                      setFirst(e.target.value);
                      checkFormFilled();
                    }}
                  />

                  <input
                    type="text"
                    name="last name"
                    placeholder="Last Name"
                    className="text-dark w-100 border-0 bg-transparent fs-4 mb-4"
                    onChange={(e) => {
                      setLast(e.target.value);
                      checkFormFilled();
                    }}
                  />

                  <PhoneInput
                    type="tel"
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="PH"
                    name="contact number"
                    placeholder="Phone Number"
                    id="phone"
                    className="text-dark w-100 border-0 bg-transparent fs-4 mb-4"
                    onChange={number => {
                      setNumber(number);
                      checkFormFilled();
                    }}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="text-dark w-100 border-0 bg-transparent fs-4 mt-3 mb-4"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      checkFormFilled();
                    }}
                  />

                </>
                ) : (
                <>
                    <h2>{firstName}</h2>
                    <h2>{lastName}</h2>
                    <h2>{contactNumber}</h2>
                    <h2>{emailAddress}</h2>
                </>
                )}

               
                
                <textarea name="request" placeholder="Special Request" className="text-dark w-100 border-0 bg-transparent fs-4 mb-4" defaultValue={""} onChange={(e) => setSpecial(e.target.value)}/>
                <div className="form-group">
                  <label htmlFor="payment-method" className="h3">Payment Method</label>
                  <p className="subheading">*Over the counter payment</p>
                  <select
                      className="form-control"
                      id="payment-method"
                      onChange={(e) => {
                        setPayment(e.target.value);
                        checkFormFilled();
                      }}
                    >
                      <option value>Select a payment method</option>
                      <option value="Credit/Debit Card">Credit/Debit Card</option>
                      <option value="GCash">GCash</option>
                      <option value="Cash">Cash</option>
                    </select>

                </div>
                <p>{message}</p>

              </form>
              <button onClick={handleConfirmation} type="button" disabled={!isFormFilled || paymentMethod === 'Select a payment method' || !areDatesValid} className="btn btn-arrow btn-pill btn-medium btn-dark position-relative" style={{backgroundColor: '#605753', borderColor: '#605753'}} id="guest-detail-btn" data-toggle="modal">
                <span>Book Now<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8" xmlSpace="preserve"><g>
                      <line fill="none" stroke="#FFFFFF" strokeWidth={3} strokeMiterlimit={10} x1={0} y1="12.9" x2={34} y2="12.9" />
                      <polyline fill="none" stroke="#FFFFFF" strokeWidth={3} strokeMiterlimit={10} points="22.2,1.1 34,12.9 22.2,24.7   ">                
                      </polyline></g></svg>
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 g-0">
            <div className="image-holder">
              <img src="images/booking.jpg" alt="single image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section> 
      )}

<Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Details"
        style={{
          overlay: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            maxHeight:'850px',
            maxWidth: '500px', 
            margin: 'auto',
            padding: '20px'
          }
        }}
      >
        {selectedRoom ? (
          <>
            <h1>Booking Details</h1>
            <hr />
            <h3>Room Details</h3>
            <hr />
            <div>
              <p><strong>Room Name: {selectedRoom.roomName}</strong></p>
              <p>Room Capacity: {selectedRoom.capacity}</p>
              <p>Room Description: {selectedRoom.desc}</p>
              
            </div>
            <form onSubmit={handleSubmit}>
              <hr />
              <h3>Guest Details</h3>
              <hr />
              <div>
                <p>Check-in Date: {formatDate(check_in_date)}</p>
                <p>Check-out Date: {formatDate(check_out_date)}</p>
                <p>Number of Guests: {num_of_guests}</p>
                <p>Guest Name: {firstName} {lastName}</p>
                <p>Contact Number: {contactNumber}</p>
                <p>Email Address: {emailAddress}</p>
                <p>Special Request: {specialRequest}</p>
                <p>Payment Method: {paymentMethod}</p>
              </div>

              
              <div className="button-container" style={containerStyle}>
                  <button className="btn btn-arrow btn-pill btn-medium btn-dark" type="submit">Book Now</button>
              </div>
             
      
              
            </form>
          </>
        ) : null}
      </Modal>
        
        
    </div>
  );
};

export default BookingForm;