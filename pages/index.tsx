import Head from 'next/head';
import React, { useState } from 'react';

import Router from 'next/router';
import {
  MenuItem,
} from '@material-ui/core';
import { StyledButton } from '../src/atoms/StyledButton';
import { StyledContainer } from '../src/containers/StyledContainer/StyledContainer';
import { StyledSelect } from '../src/atoms/StyledSelect';

export enum FormStateFields {
  S = 'S',
  M = 'M',
  H = 'H',
  D = 'D',
  Y = 'Y'
}

type FormState = {
  [key in FormStateFields]: string;
}

type IndexFormProps = {
  submitForm: (event: React.ChangeEvent<HTMLFormElement>) => void;
  formState: FormState;
  updateState: (newState: any) => void;
}

export const IndexForm: React.FC<IndexFormProps> = ({ submitForm, formState, updateState }: IndexFormProps) => (
  <form data-testid="index-form" onSubmit={submitForm}>
    <StyledSelect
      data-testid="field-y"
      value={formState.Y}
      setValue={updateState}
      placeholder="years"
      field={FormStateFields.Y}
    >
      {
          Array(10).fill(undefined).map((element: any, index: number) => (
            <MenuItem value={index}>{index}</MenuItem>))
        }
    </StyledSelect>
    <StyledSelect
      data-testid="field-d"
      value={formState.D}
      setValue={updateState}
      placeholder="days"
      field={FormStateFields.D}
    >
      {
          Array(365).fill(undefined).map((element: any, index: number) => (
            <MenuItem value={index}>{index}</MenuItem>))
        }
    </StyledSelect>
    <StyledSelect
      data-testid="field-h"
      value={formState.H}
      setValue={updateState}
      placeholder="hours"
      field={FormStateFields.H}
    >
      {
          Array(24).fill(undefined).map((element: any, index: number) => (
            <MenuItem value={index}>{index}</MenuItem>))
        }
    </StyledSelect>
    <StyledSelect
      data-testid="field-m"
      value={formState.M}
      setValue={updateState}
      placeholder="minutes"
      field={FormStateFields.M}
    >
      {
          Array(60).fill(undefined).map((element: any, index: number) => (
            <MenuItem value={index}>{index}</MenuItem>))
        }
    </StyledSelect>
    <StyledSelect
      data-testid="field-s"
      value={formState.S}
      setValue={updateState}
      placeholder="seconds"
      field={FormStateFields.S}
    >
      {
          Array(60).fill(undefined).map((element: any, index: number) => (
            <MenuItem value={index}>{index}</MenuItem>))
        }
    </StyledSelect>
    <StyledButton data-testid="submit-button" type="submit">
        Launch timer
    </StyledButton>
  </form>
);

const IndexPage: React.FC = () => {
  const [state, setState] = useState<FormState>({
    S: '10', M: '', H: '', D: '', Y: '',
  });

  const updateState = (newState) => {
    setState({ ...state, ...newState });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Router.push({
      pathname: '/clock',
      query: state,
    });
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, height=device-height, user-scalable=no" />
        <meta charSet="utf-8" />
        <title>A Timer</title>
      </Head>
      <style>
        {`
      body { 
        font: 11px menlo;
        color: #fff;
        margin:0;
      }
    `}
      </style>
      <StyledContainer>
        <IndexForm submitForm={submitForm} formState={state} updateState={updateState} />
      </StyledContainer>

    </div>
  );
};

export default IndexPage;
