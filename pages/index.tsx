import Head from 'next/head';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Router from 'next/router'

type FormState = {
  unit: string;
  value: string;
}

type IndexFormProps = {
  submitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  formState: FormState;
  updateState: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const IndexForm: React.FC<IndexFormProps> = ({ submitForm, formState, updateState }) => {
  return (
    <form data-testid="index-form" onSubmit={submitForm}>
      <input data-testid="field-timevalue" type="text" name="value" value={formState.value} onChange={updateState} />
      <input data-testid="field-timeunit" type="text" name="unit" value={formState.unit} onChange={updateState} />
      <button data-testid="submit-button" />
    </form>)
}

const IndexPage: React.FC = () => {
  const [state, setState] = useState<FormState>({ value: "0", unit: "h" })

  const updateState = (event: React.FormEvent<HTMLInputElement>) => {
    var newState = state;
    const targetStateKey: string = event.currentTarget.name
    const targetStateValue: string = event.currentTarget.value
    if (targetStateKey === "value" || targetStateKey === "unit") {
      newState[targetStateKey] = targetStateValue
      setState(state => ({ ...state, newState }))
    }
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(event)
    Router.push({
      pathname: '/clock',
      query: state
    })
  }

  return (<div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, height=device-height, user-scalable=no" />
      <meta charSet="utf-8" />
    </Head>
    <style>{`
      body { 
        background: #313639;
        font: 11px menlo;
        color: #fff;
      }
    `}</style>
    <IndexForm submitForm={submitForm} formState={state} updateState={updateState} />
  </div>)
}

export default IndexPage