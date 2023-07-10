'use client';

import { Volume2, VolumeX } from 'react-feather';

import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import { useSoundEnabled } from '../SoundEnabledProvider';

function MuteButton() {
  const { soundEnabled, setSoundEnabled } = useSoundEnabled();

  return (
    <button
      onClick={() => {
        setSoundEnabled(!soundEnabled);
      }}
    >
      {soundEnabled ? <Volume2 /> : <VolumeX />}
      <VisuallyHidden>
        {soundEnabled
          ? 'Disable sound effects'
          : 'Enable sound effects'}
      </VisuallyHidden>
    </button>
  );
}

export default MuteButton;
