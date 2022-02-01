import React from 'react';
import Header from './Header';

const Page = ({ children }: { children: React.ReactChildren }) => (
  <main>
    <Header />
    {children}
  </main>
);

export default Page;
