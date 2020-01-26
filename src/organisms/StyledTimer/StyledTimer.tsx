import React from 'react';
import { CircleSVG } from '../../atoms/CircleSVG';

type StyledTimerProps = {
    progress?: number;
    color?: string;
}

export const StyledTimer: React.FC<StyledTimerProps> = (
  { progress = 100, color = '#283F3B' }: StyledTimerProps,
) => (
  <CircleSVG progress={progress} color={color} />
);
