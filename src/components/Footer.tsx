import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div>
          <a href="https://twitter.com/codepals" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://github.com/codepals" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Code Pals. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
