import {useState }from 'react';
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";
import "../component-style.css"; 

const DateAvailability = ({ check_in_date, check_out_date, num_of_guests, setCheckin,setCheckout,setNumofGuest, onSearch}) => {
  

      const handleSearchClick = () => {
        onSearch();
      };

  
  return (

<section id="booking-wrap" className="padding-large">
  <div className="container">
    <div className="row justify-content-center text-center pt-0 pb-5">  
      <div className="col-lg-6 section-heading" data-aos="fade-up">
        <h3 className="text-center">Search</h3>
      </div>
    </div>
    <div className="row">
      <form className="booking-form d-flex flex-wrap align-items-center">
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
            <label className="text-uppercase d-block">Guests</label>
            <input type="number" className="booking" name="guests" min={1} max={10} placeholder={1} defaultValue={1}  onChange={(e) => setNumofGuest(e.target.value)}/>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-arrow btn-pill btn-medium btn-dark position-relative"
          style={{ backgroundColor: '#605753', borderColor: '#605753' }}
          id="checkAvailabilityButton"
          onClick={handleSearchClick}
        >
          <span>Check availability</span>
        </button>
      </form>  
    </div>
  </div>
</section>
  );
};

export default DateAvailability;
