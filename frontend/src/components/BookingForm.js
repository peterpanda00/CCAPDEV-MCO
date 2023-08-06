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


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [showGuestDetailsForm, setShowGuestDetailsForm] = useState(false);
  const [showWrapper, setShowWrapper] = useState(false);

  const [error, setError] = useState(null )

  const [rooms, setRooms] = useState([]);

  const GUEST_USERID = "64ccfc4bc4db8bceaaec9ecb"
  const [userID, setUserID] = useState(''); 

  useEffect(() => {
    if(Cookies.get('_id') !== '64ccfc4bc4db8bceaaec9ecb' && Cookies.get('_id') !== undefined){
      var userID = (Cookies.get('_id').slice(3,27))
      setUserID((Cookies.get('_id').slice(3,27)))
      console.log('Slice' + userID)
    }
    else if (Cookies.get('_id') !== undefined){
      var userID = (Cookies.get('_id'))
      setUserID((Cookies.get('_id')))
    }
    else{
      var userID = '64ccfc4bc4db8bceaaec9ecb'
      setUserID('64ccfc4bc4db8bceaaec9ecb')
      console.log(userID)
    }

    const fetchUser = async () => {
      if (userID !== GUEST_USERID) {
        try {
          const response = await fetch(`/api/users/${userID}`);
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


  
  useEffect(() => {
    const fetchRooms= async () => {
      const response = await fetch('/api/rooms/')
      const json = await response.json()

      if(response.ok){
        setRooms(json)
      }
    }

    fetchRooms()
  }, [])


  const handleSubmit = async (e) => {
  
    e.preventDefault();

    const booking = {check_in_date,check_out_date,room,num_of_guests,firstName,
      lastName,contactNumber,emailAddress,specialRequest,paymentMethod}

    const response = await fetch('/api/bookings',{
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
    console.log(room);
    console.log(room.roomName);
    setShowGuestDetailsForm(true);
  };

  const handleCheckAvailability = (availabilityData) => {
    const { check_in_date, check_out_date, num_of_guests } = availabilityData;

    setCheckin(check_in_date);
    setCheckout(check_out_date);
    setNumofGuest(num_of_guests);
    console.log({check_in_date,check_out_date,num_of_guests})
    setShowWrapper(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmation =()=>{
    setIsModalOpen(true);
  }

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


    
  <DateAvailability onCheckAvailability={handleCheckAvailability} />
  
    {showWrapper && (
          <div className="wrapper">
            {rooms &&
              rooms.map((room) =>(
                <RoomDetails
                  key={room._id}
                  room={room}
                  onRoomClick={() => handleRoomClick(room)}
                ></RoomDetails>
              ))}
          </div>
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
                <input type="text" name="first name" placeholder="First Name" className="text-dark w-100 border-0 bg-transparent fs-4 mb-4" onChange={(e) => setFirst(e.target.value)}/>
                <input type="text" name="last name" placeholder="Last Name" className="text-dark w-100 border-0 bg-transparent fs-4 mb-4" onChange={(e) => setLast(e.target.value)}/>
                <PhoneInput type="tel" international countryCallingCodeEditable={false} defaultCountry="PH" name="contact number" placeholder="Phone Number" id="phone" className="text-dark w-100 border-0 bg-transparent fs-4 mb-4" onChange={setNumber}/>
                <input type="email" name="email" placeholder="Email Address" className="text-dark w-100 border-0 bg-transparent fs-4 mt-3 mb-4" onChange={(e) => setEmail(e.target.value)}/>
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
                  <select className="form-control" id="payment-method" onChange={(e) => setPayment(e.target.value)}>
                    <option value>Select a payment method</option>
                    <option value="Credit/Debit Card">Credit/Debit Card</option>
                    <option value="GCash">GCash</option>
                    <option value="Cash">Cash</option>
                  </select>
                </div>
              </form>
              <button onClick={handleConfirmation} type="button" className="btn btn-arrow btn-pill btn-medium btn-dark position-relative" style={{backgroundColor: '#605753', borderColor: '#605753'}} id="guest-detail-btn" data-toggle="modal">
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
