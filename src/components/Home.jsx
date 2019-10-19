import React from 'react';
import { useSpring, animated } from 'react-spring';


function Home() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <div className='page home-page'>
      <div className="hero home-hero">
        <div>
          <animated.div style={props}>
            <h1>Home</h1>
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default Home;