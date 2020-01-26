import styled from 'styled-components';
import React from 'react';

const StyledH1 = styled.h1`
color:${(props) => props.theme.palette.primary[500]};
margin:auto;
font-size:24px;`;

const StyledCountDownInner = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;

display:flex;
align-items:center;

color:#000;`;


export const StyledCountDown: React.FC = (props) => (
  <StyledCountDownInner>
    <StyledH1>
      {props.children}
    </StyledH1>
  </StyledCountDownInner>
);
