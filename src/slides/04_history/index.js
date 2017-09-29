import React from 'react';
import { Slide, Image, CodePane, Appear } from 'spectacle';
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
import phpCode from './php.example';
import xhpCode from './xhp.example';

export default [
  <Slide {...slideProps} transition={['slide']} align="center center">
    {notes.main}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle>React History</SlideTitle>
      <FlexContainer justify="center">
        <Subhead>&nbsp;<br/>&nbsp;</Subhead>
        <Typing startDelay={1200}>
            <Subhead>You can't know where you're going</Subhead>
            <FlexContainer justify="center">
              <Subhead>until you know </Subhead>
              <Typing.Delay ms={300} />
              <Subhead margin="0 10px" textFont="hand" textColor="bcRed600">where you've been.</Subhead>
            </FlexContainer>
        </Typing>
      </FlexContainer>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['fade']}>
    {notes.thumb}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle size={5}>&nbsp;</SlideTitle>
      <div style={{flex:1, position:'relative'}}>
        <Image src={images.fbThumb} style={{...imgStyle}} />
      </div>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['spin']}>
    {notes.thumbDown}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle margin="100px 0 50px 0" textFont="primary" size={5}>XSS Injection</SlideTitle>
      <div style={{flex:1, position:'relative'}}>
        <Image src={images.fbThumb} style={{...imgStyle, transform: 'translateX(-50%) rotate(180deg)' }} />
      </div>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['slide']}>
    {notes.xhp}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle size={5}>&nbsp;</SlideTitle>
      <div style={{flex:1, position:'relative'}}>
        <Image src={images.xhpLogo} style={{...imgStyle }} />
      </div>
      <FlexContainer align="center" justify="space-around" style={{margin: '5% 0 10% 0'}}>
        <div style={{flexBasis: '40%'}}>
          <Appear><CodePane lang="php" source={ phpCode } /></Appear>
        </div>
        <Appear>
          <div style={{flexBasis: '20%'}}>
            <Image src={images.redArrow} width="70%" />
          </div>
        </Appear>
        <div style={{flexBasis: '40%'}}>
          <Appear><CodePane lang="php" source={ xhpCode } /></Appear>
        </div>
      </FlexContainer>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['fade']}>
    {notes.faxjs}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle size={5}>&nbsp;</SlideTitle>
      <div style={{flex:1, position:'relative'}}>
        <Image src={images.phpBestPractices} style={{...imgStyle}} />
      </div>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['fade']}>
    {notes.faxjs}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle margin="100px 0 10px 0" textFont="primary" size={5}>FaxJS</SlideTitle>
      <div style={{flex:1, position:'relative'}}>
        <Image src={images.faxjsLogo} style={{...imgStyle}} />
      </div>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['spin']} bgColor="bcGrey600">
    {notes.react}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle margin="100px 0 50px 0" textColor="#00d8ff" textFont="primary" size={2}>React</SlideTitle>
      <div style={{flex:1, position:'relative'}}>
        <Image src={images.reactLogo} style={{...imgStyle}} />
      </div>
    </FlexContainer>
  </Slide>,

  <Slide {...slideProps} transition={['slide']}>
    {notes.opensource}
    <FlexContainer direction="column" fullHeight>
      <SlideTitle margin="0 0 50px 0" size={2}>&nbsp;</SlideTitle>
      <div style={{flex:1, position:'relative'}}>
        <Image src={images.instagramLogo} style={{...imgStyle}} />
      </div>
    </FlexContainer>
  </Slide>
];
