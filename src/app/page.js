import DrumMachine from '../components/DrumMachine';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import React from 'react';
import styles from './page.module.css';

/**
 * The drum machine itself has already been implemented, using my use-sound NPM package.
 * Your mission is to wire up the mute button.
 *
 * Acceptance Criteria:
 * - Clicking the icon should toggle a `soundEnabled` state variable
 * - This state variable should control whether or not
 *   the 4 drum machine buttons make noise.
 * - You're not allowed to move the existing components
 *  (eg. you can't move the <Header> element to page.js).
 */

function Home() {
  return (
    <MaxWidthWrapper as="main" className={styles.wrapper}>
      <h1>Welcome to the zaniest place on the ‘Web!</h1>
      <p>
        Hey there, fellow netizens! If you're reading this, you've
        stumbled upon the coolest corner of the internet: my awesome
        website. Get ready to embark on a nostalgic journey back to
        the groovy era of the 90s, where the web was wild, and
        creativity ran free!
      </p>
      <p>
        I've created the gnarliest drum machine ever. Press the
        buttons to hear the music. Tubular!
      </p>
      <DrumMachine />
    </MaxWidthWrapper>
  );
}

export default Home;
