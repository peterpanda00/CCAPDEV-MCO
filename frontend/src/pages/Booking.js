import Navbar from "../components/Navbar";

const Booking = () => {
    return(

<div>
  <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}> 
    <symbol xmlns="http://www.w3.org/2000/svg" id="navbar-icon" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-icon" viewBox="0 0 512 512">
      <path fill="currentColor" d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256L359.873 121.377z" />
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" id="icon-arrow-left" viewBox="0 0 1024 1024">
      <path fill="currentColor" d="M752.145 0c8.685 0 17.572 3.434 24.237 10.099c13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474c-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z" />
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" id="icon-arrow-right" viewBox="0 0 1024 1024">
      <path fill="currentColor" d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097c-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163L254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475c13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z" />
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-down" viewBox="0 0 24 24">
      <path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222l4.95 4.95Z" />
    </symbol>     
    <symbol id="player" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={90} cy={90} r="89.5" stroke="white" strokeOpacity="0.65" />
      <circle cx={90} cy={90} r="73.5" stroke="white" strokeOpacity="0.65" />
      <circle cx={90} cy={90} r="57.5" stroke="white" strokeOpacity="0.65" />
      <path d="M77.5625 67.634V112.366L80.7202 110.303L112.303 89.9998L80.7181 69.6965L77.5625 67.634ZM81.6875 75.1766L104.697 89.9998L81.6875 104.825V75.1766Z" fill="white" />
    </symbol>   
    <symbol xmlns="http://www.w3.org/2000/svg" id="btn-close" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-up" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-down" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
    </symbol>
  </svg>
  <div id="untree_co--overlayer" />
  <div className="loader">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  <nav className="untree_co--site-mobile-menu">
    <div className="close-wrap d-flex">
      <a href="#" className="d-flex ml-auto js-menu-toggle">
        <span className="close-label">Close</span>
        <div className="close-times">
          <span className="bar1" />
          <span className="bar2" />
        </div>
      </a>
    </div>
    <div className="site-mobile-inner" />
  </nav>
  <div className="untree_co--site-wrap">
    <Navbar> </Navbar>
    <main className="untree_co--site-main">
      <button id="scroll-top-btn">
        <svg className="arrow-up" width={20} height={40}>
          <use xlinkHref="#arrow-up" />
        </svg>
      </button>
      <div className="untree_co--site-hero inner-page" style={{backgroundImage: 'url("images/booking-image.png")'}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 text-center">
              <div className="site-hero-contents text-center" data-aos="fade-up">
                <h1 className="hero-heading text-white font-weight-light">Stay With Us</h1>
                <div className="sub-text padding-small">
                  <p>Allow us to be your home away from home – book your stay now and let us weave unforgettable moments into the fabric of your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  <div className="date" id="select-arrival-date" />
                </div>     
                <div className="booking-item">
                  <label htmlFor="date-in" className="text-uppercase d-block">Departure</label>
                  <div className="date" id="select-departure-date" />
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
      <section id="our-rooms" className="display-none position-relative padding-large pt-0">
        <div className="container">
          <div className="row justify-content-center text-center pt-0 pb-5 margin-small">  
            <div className="col-lg-6 section-heading" data-aos="fade-up">
              <h3 className="text-center">Room &amp; Rates</h3>
            </div>
          </div>
          <div className="row">
            <div className="display-header d-flex justify-content-between pb-3">
              <h2 className="display-7 text-dark fw-normal">Available Rooms</h2>
              <h2 className="display-7 text-dark font-weight-bold" id="room-type" />
            </div>   
            <div className="swiper-arrow">
              <svg className="icon-arrow-left border rounded-circle position-absolute" style={{top: '51%', left: '16%'}}>
                <use xlinkHref="#icon-arrow-left" />
              </svg>
            </div>
            <div className="swiper product-swiper" value="single">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product-card position-relative overflow-hidden">                  
                    <div className="image-holder">
                      <img src="images/single_room1.jpg" alt="product-item" className="img-fluid overflow-hidden" />
                    </div>
                    <div className="product-detail mt-3">
                      <h3><a className="text-black font-weight-bolder">Single Room</a></h3>
                      <div className="detail position-absolute">
                        <table>
                          <tbody>
                            <tr>
                              <td className="pe-2"><strong>Price:</strong></td>
                              <td className="price"><strong>₱ 3,000</strong> /Per night</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Additional:</strong></td>
                              <td className="price"><strong>₱ 800</strong> /Per person</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Size:</strong></td>
                              <td>10 ft</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Capacity:</strong></td>
                              <td>Max person 1</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Bed:</strong></td>
                              <td>1 Single Bed</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Services:</strong></td>
                              <td>Wifi, Television, Safetybox</td>
                            </tr>
                          </tbody>
                        </table>
                        <a href="#contact" style={{lineHeight: 'normal', backgroundColor: '#605753', borderColor: '#605753'}} name="Single Room" className="btn btn-small btn-black btn-pill mt-3" id="single-room-btn">Book Room</a>
                      </div>
                    </div>
                  </div>
                  {/* product-card */}
                </div>
                <div className="swiper-slide" value="twin">
                  <div className="product-card position-relative overflow-hidden">                  
                    <div className="image-holder">
                      <img src="images/twin_room1.jpg" alt="product-item" className="img-fluid overflow-hidden" />
                    </div>
                    <div className="product-detail mt-3">              
                      <h3><a className="text-black font-weight-bolder">Superior Twin</a></h3>
                      <div className="detail position-absolute">
                        <table>
                          <tbody>
                            <tr>
                              <td className="pe-2"><strong>Price:</strong></td>
                              <td className="price"><strong>₱ 4,000</strong> /Per night</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Additional:</strong></td>
                              <td className="price"><strong>₱ 800</strong> /Per person</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Size:</strong></td>
                              <td>10 ft</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Capacity:</strong></td>
                              <td>Max person 2</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Bed:</strong></td>
                              <td>2 Single Beds</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Services:</strong></td>
                              <td>Wifi, Television, Safetybox</td>
                            </tr>
                          </tbody>
                        </table>
                        <a href="#contact" style={{lineHeight: 'normal', backgroundColor: '#605753', borderColor: '#605753'}} name="Superior Twin" className="btn btn-small btn-black btn-pill mt-3" id="twin-room-btn">Book Room</a>
                      </div>
                    </div>
                  </div>
                  {/* product-card */}
                </div>
                <div className="swiper-slide" value="queen">
                  <div className="product-card position-relative overflow-hidden">                  
                    <div className="image-holder">
                      <img src="images/queen_room1.jpg" alt="product-item" className="img-fluid overflow-hidden" />
                    </div>
                    <div className="product-detail mt-3">   
                      <h3><a className="text-black font-weight-bolder">Deluxe Queen</a></h3>
                      <div className="detail position-absolute">
                        <table>
                          <tbody>
                            <tr>
                              <td className="pe-2"><strong>Price:</strong></td>
                              <td className="price"><strong>₱ 4,000</strong> /Per night</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Additional:</strong></td>
                              <td className="price"><strong>₱ 800</strong> /Per person</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Size:</strong></td>
                              <td>10 ft</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Capacity:</strong></td>
                              <td>Max person 2</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Bed:</strong></td>
                              <td>1 Queen-sized Bed</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Services:</strong></td>
                              <td>Wifi, Television, Safetybox</td>
                            </tr>
                          </tbody>
                        </table>
                        <a href="#contact" style={{lineHeight: 'normal', backgroundColor: '#605753', borderColor: '#605753'}} name="Deluxe Queen" className="btn btn-small btn-black btn-pill mt-3" id="queen-room-btn">Book Room</a>
                      </div>
                    </div>
                  </div>
                  {/* product-card */}
                </div>
                <div className="swiper-slide" value="king">
                  <div className="product-card position-relative overflow-hidden">                  
                    <div className="image-holder">
                      <img src="images/king_room1.jpg" alt="product-item" className="img-fluid overflow-hidden" />
                    </div>
                    <div className="product-detail mt-3">
                      <h3><a className="text-black font-weight-bolder">Imperial King</a></h3>
                      <div className="detail position-absolute">
                        <table>
                          <tbody>
                            <tr>
                              <td className="pe-2"><strong>Price:</strong></td>
                              <td className="price"><strong>₱ 4,400</strong> /Per night</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Additional:</strong></td>
                              <td className="price"><strong>₱ 800</strong> /Per person</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Size:</strong></td>
                              <td>10 ft</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Capacity:</strong></td>
                              <td>Max person 2</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Bed:</strong></td>
                              <td>1 King-sized Bed</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Services:</strong></td>
                              <td>Wifi, Television, Safetybox</td>
                            </tr>
                          </tbody>
                        </table>
                        <a href="#contact" style={{lineHeight: 'normal', backgroundColor: '#605753', borderColor: '#605753'}} name="Imperial King" className="btn btn-small btn-black btn-pill mt-3" id="king-room-btn">Book Room</a>
                      </div>
                    </div>
                  </div>
                  {/* product-card */}
                </div>
                <div className="swiper-slide" value="family">
                  <div className="product-card position-relative overflow-hidden">                  
                    <div className="image-holder">
                      <img src="images/family_room1.jpg" alt="product-item" className="img-fluid overflow-hidden" />
                    </div>
                    <div className="product-detail mt-3">              
                      <h3><a className="text-black font-weight-bolder">Family Room</a></h3>
                      <div className="detail position-absolute">
                        <table>
                          <tbody>
                            <tr>
                              <td className="pe-2"><strong>Price:</strong></td>
                              <td className="price"><strong>₱ 4,800</strong> /Per night</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Additional:</strong></td>
                              <td className="price"><strong>₱ 800</strong> /Per person</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Size:</strong></td>
                              <td>10 ft</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Capacity:</strong></td>
                              <td>Max person 4</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Bed:</strong></td>
                              <td>4 Single Beds</td>
                            </tr>
                            <tr>
                              <td className="pe-2"><strong>Services:</strong></td>
                              <td>Wifi, Television, Safetybox</td>
                            </tr>
                          </tbody>
                        </table>
                        <a href="#contact" style={{lineHeight: 'normal', backgroundColor: '#605753', borderColor: '#605753'}} name="Family Room" className="btn btn-small btn-black btn-pill mt-3" id="family-room-btn">Book Room</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>          
              <div className="swiper-arrow">
                <svg className="icon-arrow-right border rounded-circle position-absolute">
                  <use xlinkHref="#icon-arrow-right" />
                </svg>
              </div>          
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="display-none overflow-hidden margin-small"> 
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
      {/* Booking Summary Modal */}
      <div className="modal fade" id="bookingModal" tabIndex={-1} role="dialog" aria-labelledby="bookingModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bookingModalLabel">Booking Confirmation</h5>
              <button type="button" id="summary-close-btn" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p> </p>
            </div>
            <div className="modal-footer">
              <button type="button" id="edit-btn" className="btn btn-secondary btn-pill" style={{color: 'white', backgroundColor: '#605753', borderColor: '#605753'}} data-dismiss="modal">Edit</button>
              <button type="button" id="final-book-btn" className="btn btn-primary btn-pill" style={{color: 'white', backgroundColor: '#605753', borderColor: '#605753'}}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Modal */}
      <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="editModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Edit Details</h5>
              <button type="button" id="edit-close-btn" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body modal-dialog-scrollable">
              <form>
                <div className="form-group">
                  <label htmlFor="editFirstName">First Name</label>
                  <input type="text" className="form-control" id="editFirstName" placeholder="Enter first name" />
                </div>
                <div className="form-group">
                  <label htmlFor="editLastName">Last Name</label>
                  <input type="text" className="form-control" id="editLastName" placeholder="Enter last name" />
                </div>
                <div className="form-group">
                  <label htmlFor="editEmail">Email</label>
                  <input type="email" className="form-control" id="editEmail" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="editContactNumber">Contact Number</label>
                  <input type="text" className="form-control" id="editContactNumber" placeholder="Enter contact number" />
                </div>
                <div className="form-group">
                  <label htmlFor="editSpecialRequests">Special Requests</label>
                  <input type="text" className="form-control" id="editSpecialRequests" placeholder="Enter special requests" />
                </div>
                <div className="form-group">
                  <label htmlFor="edit-payment-method">Payment Method</label>
                  <select className="form-control" id="edit-payment-method">
                    <option value>Select a payment method</option>
                    <option value="Credit/Debit Card">Credit/Debit Card</option>
                    <option value="GCash">GCash</option>
                    <option value="Cash">Cash</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-pill" style={{color: 'white', backgroundColor: '#605753', borderColor: '#605753'}} id="save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="confirmationModal" tabIndex={-1} role="dialog" aria-labelledby="confirmationModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmationModalLabel">Booking Confirmed</h5>
              <button type="button" id="booking-close-btn" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Proceeding to Main Page in <span id="countdown">10</span> seconds</p>
            </div>
            <div className="modal-footer">
              <button type="button" id="booking-close-btn-2" className="btn btn-secondary btn-pill" style={{color: 'white', backgroundColor: '#605753', borderColor: '#605753'}} data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="untree_co--site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pr-md-5">
            <h3>Our Story</h3>
            <p>Situated in the heart of Manila, Park Avenue Guesthouse 2443 stands out with its captivating Hispanic architecture and rich historical designs, creating a space that sparks curiosity and ignites the imagination.</p>         
            <a href="about.html" className="readmore">Read more</a><p />
          </div>
          <div className="col-md-8 ml-auto">
            <div className="row">
              <div className="col-md-3">
                <h3>Navigation</h3>
                <ul className="list-unstyled">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">Our Story</a></li>
                  <li><a href="rooms.html">Rooms</a></li>
                  <li><a href="memories.html">Memories</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li className="active"><a href="booking.html">Book Now</a></li>
                </ul>
              </div>
              <div className="col-md-9 ml-auto">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <h3>Address</h3>
                    <a href="https://www.google.com/maps/place/Park+Avenue+Guesthouse+2443/@14.5457169,120.9917339,17z/data=!3m1!4b1!4m9!3m8!1s0x3397c95d7a1e6195:0x9a30b02893babca6!5m2!4m1!1i2!8m2!3d14.545717!4d120.9966048!16s%2Fg%2F11c2rg38c3?entry=ttu">2443 Park Avenue, Pasay, <br /> Metro Manila, Philippines</a>
                  </div>
                  <div className="col-md-6">
                    <h3>Telephone</h3>
                    <p>
                      <a href="tel:%20+63%20960%20440%209634">+63 960 440 9634</a>
                    </p>
                  </div>
                </div>
                <h3 className="mb-0">Join our newsletter</h3>
                <p>Be the first to know our latest updates and news!</p>
                <form action="#" method className="form-subscribe">
                  <div className="form-group d-flex">
                    <input type="email" className="form-control mr-2" placeholder="Enter your email" />
                    <input type="submit" defaultValue="Subscribe" className="btn btn-black px-4 text-white" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5 align-items-center">
          <div className="col-md-6 text-md-left">
          </div>
          <div className="col-md-6 text-md-right">
            <ul className="icons-top icons-dark">
              <li>
                <a href="https://www.google.com/travel/search?q=park%20avenue%20guesthouse%202443&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4899571%2C4899573%2C4924070%2C4965990%2C4985712%2C4990494%2C72248281%2C72271797%2C72279293%2C72281254%2C72286089&hl=en-PH&gl=ph&cs=1&ssta=1&ts=CAESABpHCikSJzIlMHgzMzk3Yzk1ZDdhMWU2MTk1OjB4OWEzMGIwMjg5M2JhYmNhNhIaEhQKBwjnDxAHGAUSBwjnDxAHGAYYATICEAA&qs=CAEyFENnc0lwdm5xblltRnJKaWFBUkFCOAJCCwmmvLqTKLAwmhgBQgsJpry6kyiwMJoYAQ&ap=ugEHcmV2aWV3cw&ictx=1&sa=X&ved=0CAAQ5JsGahcKEwi4tJfY7dP_AhUAAAAAHQAAAAAQDQ"><span className="icon-google" /></a>
              </li>
              <li>
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjijcb4lM3_AhXeyzgGHZ8ACWsQFnoECD4QAQ&url=https%3A%2F%2Fwww.tripadvisor.com.ph%2FHotel_Review-g298452-d12158875-Reviews-Park_Avenue_Guesthouse_2443-Pasay_Metro_Manila_Luzon.html&usg=AOvVaw0WW6WjNSCaunVApt_hJWDJ&opi=89978449"><span className="icon-tripadvisor" /></a>
              </li>
              <li>
                <a href="https://www.agoda.com/park-avenue-guesthouse-2443/hotel/manila-ph.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1891467&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2023-06-30&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=PHP&isFreeOccSearch=false&tag=31dbfcfe-f623-4e6f-a1aa-93de159a1c77&isCityHaveAsq=false&tspTypes=16&los=1&searchrequestid=a4d3bbc4-bb09-45b0-85fe-08dd1b6a15d2"><span className="icon-agoda" /></a>
              </li>
              <li>
                <a href="https://www.booking.com/hotel/ph/park-avenue-guesthouse-2443.en-gb.html?aid=311984&label=park-avenue-guesthouse-2443-WPnklyajuSFm84pu%2AXIALwS181404555794%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-473760505112%3Alp1011172%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbSsBl3MCvHsD8UKUHIRFxY&sid=3893afa844cf355e04cf1532355d3816&dest_id=-2437894;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1687333232;srpvid=cda035f7f8c40083;type=total;ucfs=1&#hotelTmpl"><span className="icon-booking" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
  {/* Search */}
  <div className="search-wrap">
    <a href="#" className="close-search js-search-toggle">
      <span>Close</span>
    </a>
    <div className="container">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-12">
          <form action="#">
            <input type="search" name="s" id="s" placeholder="Type a keyword and hit enter..." autoComplete="false" />
          </form>    
        </div>
      </div>
    </div>
  </div>
</div>







        
    )
}


export default Booking;