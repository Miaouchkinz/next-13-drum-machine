import MaxWidthWrapper from '../MaxWidthWrapper';
import MuteButton from '../MuteButton/MuteButton';
import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>
        <MuteButton />
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
