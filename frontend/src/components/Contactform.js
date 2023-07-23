import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailAddress: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form data will be sent to the backend using the fetch API
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here, if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle errors here, if needed
        console.error(error);
      });
  };

  return (
    <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailAddress">Your Email *</label>
          <input
            type="email"
            className="form-control"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Send"
            className="btn btn-pill px-5 text-white"
            style={{ backgroundColor: '#605753', borderColor: '#605753' }}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
