import React from 'react';
import styled from 'styled-components';

const StickyFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: rgba(255, 255, 255, 0.1);
`;

const Footer = () => (
  <StickyFooter className="footer text-muted">
    <center>
      <p>
        Create with &hearts; in Oakland, California. &copy; 2019{' '}
        <a href="http://www.williamkasel.co">William Kasel</a> All source code{' '}
        <a href="https://github.com/Wkasel/were-on-it-generator">
          available here for free{' '}
        </a>
        Like what you see? Hire me:{' '}
        <a href="http://www.fullsignal.co">Signal Labs</a>
      </p>
    </center>
  </StickyFooter>
);

export { Footer };
