import React from 'react';
import { useSpring, animated } from 'react-spring';

function Home() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <div className='page home-page'>
      <div className="hero home-hero">
        <div>
          <animated.div style={props}>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <div className="lead">Bringing a better bathroom experience to people and communities in NYC.</div>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default Home;