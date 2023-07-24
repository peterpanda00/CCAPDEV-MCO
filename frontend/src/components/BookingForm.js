import { useEffect, useState }from 'react';
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";
import "../component-style.css"; 
import RoomDetails from "../components/RoomDetails";




const BookingForm = () => {
  const [check_in_date, setCheckin] = useState(new Date("2023/07/23"));
  const [check_out_date, setCheckout] = useState(new Date("2023/07/24"));
  const [num_of_guests, setNumofGuest] = useState('')
  const [room_type, setRoomType] = useState('')
  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [contactNumber, setNumber] = useState('')
  const [emailAddress, setEmail] = useState('')
  const [specialRequest, setSpecial] = useState('')
  const [paymentMethod, setPayment] = useState('')

  const [error, setError] = useState(null )

  const [rooms, setRooms] = useState(null)
  
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
    e.preventDefault()

    const booking = {check_in_date,check_out_date,room_type,num_of_guests,firstName,
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
      setRoomType('')
      setNumofGuest('')
      setFirst('')
      setLast('')
      setNumber('')
      setEmail('')
      setSpecial('')
      setPayment('')
      setError(null)
      console.log('Booking sucess',json)
    }
    
  }

  return (

  
    <div class="container">

<section id="booking-wrap" className="padding-large">
  <div className="container">
    <div className="row justify-content-center text-center pt-0 pb-5">  
      <div className="col-lg-6 section-heading" data-aos="fade-up">
        <h3 className="text-center">Search</h3>
      </div>
    </div>
    <div className="row">
      <form action className="booking-form d-flex flex-wrap align-items-center">
        <div className="booking-content d-flex flex-wrap col-lg-8">
          <div className="booking-item">
            <label htmlFor="date-in" className="text-uppercase d-block">Arrival</label>
            <DatePicker
              showIcon
              selected={check_in_date}
              onChange={(date) => setCheckin(date)}
              selectsStart
              startDate={check_in_date}
              endDate={check_out_date}
              dateFormat="dd MMMM" 
            />
          </div>     
          <div className="booking-item">
            <label htmlFor="date-in" className="text-uppercase d-block">Departure</label>
            <DatePicker
              showIcon
              selected={check_out_date}
              onChange={(date) => setCheckout(date)}
              selectsEnd
              startDate={check_in_date}
              endDate={check_out_date}
              minDate={check_in_date}
              dateFormat="dd MMMM" 
            />

          </div>
          <div className="booking-item"> 
            <label className="text-uppercase d-block">Rooms</label>
            <input type="number" className="booking" name="rooms" min={1} max={5} placeholder={0} defaultValue={0} />
          </div>  
          <div className="booking-item"> 
            <label className="text-uppercase d-block">Guests</label>
            <input type="number" className="booking" name="guests" min={1} max={10} placeholder={0} defaultValue={0} />
          </div>
        </div>
        <button className="btn btn-arrow btn-pill btn-medium btn-dark position-relative" style={{backgroundColor: '#605753', borderColor: '#605753'}} id="checkAvailabilityButton">
          <span>Check availability<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8" xmlSpace="preserve"><g><line fill="none" stroke="#FFFFFF" strokeWidth={3} strokeMiterlimit={10} x1={0} y1="12.9" x2={34} y2="12.9" /><polyline fill="none" stroke="#FFFFFF" strokeWidth={3} strokeMiterlimit={10} points="22.2,1.1 34,12.9 22.2,24.7   " /></g></svg></span>
        </button>
      </form>  
    </div>
  </div>
</section>

        <div className="wrapper">
                {rooms && rooms.map((room) => (
                    <RoomDetails key={room._id} room={room}></RoomDetails>
                ))}

          </div>


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
                <input type="text" name="first name" placeholder="First Name" className="text-dark w-100 border-0 bg-transparent fs-4 mb-4" />
                <input type="text" name="last name" placeholder="Last name" className="text-dark w-100 border-0 bg-transparent fs-4 mb-4" />
                <input type="tel" name="contact number" id="phone" className="text-dark w-100 border-0 bg-transparent fs-4 mb-4" />
                <input type="text" name="email" placeholder="Email Address" className="text-dark w-100 border-0 bg-transparent fs-4 mt-3 mb-4" />
                <textarea name="request" placeholder="Special Request" className="text-dark w-100 border-0 bg-transparent fs-4 mb-4" defaultValue={""} />
                <div className="form-group">
                  <label htmlFor="payment-method" className="h3">Payment Method</label>
                  <p className="subheading">*Over the counter payment</p>
                  <select className="form-control" id="payment-method">
                    <option value>Select a payment method</option>
                    <option value="Credit/Debit Card">Credit/Debit Card</option>
                    <option value="GCash">GCash</option>
                    <option value="Cash">Cash</option>
                  </select>
                </div>
              </form>
              <button className="btn btn-arrow btn-pill btn-medium btn-dark position-relative" style={{backgroundColor: '#605753', borderColor: '#605753'}} id="guest-detail-btn" data-toggle="modal" data-target="#bookingModal">
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
        
        
      
    </div>
  );
};

export default BookingForm;
