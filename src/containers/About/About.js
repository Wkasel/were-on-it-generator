import React from 'react';
// import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1>About The Author</h1>
      <p>
        My name is William. I build software companies & do freelance fullstack
        JS development. I find silly things like this funny. It&lsquo;s not
        perfect, but hopefully brings you some joy.
      </p>
      <p>I&lsquo;ve made the code available on github open source</p>
      <ul>
        <li>
          <a href="https://github.com/Wkasel/were-on-it-generator">
            Github Repo
          </a>
        </li>
        <li>
          <a href="http://www.williamkasel.co">William Kasel</a>
        </li>
        <li>
          My Dev company:<a href="http://www.fullsignal.co">Signal Labs</a>
        </li>
        <li>
          My Dev company: <a href="http://github.com/gosignal">Github</a>
        </li>
      </ul>
    </>
  );
};

export { About };
