import Head from 'next/head';
import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Clock: React.FC = () => {
    return (<div data-testid="clock" />);
}

const ClockPage: React.FC = () => {
    const router = useRouter();

    return (<div>
        <Clock />
        <button data-testid="start-button">
        </button>
    </div>)
}

export default ClockPage