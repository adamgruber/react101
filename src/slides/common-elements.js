/* global twttr */
import React from 'react';
import * as S from 'spectacle';

export const subheadProps = {
  size: 1,
  margin: '0',
  textColor: 'bcGrey500'
};

export const handwritingProps = {
  ...subheadProps,
  textFont: 'hand',
  textColor: 'bcRed600',
  // textSize: '3.2rem'
};

export const bulletProps = {
  textColor: 'bcBlue600',
  bold: true
};

export const headingProps = {
  size: 2,
  textColor: 'bcGrey600',
  textFont: 'secondary'
};

export const slideTitleProps = {
  ...headingProps,
  style: {
    marginBottom: 50,
    fontWeight: 400,
  },
};

export const slideProps = {
  align: 'flex-start',
  maxHeight: 'auto',
  maxWidth: 1280
};

export const images = {
  codepen: 'assets/react-codepen.png',
  crewTracker: 'assets/crew-tracker.png',
  faxjsLogo: 'assets/faxjs.png',
  fbSign: 'assets/fb-sign.jpg',
  fbThumb: 'assets/thumb.png',
  instagramLogo: 'assets/instagram.png',
  jsxYoDawg: 'assets/jsx-yo-dawg.jpg',
  magic: 'assets/magic.gif',
  mobxLogo: 'assets/mobx.svg',
  neo: 'assets/i-know-react.jpg',
  phpBestPractices: 'assets/php-best-practices.jpg',
  reactGithub: 'assets/react-github.png',
  reactLogo: 'assets/react.svg',
  redArrow: 'assets/red-arrow.png',
  reduxLogo: 'assets/redux.svg',
  renderTreeDirty: 'assets/renderTreeDirty.svg',
  renderTreeResolved: 'assets/renderTreeResolved.svg',
  xhpLogo: 'assets/xhp_logo.png',
};

export const imgStyle = {
  height: '70%',
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)'
};

export const Subhead = props => <S.Text {...subheadProps} {...props}>{props.children}</S.Text>;

export const Handwriting = props => <S.Text {...handwritingProps} {...props}>{props.children}</S.Text>

export const ReactLogo = () => <S.Image height={145} src={images.reactLogo} />

export const Bullet = props => <S.Text {...bulletProps} {...props}>{props.children}</S.Text>;

export const Emoji = props => <span role='img' {...props}>{props.children}</span>;

export const SlideTitle = props => <S.Heading {...slideTitleProps} {...props}>{props.children}</S.Heading>;

export class Tweet extends React.Component {
  componentDidMount() {
    if (twttr && twttr.widgets) {
      twttr.widgets.createTweet(
        this.props.id,
        this.node,
        { conversation: 'none' }
      );
    }
  }

  render() {
    return <div ref={ c => this.node = c } />;
  }
}
