import { Input } from '@material-ui/core';
import styled from 'styled-components';
import * as React from 'react';

const ThemedInput = styled(Input)`
margin:10px;
`;

export const StyledInput: React.FC = () => <ThemedInput />;
