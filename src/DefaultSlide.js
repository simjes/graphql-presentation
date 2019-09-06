import React from 'react';
import { Slide } from 'spectacle';

const DefaultSlide = ({ children }) => {
  return (
    <Slide bgColor="secondary" textColor="primary">
      {children}
    </Slide>
  );
};

export default DefaultSlide;
