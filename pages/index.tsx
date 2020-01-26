import React, { useState } from 'react';

import Router from 'next/router';
import {
  MenuItem,
} from '@material-ui/core';
import { StyledButton } from '../src/atoms/StyledButton';
import { StyledSelect } from '../src/atoms/StyledSelect';
import { StyledFormContainer } from '../src/containers/StyledFormContainer/StyledFormContainer';
import { StyledPage } from '../src/containers/StyledPage/StyledPage';

export enum FormStateFields {
  S = 'S',
  M = 'M',
  H = 'H',
  D = 'D',
  Y = 'Y'
}

type FormState = {
  [key in FormStateFields]?: string;
}

type IndexFormProps = {
  submitForm: (event: React.ChangeEvent<HTMLFormElement>) => void;
  formState: FormState;
  updateState: (newState: any) => void;
}

export const IndexForm: React.FC<IndexFormProps> = ({ submitForm, formState, updateState }: IndexFormProps) => (
  <form data-testid="index-form" onSubmit={submitForm}>
    <StyledSelect
      value={formState.Y}
      setValue={updateState}
      placeholder="YEARS"
      field={FormStateFields.Y}
    >
      {
          Array(10).fill(undefined).map((element: any, index: number) => (
            <MenuItem value={index}>{index}</MenuItem>))
        }
    </StyledSelect>
    <StyledSelect
      value={formState.D}
      setValue={updateState}
      placeholder="DAYS"
      field={FormStateFields.D}
    >
      {
          Array(365).fill(undefined).map((element: any, index: number) => (
            <MenuItem value={index}>{index}</MenuItem>))
        }
    </StyledSelect>
    <StyledSelect
      value={formState.H}
      setValue={updateState}
      placeholder="HOURS"
      field={FormStateFields.H}
    >
      {
          Array(24).fill(undefined).map((element: any, index: number) => (
            <MenuItem value={index}>{index}</MenuItem>))
        }
    </StyledSelect>
    <StyledSelect
      value={formState.M}
      key="min"
      setValue={updateState}
      placeholder="MINUTES"
      field={FormStateFields.M}
    >
      {
          Array(60).fill(undefined).map((element: any, index: number) => (
            <MenuItem value={index}>{index}</MenuItem>))
        }
    </StyledSelect>
    <StyledSelect
      value={formState.S}
      setValue={updateState}
      placeholder="SECONDS"
      field={FormStateFields.S}
    >
      {
          Array(60).fill(undefined).map((element: any, index: number) => (
            <MenuItem value={index}>{index}</MenuItem>))
        }
    </StyledSelect>
    <StyledButton
      data-testid="submit-button"
      type="submit"
      variant="outlined"
      color="primary"
      size="large"
    >
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
    <StyledPage>
      <StyledFormContainer>
        <IndexForm submitForm={submitForm} formState={state} updateState={updateState} />
      </StyledFormContainer>
    </StyledPage>
  );
};

export default IndexPage;
