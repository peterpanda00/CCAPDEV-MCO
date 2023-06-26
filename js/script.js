(function($) {

    "use strict";

        $(document).ready(function() {

          /* Video */
          var $videoSrc;  
          $('.play-btn').click(function() {
              $videoSrc = $(this).data( "src" );
          });
          $('#myModal').on('shown.bs.modal', function (e) {
          $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
          })
          $('#myModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src',$videoSrc); 
          })

          $(".user-items .search-item").click(function(){
              $(".search-box").toggleClass('active');
              $(".search-box .search-input").focus();
            });
            $(".close-button").click(function(){
              $(".search-box").toggleClass('active');
            }); 


            // ------------------------------------------------------------------------------ //
            // Scroll Top 
            // ------------------------------------------------------------------------------ //
            var scrollToTopBtn = document.getElementById("scroll-top-btn");
            var rootElement = document.documentElement;

            function scrollToTop() {
              // Scroll to top logic
              rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }
            scrollToTopBtn.addEventListener("click", scrollToTop);

            // ------------------------------------------------------------------------------ //
            // Swiper
            // ------------------------------------------------------------------------------ //

            var swiper = new Swiper(".product-swiper", {
              slidesPerView: 3,
              spaceBetween: 20,
              navigation: {
                nextEl: ".icon-arrow-right",
                prevEl: ".icon-arrow-left",
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                901: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
              },
            });

            var swiper = new Swiper(".testimonial-swiper", {
              loop: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            });

            new DateTimePickerComponent.DatePicker( 'select-arrival-date' );
            new DateTimePickerComponent.DatePicker( 'select-departure-date' );            

        }); // End of a document


    })(jQuery);





const checkAvailabilityButton = document.getElementById('checkAvailabilityButton');
checkAvailabilityButton.addEventListener('click', showAvailableRooms);

function showAvailableRooms(event) {
  event.preventDefault();


  const availableRoomsSection = document.getElementById('our-rooms');
  availableRoomsSection.style.display = 'block';
}

var input = document.querySelector("#phone");
window.intlTelInput(input, {
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
      nationalMode:false,
      initialCountry:"ph",
    });

const singleRoomButton = document.getElementById('single-room-btn');
singleRoomButton.addEventListener('click', function(event) {
  showGuestForm(event, 'Single Room');
});


const twinRoomButton = document.getElementById('twin-room-btn');
twinRoomButton.addEventListener('click', function(event) {
  showGuestForm(event, 'Twin Room');
});


const queenRoomButton = document.getElementById('queen-room-btn');
queenRoomButton.addEventListener('click', function(event) {
  showGuestForm(event, 'Queen Room');
});


const kingRoomButton = document.getElementById('king-room-btn');
kingRoomButton.addEventListener('click', function(event) {
  showGuestForm(event, 'King Room');
});


const familyRoomButton = document.getElementById('family-room-btn');
familyRoomButton.addEventListener('click', function(event) {
  showGuestForm(event, 'Family Room');
});

function showGuestForm(event, roomType) {
  event.preventDefault();

  const roomTypeElement = document.getElementById('room-type');
  roomTypeElement.textContent = roomType;

  
  const guestDetailsSection = document.getElementById('contact');
  guestDetailsSection.style.display = 'block';
}

var summaryCloseButton = document.getElementById('summary-close-btn');
summaryCloseButton.addEventListener('click', closeBookModal);
function closeBookModal(event) {
  $(bookingModal).modal("hide");
}



var arrivalDate = document.getElementById("select-arrival-date").innerText;
var departureDate = document.getElementById("select-departure-date").innerText;
var roomCount = document.getElementsByName("rooms")[0].value;
var guestCount = document.getElementsByName("guests")[0].value;
var roomTypeElement = document.getElementById('room-type');
var roomType = roomTypeElement.textContent;

var firstName = document.getElementsByName("first name")[0].value;
var lastName = document.getElementsByName("last name")[0].value;
var email = document.getElementsByName("email")[0].value;

