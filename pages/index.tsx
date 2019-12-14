import Head from 'next/head';
import * as React from 'react';
import { useState } from 'react';
import Router from 'next/router';
import { StyledButton } from '../src/atoms/StyledButton';
import { StyledInput } from '../src/atoms/StyledInput';
import { StyledContainer } from '../src/containers/StyledContainer/StyledContainer';

type FormState = {
  unit: string;
  value: string;
}

type IndexFormProps = {
  submitForm: (event: React.ChangeEvent<HTMLFormElement>) => void;
  formState: FormState;
  updateState: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const IndexForm: React.FC<IndexFormProps> = ({ submitForm, formState, updateState }: IndexFormProps) => {
  return (
    <form data-testid="index-form" onSubmit={submitForm}>
      <StyledInput inputProps={{ "data-testid": "field-timevalue" }} type="text" name="value" value={formState.value} onChange={updateState} />
      <StyledInput inputProps={{ "data-testid": "field-timeunit" }} type="text" name="unit" value={formState.unit} onChange={updateState} />
      <StyledButton data-testid="submit-button" type="submit">
        Launch timer
     </StyledButton>
    </form>);
};

const IndexPage: React.FC = () => {
  const [state, setState] = useState<FormState>({ value: "10", unit: "second(s)" });

  const updateState = (event: React.FormEvent<HTMLInputElement>) => {
    var newState = state;
    const targetStateKey: string = event.currentTarget.name;
    const targetStateValue: string = event.currentTarget.value;
    if (targetStateKey === "value" || targetStateKey === "unit") {
      newState[targetStateKey] = targetStateValue;
      setState(state => ({ ...state, newState }));
    }
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Router.push({
      pathname: '/clock',
      query: state
    });
  };

  return (<div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, height=device-height, user-scalable=no" />
      <meta charSet="utf-8" />
      <title>A Timer</title>
    </Head>
    <style>{`
      body { 
        font: 11px menlo;
        color: #fff;
        margin:0;
      }
    `}</style>
    <StyledContainer>
      <IndexForm submitForm={submitForm} formState={state} updateState={updateState} />
    </StyledContainer>

  </div >);
};

export default IndexPage;