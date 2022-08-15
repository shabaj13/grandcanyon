import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contactContent">
        <p className="contactHeading">Contact Us</p>
          <form>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name="fullname" required/>

            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" required/>

            <label htmlFor="number">Phone Number</label>
            <input type="number" name="number" />

             <label htmlFor="message">Message</label> 
            <textarea name="message" rows="4"></textarea>

            <button type="submit">Submit Form</button>
          </form>
        </div>
     </div> 
    </>
  )
}

export default Contact;