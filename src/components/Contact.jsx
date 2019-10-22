import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='page contact-page'>
        <h4>Contact</h4>
        {/* <h1>Let's talk digital</h1> */}
        <form>
          <div className="form-row">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
            <textarea type="text" className="form-control" id="message" placeholder="Message" rows="5" ></textarea>
          </div>
          <button type="submit" >Send Message</button>
        </form>
      </div>
    </>
  )
}
