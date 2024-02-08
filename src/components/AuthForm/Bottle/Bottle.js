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

  // delete old bubble, when page is chenge
  useEffect(() => {

    function handleWindowResize() {
      setParameters([]);
    }

    window.addEventListener('resize', handleWindowResize);

    // write bottle coordinate and size to 'auth' store
    // it's need to position splush under bottle
    dispatch(change({operation: 'changeBottleXY', 
    data: {x: bottleRef.current.offsetLeft, y: bottleRef.current.offsetTop, width: bottleRef.current.offsetWidth, height: bottleRef.current.offsetHeight,}}));

    // generate random parameter of bubble
    const random = () => {

      let bottleCenterX = 0;

      if (bottleRef.current !== null) {

        // start coordinate of bottle for bubble 
        bottleCenterX = bottleRef.current.offsetWidth / 2;
        setBottleStartY(bottleRef.current.offsetHeight);
      }

      return {
        size: bottleRef.current && bottleRef.current.offsetWidth < 100 
        ? randomGenerator(7, 3) : randomGenerator(15, 5),
        x: randomGenerator(bottleCenterX + bottleRef.current.offsetWidth / 4, bottleCenterX - bottleRef.current.offsetWidth / 4),
      };
    };
    
    // random generation interval
    const timer = setInterval(() => {
      parameters.length >= 10 
        ? setParameters(parameters.filter(element => element.size !== randomGenerator(15, 5)))
        : setParameters([...parameters, random()]);
    }, randomGenerator(150, 50) * 10);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleWindowResize);
    };
    
  }, [dispatch, parameters]);

  const randomGenerator = (max, min) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const transitions = useTransition(parameters, {
    from: { transform: `translateY(${bottleStartY - 20}px)`, opacity: '1' },
    enter: { transform: `translateY(${bottleRef.current ? bottleRef.current.offsetHeight / 5 : 0})`,},
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
