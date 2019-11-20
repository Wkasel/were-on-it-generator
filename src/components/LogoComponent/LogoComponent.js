import React from 'react';
import PropTypes from 'prop-types';
import theme from 'styled-theming';
import styled, { ThemeProvider } from 'styled-components';

import { Svg } from '../Svg';

const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222',
  inverse: '#f0c174'
});

const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
  inverse: '#fff'
});

const stateColor = theme('mode', {
  light: '#ff00ff',
  dark: '#f0f',
  inverse: '#fff'
});

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
`;

const WereOnItWrapper = styled.div`
  width: 600px;
  height: 550px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  position: relative;
`;

const LogoType = styled.span`
  font-size: 120px;
  line-height: 100px;
  color: ${textColor};
  z-index: 100;
  width: 100%;
  position: absolute;
  left: 50px;
  top: 100px;
  font-family: alternate-gothic-no-1-d !important;
  text-transform: uppercase !important;
  letter-spacing: -3px;
  font-weight: 400;
`;

// const text = { l1: `Meth.`, l2: `We're On It.` };

const StyledSvg = styled(Svg)`
  background-color: ${stateColor};
  color: ${textColor};

  path {
    background-color: ${stateColor};
  }
  #SD_At-Large {
    background-color: ${stateColor};
  }
`;

const LogoComponent = props => {
  const { textL1, textL2, themeName } = props;
  return (
    <ThemeProvider theme={{ mode: themeName }}>
      <Wrapper>
        <WereOnItWrapper>
          <LogoType widthOnly minFontSize={80}>
            {textL1}
            <br />
            {textL2}
          </LogoType>
          <StyledSvg
            viewBox="0 0 1000 1000"
            width="100%"
            height="100%"
            className="sd_logo"
          />
        </WereOnItWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

LogoComponent.propTypes = {
  textL1: PropTypes.string,
  textL2: PropTypes.string,
  themeName: PropTypes.string
};

LogoComponent.defaultProps = {
  textL1: 'Meth.',
  textL2: `Were on it.`,
  themeName: 'inverse'
};

export default LogoComponent;
