import React, { Component } from 'react'
import { fetchBathrooms } from '../services/Api-Helper'

class Bathroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      bathrooms: [],
    };
  }

  async componentDidMount() {
    const data = await fetchBathrooms();
    this.setState({
      isLoaded: true,
      bathrooms: data
    });
  }




  render() {
    const { error, isLoaded, bathrooms } =
      this.state;
    return (
      <div className='page'>
        <h1>Bathroom</h1>
        {/* {this.bathrooms.map(location => ( */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 class="card-title">WTC</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        {/* // ))} */}
      </div>
    )
  }
}

export default Bathroom;
