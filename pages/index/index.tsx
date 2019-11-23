import Head from 'next/head';
import * as React from 'react';


type IndexFormProps = {
  someCallback: () => void
}

export const IndexForm: React.FC<IndexFormProps> = ({ someCallback }) => {
  return (
    <form data-testid="index-form" onSubmit={someCallback}>
      <input data-testid="field-timeunit" />
      <input data-testid="field-timetype" />
      <button data-testid="submit-button" />
    </form>)
}

const IndexPage: React.FC = () => {
  const someCallback = () => {

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
    <IndexForm someCallback={someCallback} />
  </div>)
}

export default IndexPage