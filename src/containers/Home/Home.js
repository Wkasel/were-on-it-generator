import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledJumbotron = styled(Jumbotron)`
  background: rgba(255, 255, 255, 0.1);
`;

const Home = () => {
  return (
    <>
      <StyledJumbotron>
        <h1>WTF, South Dakota?</h1>
        <p>
          You really{' '}
          <a
            href="https://www.washingtonpost.com/health/2019/11/18/meth-were-it-says-south-dakota-new-ad-campaign/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            spent $449,000
          </a>{' '}
          on{' '}
          <a
            href="https://onmeth.com/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            this?
          </a>{' '}
          THISSS???
        </p>
        <p>
          So we thought it was a great opportunity to get some laughs, and
          further point out what the internet has already told us.
        </p>
        <p>
          <Link to="/create">
            <Button variant="outline-dark">
              Make your own South Dakota Meth Meme
            </Button>
          </Link>
        </p>
      </StyledJumbotron>
      <h1>News:</h1>
      <ul>
        <li>
          <a
            href="https://www.washingtonpost.com/health/2019/11/18/meth-were-it-says-south-dakota-new-ad-campaign/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            Washington Post
          </a>
        </li>
        <li>
          <a
            href="https://www.cbsnews.com/video/meth-were-on-it-mixed-reactions-to-south-dakota-campaign/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            CBS News
          </a>
        </li>
        <li>
          <a
            href="https://www.usatoday.com/videos/news/nation/2019/11/19/meth-were-it-says-south-dakota-campaign/4244315002/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            USA Today
          </a>
        </li>
        <li>
          <a
            href="https://www.buzzfeednews.com/article/claudiakoerner/meth-on-it-south-dakota"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            BuzzFeed
          </a>
        </li>
        <li>
          <a
            href="https://www.buzzfeednews.com/article/claudiakoerner/meth-on-it-south-dakota"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            New York Times
          </a>
        </li>
      </ul>
    </>
  );
};

export { Home };
