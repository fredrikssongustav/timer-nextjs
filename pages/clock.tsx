import React, { useState } from 'react';
import Router from 'next/router';
import { StyledButton } from '../src/atoms/StyledButton';
import { StyledContainer } from '../src/containers/StyledContainer/StyledContainer';
import { ClockController } from '../src/components/ClockController/ClockController';

const ClockPage: React.FC = () => {
  const [reInitiateTimer, setReInitiateTimer] = useState<boolean>(false);

  const goBack = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    Router.push({
      pathname: '/',
    });
  };

  return (
    <StyledContainer>
      <ClockController startClock={reInitiateTimer} />
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
