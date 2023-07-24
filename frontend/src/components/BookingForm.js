import React, { useState } from 'react';
import DatePicker from './DatePicker';

const BookingForm = () => {
  const [check_in_date, setCheckin] = useState('')
  const [check_out_date, setCheckout] = useState('')
  const [num_of_guests, setNumofGuest] = useState('')
  const [room_type, setRoomType] = useState('')
  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [contactNumber, setNumber] = useState('')
  const [emailAddress, setEmail] = useState('')
  const [specialRequest, setSpecial] = useState('')
  const [paymentMethod, setPayment] = useState('')

  const [error, setError] = useState(null )

  

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

  
    <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
      <form className= "create" onSubmit={handleSubmit}>

      <DatePicker></DatePicker>
        
        
      </form>

      {error && <div className="text-black">{error}</div>}
    </div>
  );
};

export default BookingForm;
