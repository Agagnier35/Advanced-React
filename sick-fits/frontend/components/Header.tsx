import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1``;

const Header = () => (
  <header>
    <div className="bar">
      <Link href="/">
        <h1>Sick Fits</h1>
      </Link>
    </div>
    <Nav />
    <div className="sub-bar">
      <p>Search ...</p>
    </div>
  </header>
);

export default Header;
