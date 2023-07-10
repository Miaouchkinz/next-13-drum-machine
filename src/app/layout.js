import './styles.css';

import Header from '../components/Header';
import React from 'react';
import SoundEnabledProvider from '../components/SoundEnabledProvider/SoundEnabledProvider';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundEnabledProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </SoundEnabledProvider>
      </body>
    </html>
  );
}

export default RootLayout;
