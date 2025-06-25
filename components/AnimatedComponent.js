import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({
  children,
  direction = 'up',
  delay = 0,
  initial,
  animate,
  duration = 0.6,
  className = '',
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directionMap = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  const variants = {
    up: { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left: { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    zoom: { 
      initial: { scale: 0.8, opacity: 0 }, 
      animate: { scale: 1, opacity: 1 }
    },
    flip: { 
      initial: { rotateY: 90, opacity: 0 }, 
      animate: { rotateY: 0, opacity: 1 },
      transition: { duration: 0.7 }
    },
    rotate: { 
      initial: { rotate: -15, opacity: 0 }, 
      animate: { rotate: 0, opacity: 1 }
    },
    fade: { 
      initial: { opacity: 0 }, 
      animate: { opacity: 1 }
    },
    bounce: {
      initial: { y: -100, opacity: 0 },
      animate: { 
        y: 0, 
        opacity: 1,
        transition: { 
          type: 'spring', 
          bounce: 0.6,
          duration: 1
        }
      }
    },
    float: {
      initial: { y: 20, opacity: 0 },
      animate: { 
        y: [0, -15, 0],
        opacity: 1,
        transition: { 
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }
      }
    },
    spotlight: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { 
        opacity: 1, 
        scale: 1,
        boxShadow: ['0 0 0px rgba(255,87,34,0)', '0 0 20px rgba(255,87,34,0.8)', '0 0 0px rgba(255,87,34,0)'],
        transition: { 
          duration: 1.5,
          repeat: Infinity
        }
      }
    }
  };

  const initialProp = initial || variants[direction]?.initial || { ...directionMap[direction], opacity: 0 };
  const animateProp = animate || variants[direction]?.animate || { x: 0, y: 0, opacity: 1 };

  return (
    <motion.div
      ref={ref}
      initial={inView ? initialProp : { ...initialProp, opacity: 0 }}
      animate={inView ? animateProp : { ...initialProp, opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
