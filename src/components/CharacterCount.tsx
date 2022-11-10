import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../recoil_state';

export const CharacterCount: React.FC = () => {
  const count = useRecoilValue(charCountState);

  return (
    <>
    Character Count: {count}
    </>
  );
}
