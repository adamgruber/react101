import React from 'react';
import { Slide, Image, CodePane } from 'spectacle';
import Typing from 'react-typing-animation';
import { FlexContainer } from 'common-styled-components';
import {
  images,
  imgStyle,
  slideProps,
  SlideTitle,
  Subhead,
  Tweet,
} from '../common-elements';
import notes from './notes';
import xhpJs from './xhpjs.example';
import xhpJsCompiled from './xhpjs-compiled.example';

export default [
  <Slide {...slideProps} transition={['slide']} align="center center">
    {notes.one}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle>JSX</SlideTitle>
      <FlexContainer justify="center">
        <Subhead>&nbsp;<br/>&nbsp;<br/><span style={{marginTop: 30}}>&nbsp;</span></Subhead>
        <Typing startDelay={1200}>
            <FlexContainer justify="center">
              <Subhead>“&hellip;the unholy</Subhead>
              <Typing.Delay ms={300} />
              <Subhead margin="0 10px" textFont="hand" textColor="bcRed600">love child</Subhead>
              <Subhead>of</Subhead>
            </FlexContainer>
            <FlexContainer justify="center">
              <Subhead>1990's DHTML and 2015 ES6.”</Subhead>
            </FlexContainer>
            <FlexContainer justify="center">
              <Typing.Delay ms={500} />
              <Subhead margin="30px 0 0 0">— Eric Elliott</Subhead>
            </FlexContainer>
        </Typing>
      </FlexContainer>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['slide']} align="center center">
    {notes.two}
    <FlexContainer justify="space-around">
      <div>
        <Subhead textAlign="left" margin="0 0 20px 0">XHP in JavaScript</Subhead>
        <CodePane lang="jsx" source={xhpJs} textSize={24} />
      </div>
      <div style={{ marginLeft: 140 }}>
        <Subhead textAlign="left" margin="0 0 20px 0">Compiled</Subhead>
        <CodePane lang="js" source={xhpJsCompiled} textSize={24} />
      </div>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['slide']} bgColor="bcGrey600" align="center center">
    {notes.three}
    <FlexContainer align="center" justify="space-around">
      <Tweet id="883157198154727426" />
      <Tweet id="841725777553063936" />
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['slide']} bgColor="bcGrey600" align="center center">
    {notes.four}
    <FlexContainer align="center" justify="space-around">
      <Tweet id="666058658925682689" />
      <Tweet id="895566458603917312" />
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['slide']} bgColor="bcGrey600" align="center center">
    {notes.five}
    <FlexContainer align="center" justify="space-around">
      <Tweet id="713417841786167300" />
      <Tweet id="618672818641735682" />
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['slide']}>
    {notes.six}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle size={5}>&nbsp;</SlideTitle>
      <div style={{flex:1, position:'relative'}}>
        <Image src={images.jsxYoDawg} style={{...imgStyle}} />
      </div>
    </FlexContainer>
  </Slide>,
];
