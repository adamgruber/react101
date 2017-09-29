/* eslint-disable */
import React from "react";
import { Deck } from 'spectacle';
import createTheme from "spectacle/lib/themes/default";
import Slides from './slides';
import brandColors from './brand-colors';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("react-typist/dist/Typist.css");
require("./pres.css");

// Define theme
const theme = createTheme(Object.assign({
  primary: "#fff",
  secondary: "#505e67",
  tertiary: "#00b478",
  quarternary: "#2e7ad1",
}, brandColors), {
  primary: {name: "Source Sans Pro", googleFont: true },
  secondary: { name: "Bree Serif", googleFont: true },
  hand: {name: "Caveat Brush", googleFont: true },
});

const Presentation = () => (
  <Deck
    transitionDuration={500}
    theme={theme}
    progress="bar"
    controls={false}>
    { Slides }
  </Deck>
);

export default Presentation;
