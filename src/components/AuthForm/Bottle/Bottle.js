import { useState, useEffect, useRef } from 'react';
import { useTransition, animated } from '@react-spring/web';

import {ReactComponent as BottleCircle} from '../../../images/signIn-signUp/bottle/bottleCircle.svg';

/* styles import */
import Styles from './Styles';
/* end */

const Bottle = () => {

  const [parameters, setParameters] = useState([]);

  const ref = useRef();
 
  useEffect(() => {

    const random = () => {
      
        return {
   
          size: randomGenerator(15, 5), 
          x: randomGenerator(220, 150), 
        };
      };

    const timer = setInterval(() => {

        setParameters([...parameters, random()])
       
    }, randomGenerator(3000, 300));

    return () => {
        clearInterval(timer);
    }; 
    
  }, []);

  const randomGenerator = (max, min) => {

    return Math.round(Math.random() * (max - min) + min);
    
  };

  const transitions = useTransition(parameters, {
    from: {transform: `translateY(250px)`, opacity: '1',},
    enter: {transform: `translateY(70px)`, opacity: '0',},
    config: {duration: randomGenerator(3000, 1000), friction: randomGenerator(100, 10) * 10,}
  })

  return ( 
    
    <Styles $div >
     { transitions((style, item) => 
      (<animated.div style={style}>
      
        <BottleCircle style={{ position: 'absolute', width: `${item.size}px`, height: `${item.size}px`,
        left: item.x}}/>
        
      </animated.div>)
      )}
    </Styles>

  )
};

export default Bottle;
