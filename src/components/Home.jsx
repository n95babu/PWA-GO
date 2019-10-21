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
              <div className='home-greet'>
                <div className="main_text">
                  Bringing a better bathroom experience to people and communities in NYC.
                </div>
                {/* <h1>Get Out There</h1> */}
                {/* <form>
                  <div className='form-group'>
                    <input type="text" />

                  </div>
                  <button type="submit" class="btn btn-light">Submit</button>
                </form> */}
              </div>
            </span>
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default Home;