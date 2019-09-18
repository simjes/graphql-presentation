import React from 'react';
import { Deck, Image, Slide } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Security from './Security';
import BeforeAfter from './assets/before-after.png';
import DoQuery from './DoQuery';
import How from './How';
import Landing from './Landing';
import Resources from './Resources';
import Schema from './Schema';
import Snacks from './Snacks';
import What from './What';
import Why from './Why';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#000025',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide bgGradient="linear-gradient(30deg, #00c6ff, #0072ff)">
          <Landing />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Why />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <What />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Image className="before-after" src={BeforeAfter} height="500" />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <How />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Schema />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <DoQuery />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Security />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Snacks />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Resources />
        </Slide>
      </Deck>
    );
  }
}
