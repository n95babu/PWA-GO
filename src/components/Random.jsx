import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRestroom } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Random extends React.Component {
  render() {
    return (
      <div className="home">
        <div>
          <div className='Randinput'>
            <form onSubmit={
              this.props.handleSubmit
            }>
              <input className="input"
                value={this.props.userInput}
                onChange={this.props.handleChange}
                placeholder="Brooklyn"
              />&nbsp;
              <button className="btn btn-dark" type="submit">Search</button>
            </form>
          </div>
          <div className="scrollable-area">
            {this.props.userBathrooms.map(bathroom => (
              <div className="rounded-pill">
                <div className="scrollable">
                  <FontAwesomeIcon icon={faRestroom} />
                  <h3>{bathroom.borough}</h3>
                  <p>{bathroom.name}</p>
                  <p>{bathroom.location}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Random;