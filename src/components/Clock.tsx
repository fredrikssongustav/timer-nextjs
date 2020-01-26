import React, { useState, useEffect } from 'react';
import { TIME_UNIT } from '../utils/types';
import { StyledTimer } from '../organisms/StyledTimer/StyledTimer';

export type ClockProps = {
    state: {[K in TIME_UNIT]?: string};
    startClock: boolean;
}

const refineValue = (unit: TIME_UNIT, value: number) => {
  switch (unit) {
    case TIME_UNIT.S:
      return value;
    case TIME_UNIT.M:
      return refineValue(TIME_UNIT.S, 60 * value);
    case TIME_UNIT.H:
      return refineValue(TIME_UNIT.M, 60 * value);
    case TIME_UNIT.D:
      return refineValue(TIME_UNIT.S, 24 * value);
    case TIME_UNIT.Y:
      return refineValue(TIME_UNIT.S, 365 * value);
    default:
      return 0;
  }
};

export const Clock: React.FC<ClockProps> = ({ state, startClock }: ClockProps) => {
  const refinedValue = state && Object.keys(state)
    .map((key) => refineValue(TIME_UNIT[key], Number(state[key])))
    .reduce((aggregation, item) => aggregation + item, 0);

  const [stopTime, setStopTime] = useState<number | undefined>(undefined);

  useEffect(() => {
    setStopTime(refinedValue);
  }, [state]);

  const reduceStopTime = (): void => {
    if (stopTime) {
      // const fraction = stopTime && stopTime / 100;
      setStopTime(stopTime - 1);
    }
  };

  useEffect(() => {
    if (stopTime && stopTime > 0 && startClock) {
      setTimeout(reduceStopTime, 1000);
    }
  }, [stopTime, startClock]);

  if (!stopTime && stopTime !== 0) {
    return <div data-testid="failed-clock" />;
  }

  if (stopTime <= 0) {
    return (
      <div data-testid="done-counting">
        <StyledTimer />
      </div>
    );
  }


  return (
    <>
      {startClock
        ? (
          <StyledTimer
            progress={((refinedValue - stopTime) / refinedValue) * 100}
          />
        )
        : <StyledTimer />}
    </>
  );
};
