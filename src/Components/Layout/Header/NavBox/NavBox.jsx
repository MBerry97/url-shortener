import React from 'react';
import { motion } from 'framer-motion';

import Button from '../../../Shared/Button/Button';
import './NavBox.css';

function NavBox() {
  return (
    <motion.div
      className="navBox"
      data-testid="navBox"
      initial={{
        opacity: 0,
        transform: 'translate3d(0px, -24.5px, 0px)',
        transformStyle: 'flat',
        transformOrigin: '50% 50% 0px',

        height: 300,
      }}
      animate={{
        opacity: 1,
        transformStyle: 'flat',
        transform: 'translate3d(0px, 0px, 0px)',

        height: 380,
        transformOrigin: '50% 50% 0px',
      }}
      transition={{
        duration: 10,
        type: 'spring',
        delay: 0,
        stiffness: 500,
        damping: 28,
        mass: 1,
      }}
      exit={{
        opacity: 0,

        height: 300,
        transform: 'translate3d(0px, -24.5px, 0px)',
      }}
    >
      <span>Features</span>
      <span>Pricing</span>
      <span>Resources</span>

      <div className="navBox_divider" />

      <span>Login</span>

      <Button text="Sign up" type="circular" btnType="button" />
    </motion.div>
  );
}

export default NavBox;
