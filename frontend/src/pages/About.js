import Navbar from "../components/Navbar";

const About = () => {
  useEffect(() => {
    document.title = "About - Park Avenue";
  }, []);
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

                    <Navbar></Navbar>
                    
                    <main className="untree_co--site-main">
                      <div className="untree_co--site-hero inner-page bg-light" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/parkavefview.png")'}}> {/* not working*/}
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-md-9">
                              <div className="site-hero-contents" data-aos="fade-up">
                                <h6 className="hero-heading text-white" style={{fontWeight: 'lighter'}}>Our Story</h6>
                                <div className="sub-text w-75">
                                  <p>It's nice to be back in the neighborhood!</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="untree_co--site-section">
                        <div className="container-fluid px-md-0">
                          <div className="row justify-content-center text-center pt-0 pb-5">  
                            <div className="col-lg-6 section-heading" data-aos="fade-up">
                              <h3 className="text-center">Our Story</h3>
                            </div>
                          </div>
                          {/* Background */}
                          <div className="container-fluid px-md-0">
                            <div className="row no-gutters align-items-stretch room-animate site-section">
                              <div className="col-md-7 order-md-2 img-wrap" data-jarallax-element={-100}>
                                <div className="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/parkaveday.jpg")'}} />
                              </div>
                              <div className="col-md-5">
                                <div className="row justify-content-center">
                                  <div className="col-md-8 py-5">
                                    <h3 className="display-4 heading">Our Background</h3>
                                    <div className="room-exerpt" data-aos="fade-up">
                                      <p>Nestled in a serene compound near Libertad, Pasay, Park Avenue Guesthouse 2443 showcases a rich history traced back to its 1920s origins. Since its opening in February 2017, it has garnered attention from both local and foreign nationals seeking a cozy and distinctive place to stay for a night or an extended period.</p>                  
                                      <p>With its unique offerings and warm hospitality, Park Avenue Guesthouse 2443 has become particularly popular among foreign guests, solidifying its status as the only known guesthouse in the area. Its welcoming atmosphere, attention to detail in renovations, and convenient location make it an inviting choice for visitors looking for a peaceful and comfortable stay.</p>  
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* History */}
                          <div className="container-fluid px-md-0">
                            <div className="row no-gutters align-items-stretch room-animate site-section">
                              <div className="col-md-7 img-wrap" data-jarallax-element={-100}>
                                <div className="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/parkavehistory.jpg")'}} />
                              </div>
                              <div className="col-md-5">
                                <div className="row justify-content-center">
                                  <div className="col-md-8 py-5">
                                    <h3 className="display-4 heading">Our History</h3>
                                    <div className="room-exerpt" data-aos="fade-up">
                                      <p>Park Avenue Guesthouse 2443, formerly known as the Trinidad household, has a rich history dating back to its original construction in the 1920s. Built by Mr. Wenceslao Trinidad, a prominent Filipino Bureau of Internal Revenue collector, the house was relocated to Pasay City after World War II. Today, it stands as a cherished historical landmark within the compound, representing one of the oldest residences in Manila.</p>                  
                                      <p>Under new ownership in 2015, the Trinidad house underwent a meticulous restoration to recapture its authentic charm. Now operating as Park Avenue Guesthouse 2443, it offers a serene haven with a peaceful neighborhood atmosphere. Its convenient location, only 6.6 kilometers from the airport and nestled in bustling Manila, makes it an ideal base for exploring the captivating attractions in the surrounding area.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Vision */}
                          <div className="container-fluid px-md-0">
                            <div className="row no-gutters align-items-stretch room-animate site-section">
                              <div className="col-md-7 order-md-2 img-wrap" data-jarallax-element={-100}>
                                <div className="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/parkaveview.jpg")'}} />
                              </div>
                              <div className="col-md-5">
                                <div className="row justify-content-center">
                                  <div className="col-md-8 py-5">
                                    <h3 className="display-4 heading">Our Vision</h3>
                                    <div className="room-exerpt" data-aos="fade-up">
                                      <p> We are driven by a clear vision - to be the premier destination for travelers seeking an authentic Philippine experience. We strive to preserve the historical relics and rich cultural heritage that define the country, while providing exceptional hospitality and personalized service. With genuine warmth, our goal is to showcase the captivating beauty and diverse wonders of our country through our unique accommodations and locally-inspired offerings.</p>
                                      <p>In our pursuit of excellence, we are committed to leading the way in sustainable tourism, making a positive impact on the environment and the communities we are privileged to serve. We extend a heartfelt invitation to join us on this remarkable journey.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CSR */}
                          <div className="container-fluid px-md-0">
                            <div className="row no-gutters align-items-stretch room-animate site-section">
                              <div className="col-md-7 img-wrap" data-jarallax-element={-100}>
                                <div className="bg-image h-100" style={{backgroundColor: '#efefef', backgroundImage: 'url("images/parkavetree.jpg")'}} />
                              </div>
                              <div className="col-md-5">
                                <div className="row justify-content-center">
                                  <div className="col-md-8 py-5">
                                    <h3 className="display-4 heading">Our CSR Initiatives</h3>
                                    <div className="room-exerpt" data-aos="fade-up">
                                      <p>At our guesthouse, we are deeply committed to creating a positive impact on society and the environment through our Corporate Social Responsibility (CSR) program. We prioritize sustainability by implementing eco-friendly practices, such as waste reduction, energy and water conservation, and responsible sourcing. Preserving the history, relics, and culture of our community is of utmost importance to us.</p>                  
                                      <p>In addition to our environmental efforts, we actively support local initiatives focused on education, health, and social welfare. By giving back to our community, we strive to make a lasting and positive impact on the lives of those in need. Our comprehensive CSR program reflects our unwavering dedication to preserving the environment, supporting the community, and ensuring a sustainable future for generations to come.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="untree_co--site-section pt-0">
                          <div className="row justify-content-center">
                            <video width={1000} height={567} controls>
                              <source src="images/parkavevid.mp4" type="video/mp4" />
                              <source src="movie.ogg" type="video/ogg" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      </div></main>
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
                                  <li><a href="/">Home</a></li>
                                  <li className="active"><a href="/about">Our Story</a></li>
                                  <li><a href="/rooms">Rooms</a></li>
                                  <li><a href="/memories">Memories</a></li>
                                  <li><a href="/contact">Contact</a></li>
                                  <li><a href="/booking">Book Now</a></li>
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


export default About;