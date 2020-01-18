import styled from 'styled-components';
import * as React from 'react';

const StyledBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-directions:column;
height:100vh;
`;

export const StyledContainer: React.FC = (
  { children }: React.ComponentProps<React.FunctionComponent>,
) => (
  <StyledBox>
    {children}
  </StyledBox>
);
