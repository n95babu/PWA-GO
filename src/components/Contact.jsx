import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='page contact-page'>
        <h4>Contact</h4>
        <h1>Let's talk digital</h1>
        <form>
          <div class="form-group">
            <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Name" />
          </div>
          <div class="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <textarea type="text" className="form-control" id="message" placeholder="Message" rows="5" ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>




      </div>
    </>
  )
}
