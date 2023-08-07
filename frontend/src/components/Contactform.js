import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null )

  

  const handleSubmit = async (e) => {
    e.preventDefault()

    const contact = {name,emailAddress,subject,message}

    const response = await fetch('https://park-avenue-guesthouse-2443.onrender.com/api/contacts',{
      method:'POST',
      body:JSON.stringify(contact),  
      headers:{
        'Content-Type':'application/json'
      }
    })

    const json = await response.json( )

    if(!response.ok){

      setError(json.error)

    }
    if(response.ok){
      setName('')
      setEmailAddress('')
      setSubject('')
      setMessage('')

      setError(null)
      console.log('Inquiry sent',json)
    }
    
  }

  return (

    <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
      <form className= "create" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input   
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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

      {error && <div className="text-black">{error}</div>}
    </div>
  );
};

export default ContactForm;
