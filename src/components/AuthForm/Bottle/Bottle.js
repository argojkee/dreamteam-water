import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTransition, animated } from '@react-spring/web';

import { ReactComponent as BottleCircle } from '../../../images/signIn-signUp/bottle/bottleCircle.svg';

import { change } from '../../../redux/auth/authSlice'

/* styles import */
import { BottleStyles } from './BottleStyles.styled';
/* end */

const Bottle = () => {

  const dispatch = useDispatch();

  const [parameters, setParameters] = useState([]);
  const [bottleStartY, setBottleStartY] = useState(0);
  
  const bottleRef = useRef();

  useEffect(() => {

    // write bottle coordinate and size to 'auth' store
    // it's need to position splush under bottle
    dispatch(change({operation: 'changeBottleXY', 
    data: {x: bottleRef.current.offsetLeft, y: bottleRef.current.offsetTop, width: bottleRef.current.offsetWidth, height: bottleRef.current.offsetHeight,}}));

    // generate random parameter of bubble
    const random = () => {

      let bottleCenterX = 0;

      if (bottleRef.current !== null) {
        bottleCenterX = bottleRef.current.offsetWidth / 2;
        setBottleStartY(bottleRef.current.offsetHeight);
      }

      return {
        size: randomGenerator(15, 5),
        x: randomGenerator(bottleCenterX + 20, bottleCenterX - 40),
      };
    };
    
    // random generation interval
    const timer = setInterval(() => {
      parameters.length >= 10 
        ? setParameters([])
        : setParameters([...parameters, random()]);
    }, randomGenerator(150, 50) * 10);

    return () => {
      clearInterval(timer);
    };
    
  }, [dispatch, parameters]);

  const randomGenerator = (max, min) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const transitions = useTransition(parameters, {
    from: { transform: `translateY(${bottleStartY - 20}px)`, opacity: '1' },
    enter: { transform: `translateY(30px)`, opacity: '0,8' },
    config: {
      duration: randomGenerator(4000, 2000),
      friction: randomGenerator(300, 5) * 10,
    },
  });

  return (
    <BottleStyles>
      <div className="bottleContainer" ref={bottleRef}>
        {transitions((style, item) => (
          <animated.div style={style}>
            <BottleCircle
              style={{
                position: 'absolute',
                width: `${item.size}px`,
                height: `${item.size}px`,
                left: `${item.x}px`,
              }}
            />
          </animated.div>
        ))}
      </div>
    </BottleStyles>
  );
};

export default Bottle;
