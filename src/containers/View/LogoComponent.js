import React from 'react';
// import Canvg from 'canvg';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

import { Svg } from '../../components/Svg';

const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222'
});

const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
`;

const WereOnItWrapper = styled.div`
  width: 500px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  position: relative;
`;

const LogoType = styled.span`
  font-size: 120px;
  line-height: 100px;
  color: #000;
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
  /* background-color: #ff00dd; */
`;

const LogoComponent = props => {
  const { textL1, textL2 } = props;
  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <Wrapper>
        <WereOnItWrapper>
          <LogoType>
            {textL1}
            <br />
            {textL2}
          </LogoType>
          <StyledSvg
            viewBox="0 0 1000 1000"
            width="100%"
            height="100%"
            className="sd_logo"
            style={{ fill: '#f0c174' }}
          />
        </WereOnItWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

LogoComponent.propTypes = {
  textL1: PropTypes.string,
  textL2: PropTypes.string
};

LogoComponent.defaultProps = {
  textL1: 'Meth.',
  textL2: `Were on it.`
};

export default LogoComponent;
