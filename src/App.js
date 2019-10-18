import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Nav />
            <Switch>
              {/* <Route path='/' exact component={Home} />
              <Route path='/Bathroom' component={Bathroom} />
              <Route path='/contact' component={Contact} />
              <Route path='/Map' component={Map} />
             */}
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    )
  }
}


export default App;
