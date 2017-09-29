import React from 'react';
import { Slide } from 'spectacle';
import Typing from 'react-typing-animation';
import { FlexContainer } from 'common-styled-components';
import {
  slideProps,
  SlideTitle,
  Subhead,
} from '../common-elements';
import notes from './notes';

export default [
  <Slide {...slideProps} transition={['slide']} align="center center">
    {notes.main}
    <FlexContainer direction='column' fullHeight>
      <SlideTitle>“Hello, world!”</SlideTitle>
      <FlexContainer justify="center">
        <Subhead>&nbsp;<br/>&nbsp;</Subhead>
        <Typing startDelay={1200}>
          <FlexContainer justify="center">
            <Subhead>Time for some</Subhead>
            <Typing.Delay ms={300} />
            <Subhead margin="0 10px" textFont="hand" textColor="bcRed600">live</Subhead>
            <Subhead>coding.</Subhead>
          </FlexContainer>
        </Typing>
      </FlexContainer>
    </FlexContainer>
  </Slide>
];
