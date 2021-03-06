import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TIME_UNIT } from '../../utils/types';
import { ClockContainer } from './ClockController.styles';
import { Clock } from '../Clock/Clock';

type ClockControllerProps = {
    startClock: boolean;
}

export const ClockController: React.FC<ClockControllerProps> = (
  { startClock }: ClockControllerProps,
) => {
  const router = useRouter();
  const [controllerState, setControllerState] = useState<{[K in TIME_UNIT]?: string} |undefined>(undefined);

  useEffect(() => {
    const queryParams = router && router.query;
    setControllerState(queryParams);
  }, []);


  return (
    <ClockContainer>
      <Clock state={controllerState} startClock={startClock} />
    </ClockContainer>
  );
};
