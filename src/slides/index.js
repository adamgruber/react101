import { cloneElement } from 'react';

import Intro from './01_intro';
import WhatIsReact from './02_what_is_react';
import WhyReact from './03_why_react';
import History from './04_history';
import HelloWorld from './05_hello_world';
import JSX from './06_jsx';
import Clock from './07_clock';
import HowItWorks from './08_how_it_works';
import Components from './09_components';
import Composition from './10_composition';
// import BeyondBasics from './11_beyond_basics';
import Thanks from './12_thanks';

const slides = [].concat(
  Intro,
  WhatIsReact,
  WhyReact,
  History,
  HelloWorld,
  JSX,
  Clock,
  HowItWorks,
  Components,
  Composition,
  // BeyondBasics,
  Thanks
);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));
