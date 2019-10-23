import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }
  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/SSb8VgBqK1e",
      this.state,
      { headers: { "Accept": "application/json" } }
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)
      });
    // e.preventDefault();
    // alert("Message Sent")
  }
  handleFields = e => this.setState({
    [e.target.name]: e.target.value
  })

  render() {
    return (
      <>
        <div className="page">
          <div className="form-address" id="contact">
            <form className="contact-form" onSubmit={this.handleForm}><p className="contact-us">Contact Us</p>
              <input className="input" type="text" name="name" required onChange={this.handleFields} placeholder="Name" />
              <input className="input" type="text" name="email" required onChange={this.handleFields}
                placeholder="Email" />
              <input className="input" type="" name="message" required onChange={this.handleFields} placeholder="What's on your mind?" />
              <Button type="submit" className="btn btn-dark">SUMBIT</Button>
            </form>
          </div>
        </div>
      </>
    )
  }
}
export default ContactForm