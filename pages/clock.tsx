import Head from 'next/head';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';

export enum TIME_UNIT {
    h = "h",
    s = "s",
    d = "d",
    y = "y"
}

export type ClockProps = {
    unit: TIME_UNIT | undefined,
    value: number | undefined
}

export const Clock: React.FC<ClockProps> = ({ unit, value }) => {
    return (<div data-testid="clock" />);
}

const ClockPage: React.FC = () => {
    const router = useRouter();
    // TODO: Don't set default values like this
    const query = router ? router.query : { value: 10, unit: TIME_UNIT.s }
    const { value, unit } = query

    const goBack = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        Router.push({
            pathname: '/',
        })
    }

    return (<div>
        <Clock unit={unit as TIME_UNIT | undefined} value={Number(value) ? Number(value) : undefined} />
        <button data-testid="start-button">
            start button
        </button>
        <button data-testid="back-button" onClick={goBack}>
            Go to timer setup page
        </button>
    </div>)
}

export default ClockPage