import Navbar from "../components/Navbar";
import Cookies from 'js-cookie';
import {useState,useEffect } from 'react';



const Home = () => {


const GUEST_USERID = '64ccfc4bc4db8bceaaec9ecb'
const [userID, setUserID] = useState('');
const [token, setToken] = useState('');

useEffect(() => {

  const userId = sessionStorage.getItem('userId');

  if (userId && userId !== '64ccfc4bc4db8bceaaec9ecb') {
    setUserID(userId); 
  } else {
    sessionStorage.setItem('userId', GUEST_USERID);
    setUserID(GUEST_USERID); 
  }
    

}, []);


    return(
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}> 
                    <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-icon" viewBox="0 0 512 512">
                      <path fill="currentColor" d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256L359.873 121.377z" />
                    </symbol>
                  </svg>
                 
                  {/*
                  <div id="untree_co--overlayer" />
                    <div className="loader">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>

                  */}
                  
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
                   <Navbar userIDcookies={userID}/>
                    <div className="untree_co--site-main">
                      <div className="owl-carousel owl-hero">
                        <div className="untree_co--site-hero overlay" style={{backgroundImage: 'url("images/slider_1.png")'}}>
                          <div className="container">
                            <div className="row align-items-center justify-content-center">
                              <div className="col-md-8">
                                <div className="site-hero-contents text-center" data-aos="fade-up">
                                  <h1 className="hero-heading">Park Avenue Guesthouse 2443</h1>
                                  <div className="sub-text">
                                    <p> Welcome to Park Avenue 2443 Guesthouse, where Spanish elegance meets modern comfort in the heart of Pasay. Immerse yourself in our captivating retreat, offering meticulously designed rooms, 
                                      serene courtyards, and a charming onsite restaurant.</p>
                                  </div>
                                  <a href="/booking" className="btn btn-medium btn-outline-arrow light-hover btn-pill position-relative"><span>Book Now</span>            
                                    <svg className="arrow-icon" width={18} height={20} style={{top: '20px'}}>
                                      <use xlinkHref="#arrow-icon" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="untree_co--site-hero overlay" style={{backgroundImage: 'url("images/slider_2.png")'}}>
                          <div className="container">
                            <div className="row align-items-center justify-content-center">
                              <div className="col-md-7">
                                <div className="site-hero-contents text-center" data-aos="fade-up">
                                  <h1 className="hero-heading">Experience the Timeless Beauty of Spanish Elegance.</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="untree_co--site-hero overlay" style={{backgroundImage: 'url("images/slider_3.png")'}}>
                          <div className="container">
                            <div className="row align-items-center justify-content-center">
                              <div className="col-md-10">
                                <div className="site-hero-contents text-center" data-aos="fade-up">
                                  <h1 className="hero-heading">Away from the Hustle and Bustle of City Life</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="untree_co--site-section float-left pb-0 featured-rooms">
                        <div className="container pt-0 pb-5">
                          <div className="row justify-content-center text-center">  
                            <div className="col-lg-6 section-heading" data-aos="fade-up">
                              <h3 className="text-center">Featured Rooms</h3>
                            </div>
                          </div>
                        </div>
                        <div className="container-fluid pt-5">
                          <div className="suite-wrap overlap-image-1">
                            <div className="suite">
                              <div className="image-stack">
                                <div className="image-stack-item image-stack-item-top" data-jarallax-element={-50}>
                                  <div className="overlay" />
                                  <img src="images/king_room1.jpg" alt="Image" className="img-fluid pic1" />
                                </div>
                                <div className="image-stack-item image-stack-item-bottom">
                                  <div className="overlay" />
                                  <img src="images/king_room2.jpg" alt="Image" className="img-fluid pic2" />
                                </div>
                              </div>
                            </div> {/* .suite */}
                            <div className="suite-contents" data-jarallax-element={50}>
                              <h2 className="suite-title">Imperial King</h2>
                              <div className="suite-excerpt">
                                <p>Indulge in the lavish King Bedroom at Park Avenue Guesthouse 2443. This elegant retreat features a spacious king-sized bed, tasteful decor, and modern amenities. Relax in style, enjoy stunning views, and experience the ultimate in comfort and luxury during your stay.</p>
                                <p><a href="/rooms" className="readmore">Room Details</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="suite-wrap overlap-image-2">
                            <div className="suite">
                              <div className="image-stack">
                                <div className="image-stack-item image-stack-item-top">
                                  <div className="overlay" />
                                  <img src="images/family_room1.jpg" alt="Image" className="img-fluid pic1" />
                                </div>
                                <div className="image-stack-item image-stack-item-bottom" data-jarallax-element={-50}>
                                  <div className="overlay" />
                                  <img src="images/family_room2.jpg" alt="Image" className="img-fluid pic2" />
                                </div>
                              </div>
                            </div>
                            <div className="suite-contents" data-jarallax-element={50}>
                              <h2 className="suite-title">Family Room</h2>
                              <div className="suite-excerpt pr-5">
                                <p>Experience comfort and togetherness in the inviting Family Room at Park Avenue Guesthouse 2443. This spacious retreat is tastefully decorated and equipped with modern amenities, ensuring a delightful stay for your entire family.</p>
                                <p><a href="/rooms" className="readmore">Room Details</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="untree_co--site-section">
                        <div className="container">
                          <div className="container pt-0 pb-5">
                            <div className="row justify-content-center text-center">  
                              <div className="col-lg-6 section-heading" data-aos="fade-up">
                                <h3 className="text-center">Guesthouse Amenities</h3>
                              </div>
                            </div>
                          </div>
                          <div className="row custom-row-02192 align-items-stretch">
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={100}>
                              <div className="media-29191 text-center h-100">
                                <div className="media-29191-icon">
                                  <img src="images/svg/parking.svg" alt="Image" className="img-fluid" />
                                </div>
                                <h3>Free Self-Parking</h3>
                                <p>Enjoy the convenience of complimentary self-parking at Park Avenue Guesthouse 2443. Whether you're traveling by car or renting one during your stay, this amenity ensures a hassle-free experience, allowing you to easily come and go at your leisure.</p>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={200}>
                              <div className="media-29191 text-center h-100">
                                <div className="media-29191-icon">
                                  <img src="images/svg/garden.svg" alt="Image" className="img-fluid" />
                                </div>
                                <h3>Hydrophonic Farm</h3>
                                <p>Discover an innovative farming method that uses nutrient-rich water instead of soil to cultivate a variety of crops. Immerse yourself in this eco-friendly and fascinating agricultural adventure, where you can witness the growth of fresh, organic produce in a controlled and efficient environment.</p>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={100}>
                              <div className="media-29191 text-center h-100">
                                <div className="media-29191-icon">
                                  <img src="images/svg/wifi.svg" alt="Image" className="img-fluid" />
                                </div>
                                <h3>Complimentary WiFi in public areas</h3>
                                <p>Experience seamless connectivity throughout the public areas of the guesthouse with complimentary WiFi. Whether you're relaxing in the lobby, enjoying a meal in the dining area, or working in a shared space, stay connected and in touch with this convenient amenity.</p>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={200}>
                              <div className="media-29191 text-center h-100">
                                <div className="media-29191-icon">
                                  <img src="images/svg/food.svg" alt="Image" className="img-fluid" />
                                </div>
                                <h3>Dining &amp; Beverage Services</h3>
                                <p>Indulge in delectable culinary experiences with the dining and beverage services offered at Park Avenue Guesthouse 2443. Savor delicious meals prepared by talented chefs, sip on refreshing beverages, and enjoy impeccable service without leaving the comfort of the guesthouse.</p>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={100}>
                              <div className="media-29191 text-center h-100">
                                <div className="media-29191-icon">
                                  <img src="images/svg/airport.svg" alt="Image" className="img-fluid" />
                                </div>
                                <h3>Airport Transfer</h3>
                                <p>Start your trip off right with the convenient airport transfer service available at Park Avenue Guesthouse 2443. Arrive and depart with ease as the guesthouse provides a seamless transportation experience, ensuring a smooth transition to and from the airport.</p>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={200}>
                              <div className="media-29191 text-center h-100">
                                <div className="media-29191-icon">
                                  <img src="images/svg/washing-machine.svg" alt="Image" className="img-fluid" />
                                </div>
                                <h3>Laundry Service</h3>
                                <p>Travel light and maintain fresh attire throughout your stay with the convenient laundry service provided by Park Avenue Guesthouse 2443. Whether you need to refresh your clothes after a long journey or simply prefer to have your garments professionally cared for, this amenity offers convenience and peace of mind.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="untree_co--site-section">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-4 section-heading" data-aos="fade-up">
                              <h3 className="text-left">Featured Articles</h3>
                              <div className="w-75">
                                <p>Discover a collection of engaging and informative articles that showcase the unique features and offerings of our guesthouse.</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="post-entry" data-aos="fade-up" data-aos-delay={100}>
                                <a href="#" className="thumb"><img src="images/article_1.jpeg" alt="Image" className="img-fluid" /></a>
                                <div className="post-entry-contents">
                                  <h3><a href="#">11 Best Hostels in Manila, Philippines 2022</a></h3>
                                  <div className="date">April 15, 2020 • by <a href="#">Viktor Vincej</a></div>
                                  <p>When you go exploring the cities of Manila, Philippines, remove the options of experiencing the typical hotel stay and just join in on the melting pot of cultures that cross in the hostel scene.</p>
                                  <p><a href="https://www.travelinglifestyle.net/hostels-manila-backpackers/?fbclid=IwAR22Hev81WymBgiufVajrhRt4dhhNw4GgHZW4RhYmgTCiPZ4L0GABNrtKnk" className="readmore">Read more</a></p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="post-entry" data-aos="fade-up" data-aos-delay={200}>
                                <a href="#" className="thumb"><img src="images/article_2.png" alt="Image" className="img-fluid" /></a>
                                <div className="post-entry-contents">
                                  <h3><a href="#">Chinoy TV Episode 9 of Season 27</a></h3>
                                  <div className="date">July 9, 2018 • by <a href="#">CHiNOY TV Online</a></div>
                                  <p>Turn back time as we take you on a Spanish-inspired guesthouse tour at Park Avenue Guesthouse.</p>
                                  <p><a href="https://www.youtube.com/watch?v=OoqQSY6kwck&ab_channel=CHiNOYTVOnline" className="readmore">Read more</a></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <footer className="untree_co--site-footer">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4 pr-md-5">
                            <h3>Our Story</h3>
                            <p>Situated in the heart of Manila, Park Avenue Guesthouse 2443 stands out with its captivating Hispanic architecture and rich historical designs, creating a space that sparks curiosity and ignites the imagination.</p>         
                            <a href="/about" className="readmore">Read more</a><p />
                          </div>
                          <div className="col-md-8 ml-auto">
                            <div className="row">
                              <div className="col-md-3">
                                <h3>Navigation</h3>
                                <ul className="list-unstyled">
                                  <li className="active"><a href="/">Home</a></li>
                                  <li><a href="/about">Our Story</a></li>
                                  <li><a href="/rooms">Rooms</a></li>
                                  <li><a href="/memories">Memories</a></li>
                                  <li><a href="/contact">Contact</a></li>
                                  <li><a href="/booking">Book Now</a></li>
                                  <li><a href="/meettheteam">Meet The Team</a></li>
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

export default Home;