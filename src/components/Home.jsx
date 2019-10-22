import React from 'react';
import { useSpring, animated } from 'react-spring';



function Home() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <div className='page home-page'>
      <div className="hero home-hero">
        <div>
          <animated.div style={props}>
            <span>
              {/* <div className='home-greet'>
                <div className="main_text">

                  Bringing a better bathroom experience to people and communities in NYC.
                </div>
              </div> */}
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  {/* <h1 class="display-4">Fluid jumbotron</h1> */}
                  <div className="lead">Bringing a better bathroom experience to people and communities in NYC.</div>
                </div>
              </div>
            </span>
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default Home;