import React, { Component } from 'react';
import { fetchBathrooms, fethRandomBathrooms } from '../services/Api-Helper';
import Random from './Random'
import Form from 'react-bootstrap/Form';


class Bathroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      bathrooms: [],
      userBathrooms: [],
      name: '',
      borough: '',
      location: '',
      open_year_round: ''
    };
  }

  componentDidMount = async () => {
    const data = await fetchBathrooms();
    this.setState({
      bathrooms: data,
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const Home = await fethRandomBathrooms(this.state.userInput)
    console.log(Home)
    this.setState({
      userBathrooms: Home
    });
  };

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    });
  };

  render() {
    return (
      <div className='page'>
        <div>
          <Random
            userInput={this.state.userInput}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            userBathrooms={this.state.userBathrooms}
          />
        </div>
      </div>
    );
  };
};


export default Bathroom;
