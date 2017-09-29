import React from 'react';
import { Slide, Image } from 'spectacle';
import { FlexContainer } from 'common-styled-components';
import {
  images,
  imgStyle,
  slideProps,
  SlideTitle,
} from '../common-elements';
import notes from './notes';

export default [
  <Slide {...slideProps} transition={['slide']}>
    {notes.one}
    <FlexContainer direction="column" fullHeight>
      <FlexContainer direction="column" justify="center" basis={40}>
        <SlideTitle>Thank You</SlideTitle>
      </FlexContainer>
        <div style={{flex:1, position:'relative'}}>
          <Image src={images.neo} style={{...imgStyle}} />
        </div>
    </FlexContainer>
  </Slide>,
];
