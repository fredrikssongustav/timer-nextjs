import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import { StyledButton } from '../src/atoms/StyledButton';
import { StyledContainer } from '../src/containers/StyledContainer/StyledContainer';
import { StyledTimer } from '../src/organisms/StyledTimer/StyledTimer';
import { Clock } from '../src/components/Clock';

export enum TIME_UNIT {
    h = 'hour',
    s = 'second',
    d = 'day',
    y = 'year'
}

const ClockPage: React.FC = () => {
  const router = useRouter();
  // TODO: Don't set default values like this
  const query = router && router.query.value ? router.query : { value: 20, unit: TIME_UNIT.s };
  const { value, unit } = query;

  const [reInitiateTimer, setReInitiateTimer] = useState<boolean>(false);

  const goBack = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    Router.push({
      pathname: '/',
    });
  };

  return (
    <StyledContainer>
      <div style={{ height: '400px', width: '400px' }}>
        {reInitiateTimer
          ? <Clock unit={unit as TIME_UNIT | undefined} value={Number(value)} />
          : <StyledTimer />}
      </div>
      <StyledButton
        data-testid="start-button"
        onClick={(): void => {
          setReInitiateTimer(true);
        }}
      >
            start button
      </StyledButton>

      <StyledButton data-testid="back-button" onClick={goBack}>
            Go to timer setup page
      </StyledButton>
    </StyledContainer>
  );
};

export default ClockPage;
