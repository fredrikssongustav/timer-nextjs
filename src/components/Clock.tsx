import React, { useState, useEffect } from 'react';
import { TIME_UNIT } from '../../pages/clock';
import { StyledTimer } from '../organisms/StyledTimer/StyledTimer';

export type ClockProps = {
    unit: TIME_UNIT | undefined;
    value: number | undefined;
}

export const Clock: React.FC<ClockProps> = ({ unit, value }: ClockProps) => {
  const refinedValue = value as number;

  const [stopTime, setStopTime] = useState<number | undefined>(undefined);

  useEffect(() => {
    setStopTime(value);
  }, []);

  const reduceStopTime = (): void => {
    if (stopTime) {
      // const fraction = stopTime && stopTime / 100;
      setStopTime(stopTime - 1);
    }
  };

  useEffect(() => {
    if (stopTime && stopTime > 0) {
      setTimeout(reduceStopTime, 1000);
    }
  }, [stopTime]);

  if (!stopTime && stopTime !== 0) {
    return <div data-testid="failed-clock" />;
  }

  if (stopTime <= 0) {
    return <div data-testid="done-counting" />;
  }


  return (
    <StyledTimer
      progress={((refinedValue - stopTime) / refinedValue) * 100}
      color="#000"
    />
  );
};
