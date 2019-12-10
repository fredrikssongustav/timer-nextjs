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

    const [stopTime, setStopTime] = useState<number | undefined>(undefined)

    useEffect(() => {
        console.log(value)
        setStopTime(value)
    }, [])

    useEffect(() => {
        if (stopTime && stopTime > 0) {
            console.log(stopTime)
            setTimeout(reduceStopTime, 1000)
        }
    }, [stopTime])

    const reduceStopTime = () => {
        if (stopTime) {
            const fraction = stopTime && stopTime / 100;
            setStopTime(stopTime - 1)
        }
    }

    if (!stopTime && stopTime != 0) {
        return <div data-testid="failed-clock" />
    }

    if (stopTime <= 0) {
        return <div data-testid="done-counting" />
    }

    return (<div data-testid="clock" />);
}

const ClockPage: React.FC = () => {
    const router = useRouter();
    // TODO: Don't set default values like this
    const query = router && router.query.value ? router.query : { value: 10, unit: TIME_UNIT.s }
    const { value, unit } = query

    const goBack = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        Router.push({
            pathname: '/',
        })
    }
    console.log(query)
    console.log(value)
    return (<div>
        <Clock unit={unit as TIME_UNIT | undefined} value={Number(value)} />
        <button data-testid="start-button">
            start button
        </button>
        <button data-testid="back-button" onClick={goBack}>
            Go to timer setup page
        </button>
    </div>)
}

export default ClockPage