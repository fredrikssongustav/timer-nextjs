import React, { useState } from 'react';
import Router from 'next/router';
import { StyledButton } from '../src/atoms/StyledButton';
import { ClockController } from '../src/components/ClockController/ClockController';
import { StyledPage } from '../src/containers/StyledPage/StyledPage';
import { StyledClockContainer } from '../src/containers/StyledClockContainer/StyledClockContainer';

const ClockPage: React.FC = () => {
  const [reInitiateTimer, setReInitiateTimer] = useState<boolean>(false);

  const goBack = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    Router.push({
      pathname: '/',
    });
  };

  return (
    <StyledPage>
      <StyledClockContainer>
        <ClockController startClock={reInitiateTimer} />
        <StyledButton
          data-testid="start-button"
          variant="outlined"
          color="primary"
          onClick={(): void => {
            setReInitiateTimer(true);
          }}
        >
            start button
        </StyledButton>
        <StyledButton
          data-testid="back-button"
          onClick={goBack}
          variant="outlined"
          color="primary"
        >
            Go to timer setup page
        </StyledButton>
      </StyledClockContainer>
    </StyledPage>

  );
};

export default ClockPage;
