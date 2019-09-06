// Import React
import React from 'react';
// Import Spectacle Core tags
import { Deck, Slide } from 'spectacle';
// Import theme
import createTheme from 'spectacle/lib/themes/default';
import DefineSchema from './DefineSchema';
import How from './How';
import Landing from './Landing';
import What from './What';
import Why from './Why';
import DoQuery from './DoQuery';
import Snacks from './Snacks';
import Advanced from './Advanced';
import Resources from './Resources';
import DefaultSlide from './DefaultSlide';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
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

        <DefaultSlide>
          <Why />
        </DefaultSlide>

        <DefaultSlide>
          <What />
        </DefaultSlide>

        <DefaultSlide>
          <How />
        </DefaultSlide>

        <DefaultSlide>
          <DefineSchema />
        </DefaultSlide>

        <DefaultSlide>
          <DoQuery />
        </DefaultSlide>

        <DefaultSlide>
          <Snacks />
        </DefaultSlide>

        <DefaultSlide>
          <Advanced />
        </DefaultSlide>

        <DefaultSlide>
          <Resources />
        </DefaultSlide>
      </Deck>
    );
  }
}
