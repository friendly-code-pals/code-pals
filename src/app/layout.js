// src/app/layout.tsx
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'; // Import global styles
import BreadcrumbTrail from '../components/BreadcrumbTrail';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Code Pals - Fun RPG</title>
        <meta name="description" content="A fun place to learn and explore code through RPG elements." />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className="layout">
        <header>
          <img src="/images/logo.png" alt="Code Pals Logo" className="logo" />
          <BreadcrumbTrail />
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
