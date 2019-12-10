import Head from 'next/head';
import * as React from 'react';
import { useState } from 'react';
import Router, { useRouter } from 'next/router';

const Clock: React.FC = () => {
    return (<div data-testid="clock" />);
}

const ClockPage: React.FC = () => {
    const router = useRouter();


    const goBack = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        Router.push({
            pathname: '/',
        })
    }

    return (<div>
        <Clock />
        <button data-testid="start-button">
            start button
        </button>
        <button data-testid="back-button" onClick={goBack}>
            Go to timer setup page
        </button>
    </div>)
}

export default ClockPage