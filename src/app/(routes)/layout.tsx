'use client';

import React from 'react';
import Head from 'next/head';
import BreadcrumbTrail from '../../components/BreadCrumbTrail';
import Footer from '../../components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <title>Code Pals - Fun RPG</title>
        <meta name="description" content="A fun place to learn and explore code through RPG elements." />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <body>
        <div className="layout">
          <header>
            {/* <img src="/images/logo.png" alt="Code Pals Logo" className="logo" /> */}
            <BreadcrumbTrail />
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
