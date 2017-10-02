import React from 'react';
import { Slide, Image } from 'spectacle';
import Typing from 'react-typing-animation';
import { FlexContainer } from 'common-styled-components';
import {
  images,
  imgStyle,
  slideProps,
  SlideTitle,
  Subhead,
} from '../common-elements';
import notes from './notes';

export default [
  <Slide {...slideProps} transition={['slide']} align="center center">
    {notes.one}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle>How React Works</SlideTitle>
      <FlexContainer justify="center">
        <Subhead>&nbsp;<br/>&nbsp;</Subhead>
        <Typing startDelay={1200}>
          <FlexContainer justify="center">
            <Subhead>What the</Subhead>
            <Typing.Delay ms={300} />
            <Subhead margin="0 10px" textFont="hand" textColor="bcRed600">@$%*!</Subhead>
            <Subhead>is going on here?</Subhead>
          </FlexContainer>
        </Typing>
      </FlexContainer>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['slide']}>
    <FlexContainer direction="column" fullHeight>
      <SlideTitle style={{marginTop: 100}} size={5}>&nbsp;</SlideTitle>
      <div style={{flex:1, position:'relative'}}>
        <Image src={images.magic} style={imgStyle} />
      </div>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['fade']}>
    {notes.two}
    <FlexContainer direction="column" fullHeight>
        <SlideTitle style={{marginTop: 100}} textFont="primary" size={5}>Virtual DOM</SlideTitle>
      <FlexContainer align="center" justify="space-around" style={{flex: 1, margin: '0 0 10% 0'}}>
        <Image height={355} src={images.renderTreeDirty} />
        <Image src={images.redArrow} style={{width:'20%', margin: 0}} />
        <Image height={355} src={images.renderTreeResolved} />
      </FlexContainer>
    </FlexContainer>
  </Slide>,
];

