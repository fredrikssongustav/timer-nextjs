import Head from 'next/head';
import * as React from 'react';


const IndexPage: React.FC = () => {
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
    <div data-testid="indexPage" />
  </div>)
}

export default IndexPage;