var phoneInputField = document.querySelector("#phone");
var phoneInput = window.intlTelInput(phoneInputField, { utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" });
var contactNumber = phoneInput.getNumber();

var request = document.getElementsByName("request")[0].value;
var paymentMethodSelect = document.getElementById('payment-method');
var payment = paymentMethodSelect.value;


var guestDetailButton = document.getElementById("guest-detail-btn");
var bookingModal = document.getElementById("bookingModal");






guestDetailButton.addEventListener("click", function(event) {
  event.preventDefault(); 


  var firstName = document.getElementsByName("first name")[0].value;
  var lastName = document.getElementsByName("last name")[0].value;
  var email = document.getElementsByName("email")[0].value;

  var phoneInputField = document.querySelector("#phone");
  var phoneInput = window.intlTelInput(phoneInputField, { utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" });
  var contactNumber = phoneInput.getNumber();

  var request = document.getElementsByName("request")[0].value;

  var paymentMethodSelect = document.getElementById('payment-method');
  var payment = paymentMethodSelect.value;

  
  var arrivalDate = document.getElementById("select-arrival-date").innerText;
  var departureDate = document.getElementById("select-departure-date").innerText;
  var roomCount = document.getElementsByName("rooms")[0].value;
  var guestCount = document.getElementsByName("guests")[0].value;


  var roomTypeElement = document.getElementById('room-type');
  var roomType = roomTypeElement.textContent;

  
  var modalBody = bookingModal.querySelector(".modal-body");
  modalBody.innerHTML = "<h4>Guest Details</h4>"+
                        "<p><strong> Guest Name: </strong>" + firstName + " " + lastName + "</p>" +
                        "<p><strong> Email: </strong>"+ email + "</p>" +
                        "<p><strong> Contact Number: </strong>"+ contactNumber + "</p>" +
                        "<p><strong> Special Requests: </strong>"+ request + "</p>" +
                        "<p><strong> Payment Method: </strong>"+ payment + "</p>" +
                        "<br>"+
                        "<h4>Booking Details</h4>"+
                        "<p><strong> Arrival: </strong> " + arrivalDate + "</p>" +
                        "<p><strong> Departure: </strong> " + departureDate + "</p>" +
                        "<p><strong> Room Type: </strong> " + roomType  + "</p>" +
                        "<p><strong> Rooms: </strong> " + roomCount  + " rooms</p>" +
                        "<p><strong> Guests: </strong> " + guestCount + " guests</p>";

  $(bookingModal).modal("show");
});

var editButton = document.getElementById("edit-btn");
editButton.addEventListener("click", function() {
  $(bookingModal).modal("hide");

  $(editModal).modal("show");
});

var editCloseButton = document.getElementById('edit-close-btn');
editCloseButton.addEventListener('click', closeEditModal);
function closeEditModal(event) {
  $(editModal).modal("hide");
  $(bookingModal).modal("hide");
  $(bookingModal).modal("show");
}

var bookButton = document.getElementById("final-book-btn");
var saveChangesButton = document.getElementById("save-btn");
var editModal = document.getElementById("editModal");
var bookingModal = document.getElementById("bookingModal");

saveChangesButton.addEventListener("click", function() {

  var firstName = document.getElementsByName("first name")[0].value;
  var lastName = document.getElementsByName("last name")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var contactNumber = document.getElementsByName("contact number")[0].value;
  var request = document.getElementsByName("request")[0].value;
  var paymentMethodSelect = document.getElementById('payment-method');
  var payment = paymentMethodSelect.value;
  
  var arrivalDate = document.getElementById("select-arrival-date").innerText;
  var departureDate = document.getElementById("select-departure-date").innerText;
  var roomCount = document.getElementsByName("rooms")[0].value;
  var guestCount = document.getElementsByName("guests")[0].value;

 
  var editedFirstName = document.querySelector("#editFirstName").value;
  var editedLastName = document.querySelector("#editLastName").value;
  var editedEmail = document.querySelector("#editEmail").value;
  var editedContactNumber = document.querySelector("#editContactNumber").value;
  var editedRequest = document.querySelector("#editSpecialRequests").value;
  var editpaymentMethodSelect = document.getElementById('edit-payment-method');
  var editedPayment = editpaymentMethodSelect.value;

  $(editModal).modal("hide");

  if (editedFirstName.trim() === "") {
    editedFirstName = firstName;
  }
  if (editedLastName.trim() === "") {
    editedLastName = lastName;
  }
  if (editedEmail.trim() === "") {
    editedEmail = email;
  }
  if (editedContactNumber.trim() === "") {
    editedContactNumber = contactNumber;
  }
  if (editedRequest.trim() === "") {
    editedRequest = request;
  }
  if (editedPayment.trim() === "") {
    editedPayment = payment;
  }

  var modalBody = bookingModal.querySelector(".modal-body");
  modalBody.innerHTML = "<h4>Guest Details</h4>"+
                        "<p><strong> Guest Name: </strong>" + editedFirstName + " " + editedLastName + "</p>" +
                        "<p><strong> Email: </strong>"+ editedEmail + "</p>" +
                        "<p><strong> Contact Number: </strong>"+ editedContactNumber + "</p>" +
                        "<p><strong> Special Requests: </strong>"+ editedRequest + "</p>" +
                        "<p><strong> Payment Method: </strong>"+ editedPayment + "</p>" +
                        "<br>"+
                        "<h4>Booking Details</h4>"+
                        "<p><strong> Arrival: </strong> " + arrivalDate + "</p>" +
                        "<p><strong> Departure: </strong> " + departureDate + "</p>" +
                        "<p><strong> Room Type: </strong> " + roomType  + "</p>" +
                        "<p><strong> Rooms: </strong> " + roomCount  + " rooms</p>" +
                        "<p><strong> Guests: </strong> " + guestCount + " guests</p>";

 $(bookingModal).modal("show");

  
});


bookButton.addEventListener("click", function() {
 
  $(bookingModal).modal("hide");


  $(confirmationModal).modal("show");


  var countdown = 10; 
  var countdownElement = document.getElementById("countdown");
  countdownElement.textContent = countdown;

  var countdownInterval = setInterval(function() {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown === 0) {
     
      clearInterval(countdownInterval);
      window.location.href = "index.html";
    }
  }, 1000);
});

var bookingCloseButton = document.getElementById('booking-close-btn');
var bookingCloseButton2 = document.getElementById('booking-close-btn-2');
bookingCloseButton.addEventListener('click', closeFinalBookModal);
bookingCloseButton2.addEventListener('click', closeFinalBookModal);

function closeFinalBookModal(event) {
  window.location.href = "index.html";
}



