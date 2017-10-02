import { cloneElement } from 'react';

import Intro from './01_intro';
import WhatIsReact from './02_what_is_react';
import WhyReact from './03_why_react';
import HelloWorld from './04_hello_world';
import History from './05_history';
import HelloWorldJSX from './06_hello_world_jsx';
import JSX from './07_jsx';
import Clock from './08_clock';
import HowItWorks from './09_how_it_works';
import Components from './10_components';
import Composition from './11_composition';
import BeyondBasics from './12_beyond_basics';
import Thanks from './13_thanks';

const slides = [].concat(
  Intro,
  WhatIsReact,
  WhyReact,
  HelloWorld,
  History,
  HelloWorldJSX,
  JSX,
  Clock,
  HowItWorks,
  Components,
  Composition,
  BeyondBasics,
  Thanks
);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));
