import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

import {ReactComponent as BottleCircle} from '../../../images/signIn-signUp/bottle/bottleCircle.svg';

const Bottle = () => {

  const [parameters, setParameters] = useState({});
 
  useEffect(() => {

    const random = () => {
        return {
            size: randomGenerator(20, 5, true), 
            x: 400, 
            startY: randomGenerator(window.innerHeight / 2 + 100, true), 
            speed: randomGenerator(10, null, false) * 1000,
        };
      };

    const timer = setInterval(() => {

        setParameters(random())
       
    }, randomGenerator(100, null, false) * 1000);

    return () => {
        clearInterval(timer);
    }; 
    
  }, []);

  const randomGenerator = (max, min, mode) => {

    if(mode) {
      return Math.round(Math.random() * (max - min) + min);
    }else {
      return Math.round(Math.floor(Math.random() * max));
    };
    
  };

  const springs = useSpring({

    loop: true,
    from: {transform: `translate(0, 50px)`, opacity: '1',},
    to: {transform: `translate(0, 0)`, opacity: '0',},
  
    config: {duration: parameters.speed, friction: 50, },

  });


  return (
    <animated.div style={{...springs,}}>
        <BottleCircle style={{ position: 'absolute', width: `${parameters.size}`, height: `${parameters.size}`, stroke: 'blue',}}/>
    </animated.div>
  )
}

export default Bottle