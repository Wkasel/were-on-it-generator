import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Create a New One</Link>
        </li>
        <li>
          <Link to="/share">Share</Link>
        </li>
        <li>
          <Link to="/view">View</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export { Header };
