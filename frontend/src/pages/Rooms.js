import Navbar from "../components/Navbar";

const Rooms = () => {
    return(

<div>
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
      <div className="untree_co--site-hero inner-page bg-light" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/bg_screen.jpg")'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9">
              <div className="site-hero-contents" data-aos="fade-up">
                <h1 className="hero-heading text-white" style={{fontWeight: 'lighter'}}>Rooms</h1>
                <div className="sub-text w-75">
                  <p>Indulge in a world of comfort and elegance, where each space invites you to experience the perfect blend of Hispanic architecture and enchanting ambiance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co--site-section pb-0">
        <div className="container-fluid px-md-0">
          <div className="row justify-content-center text-center pt-0 pb-5">  
            <div className="col-lg-6 section-heading" data-aos="fade-up">
              <h3 className="text-center">Our Rooms</h3>
            </div>
          </div>
          <div className="row no-gutters align-items-stretch room-animate site-section">
            <a id="family_room" />
            <div className="col-md-7 img-wrap" data-jarallax-element={-100}>
              <div className="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/family_room.jpg")'}}>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row justify-content-center">
                <div className="col-md-8 py-5">
                  <h3 className="display-4 heading">Family Room</h3>
                  <div className="room-exerpt">
                    <div className="room-price mb-4">₱4,800<span className="per">/night</span></div>
                    <h3>1-3 pax</h3>
                    <p>Extra Person: +₱800</p>
                    <p>Indulge in a pleasant experience with your loved ones as you relax in our generously sized accommodation, complete with air conditioning to ensure your comfort. Ideal for a brief escape or a memorable family trip. </p>
                    <div className="row mt-5">
                      <div className="col-12">
                        <h3 className="mb-4">Amenities</h3>
                        <ul className="list-unstyled ul-check">
                          <li>Free Wifi</li>
                          <li>Free Parking (Reservation needed)</li>
                          <li>Flat screen TV</li>
                          <li>Inverter silent AC</li>
                          <li>Electronic key card</li>
                          <li>In-room safety box</li>
                          <li>Good Breakfast (Charges Apply)</li>
                          <li>Airport Transfer (Charges Apply)</li>
                          <li>Laundry Service (Charges Apply)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-md-0">
          <div className="row no-gutters align-items-stretch room-animate site-section">
            <a id="king_room" />
            <div className="col-md-7 order-md-2 img-wrap" data-jarallax-element={-100}>
              <div className="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/king_room.jpg")'}} />
            </div>
            <div className="col-md-5">
              <div className="row justify-content-center">
                <div className="col-md-8 py-5">
                  <h3 className="display-4 heading">Imperial King</h3>
                  <div className="room-exerpt">
                    <div className="room-price mb-4">₱4,400<span className="per">/night</span></div>
                    <h3>1-2 pax</h3>
                    <p>Extra Person: +₱800</p>
                    <p>Experience the utmost comfort and tranquility in our exquisite double room featuring a range of amenities such as a tea/coffee maker, cable TV, and state-of-the-art air conditioning. Designed with couples and solo travelers in mind, this impeccable accommodation offers an ideal retreat for those yearning for both relaxation and serenity. </p>
                    <div className="row mt-5">
                      <div className="col-12">
                        <h3 className="mb-4">Amenities</h3>
                        <ul className="list-unstyled ul-check">
                          <li>Free Wifi</li>
                          <li>Free Parking (Reservation needed)</li>
                          <li>Flat screen TV</li>
                          <li>Inverter silent AC</li>
                          <li>Electronic key card</li>
                          <li>In-room safety box</li>
                          <li>Good Breakfast (Charges Apply)</li>
                          <li>Airport Transfer (Charges Apply)</li>
                          <li>Laundry Service (Charges Apply)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-md-0">
          <div className="row no-gutters align-items-stretch room-animate site-section">
            <a id="queen_room" />
            <div className="col-md-7 img-wrap" data-jarallax-element={-100}>
              <div className="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/queen_room.jpg")'}} />
            </div>
            <div className="col-md-5">
              <div className="row justify-content-center">
                <div className="col-md-8 py-5">
                  <h3 className="display-4 heading">Deluxe Queen</h3>
                  <div className="room-exerpt">
                    <div className="room-price mb-4">₱4,000<span className="per">/night</span></div>
                    <h3>1-2 pax</h3>
                    <p>Extra Person: +₱800 </p>
                    <p>Luxuriate in unparalleled comfort within our exquisitely appointed Queen Room. Boasting an array of sophisticated amenities, including a cutting-edge flat-screen TV and meticulously regulated air conditioning, this room is meticulously crafted to provide an unrivaled experience of opulence and relaxation. Prepare to embark on an unforgettable journey of refined indulgence in this beautifully designed haven.</p>
                    <div className="row mt-5">
                      <div className="col-12">
                        <h3 className="mb-4">Amenities</h3>
                        <ul className="list-unstyled ul-check">
                          <li>Free Wifi</li>
                          <li>Free Parking (Reservation needed)</li>
                          <li>Flat screen TV</li>
                          <li>Inverter silent AC</li>
                          <li>Electronic key card</li>
                          <li>In-room safety box</li>
                          <li>Good Breakfast (Charges Apply)</li>
                          <li>Airport Transfer (Charges Apply)</li>
                          <li>Laundry Service (Charges Apply)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-md-0">
          <div className="row no-gutters align-items-stretch room-animate site-section pb-0">
            <a id="twin_room" />
            <div className="col-md-7 order-md-2 img-wrap" data-jarallax-element={-100}>
              <div className="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/twin_room.jpg")'}} />
            </div>
            <div className="col-md-5">
              <div className="row justify-content-center">
                <div className="col-md-8 py-5">
                  <h3 className="display-4 heading">Superior Twin</h3>
                  <div className="room-exerpt">
                    <div className="room-price mb-4">₱4,000<span className="per">/night</span></div>
                    <h3>1-2 pax</h3>
                    <p>Extra Person: +₱800</p>
                    <p>Experience utmost comfort and relaxation in our thoughtfully designed twin room, meticulously outfitted with state-of-the-art air conditioning to ensure an optimal environment throughout your stay. Immerse yourself in a tranquil ambiance as you and your companion enjoy the ultimate comfort provided by this well-appointed accommodation. </p>
                    <div className="row mt-5">
                      <div className="col-12">
                        <h3 className="mb-4">Amenities</h3>
                        <ul className="list-unstyled ul-check">
                          <li>Free Wifi</li>
                          <li>Free Parking (Reservation needed)</li>
                          <li>Flat screen TV</li>
                          <li>Inverter silent AC</li>
                          <li>Electronic key card</li>
                          <li>In-room safety box</li>
                          <li>Good Breakfast (Charges Apply)</li>
                          <li>Airport Transfer (Charges Apply)</li>
                          <li>Laundry Service (Charges Apply)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-md-0">
        <div className="row no-gutters align-items-stretch room-animate site-section">
          <a id="single_room" />
          <div className="col-md-7 img-wrap" data-jarallax-element={-100}>
            <div className="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/queen_room.jpg")'}} />
          </div>
          <div className="col-md-5">
            <div className="row justify-content-center">
              <div className="col-md-8 py-5">
                <h3 className="display-4 heading">Single Room</h3>
                <div className="room-exerpt">
                  <div className="room-price mb-4">₱3,000<span className="per">/night</span></div>
                  <h3>1-2 pax</h3>
                  <p>Extra Person: +₱800 </p>
                  <p>Indulge in a tranquil and invigorating experience within our inviting single room. Immerse yourself in the epitome of comfort as you luxuriate amidst plush bedding, while the meticulously regulated air conditioning ensures a consistently pleasant environment. Discover a serene haven where you can unwind and rejuvenate, offering the perfect ambiance for an enjoyable and comfortable stay.</p>
                  <div className="row mt-5">
                    <div className="col-12">
                      <h3 className="mb-4">Amenities</h3>
                      <ul className="list-unstyled ul-check">
                        <li>Free Wifi</li>
                        <li>Free Parking (Reservation needed)</li>
                        <li>Flat screen TV</li>
                        <li>Inverter silent AC</li>
                        <li>Electronic key card</li>
                        <li>In-room safety box</li>
                        <li>Good Breakfast (Charges Apply)</li>
                        <li>Airport Transfer (Charges Apply)</li>
                        <li>Laundry Service (Charges Apply)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
            <p><a href="about.html" className="readmore">Read more</a></p>
          </div>
          <div className="col-md-8 ml-auto">
            <div className="row">
              <div className="col-md-3">
                <h3>Navigation</h3>
                <ul className="list-unstyled">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">Our Story</a></li>
                  <li className="active"><a href="rooms.html">Rooms</a></li>
                  <li><a href="memories.html">Memories</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="booking.html">Book Now</a></li>
                </ul>
              </div>
              <div className="col-md-9 ml-auto">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <h3>Address</h3>
                    <a href="https://www.google.com/maps/place/Park+Avenue+Guesthouse+2443/@14.5457169,120.9917339,17z/data=!3m1!4b1!4m9!3m8!1s0x3397c95d7a1e6195:0x9a30b02893babca6!5m2!4m1!1i2!8m2!3d14.545717!4d120.9966048!16s%2Fg%2F11c2rg38c3?entry=ttu">2443 Park Avenue, Pasay <br /> Metro Manila, Philippines</a>
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


export default Rooms;