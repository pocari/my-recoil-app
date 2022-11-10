import React from 'react';
import { globalState } from '../globalState';

export const CharacterCount: React.FC = () => {
  const count = globalState.useTextCount();

  return (
    <>
    Character Count: {count}
    </>
  );
}
