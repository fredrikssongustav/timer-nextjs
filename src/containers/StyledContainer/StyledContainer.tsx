import { Box } from '@material-ui/core';
import styled from 'styled-components';
import * as React from 'react';

const StyledBox = styled(Box)`
height:100vh;
`

export const StyledContainer: React.FC = ({ children }) => (
    <StyledBox display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
        {children}
    </StyledBox>)