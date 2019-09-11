// Import React
import React from 'react';
// Import Spectacle Core tags
import { Deck, Slide } from 'spectacle';
// Import theme
import createTheme from 'spectacle/lib/themes/default';
import Advanced from './Advanced';
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
          <How />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Schema />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <DoQuery />
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Advanced />
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
