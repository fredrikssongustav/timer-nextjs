import * as React from 'react';
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { StyledButton } from '../src/atoms/StyledButton';
import { StyledContainer } from '../src/containers/StyledContainer/StyledContainer';

export enum TIME_UNIT {
    h = "hour",
    s = "second",
    d = "day",
    y = "year"
}

export type ClockProps = {
    unit: TIME_UNIT | undefined,
    value: number | undefined
}

type StyledTimerProps = {
    progress: number;
    color: string;
}

const StyledTimer: React.FC<StyledTimerProps> = ({progress,color}:StyledTimerProps) => {
    return(<svg viewBox="0 0 36 36">
    <path
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none"
      stroke={color.toString()}
      stroke-width="3"
      stroke-dasharray={`${progress.toString()},100`}
    />
  </svg>);
}

export const Clock: React.FC<ClockProps> = ({ unit, value }) => {
    const refinedValue = value as number

    const [stopTime, setStopTime] = useState<number | undefined>(undefined);

    useEffect(() => {
        setStopTime(value);
    }, [])

    useEffect(() => {
        if (stopTime && stopTime > 0) {
            setTimeout(reduceStopTime, 1000);
        }
    }, [stopTime]);

    const reduceStopTime = () => {
        if (stopTime) {
            // const fraction = stopTime && stopTime / 100;
            setStopTime(stopTime - 1);
        }
    };

    if (!stopTime && stopTime != 0) {
        return <div data-testid="failed-clock" />;
    }

    if (stopTime <= 0) {
        return <div data-testid="done-counting" />;
    }


    return (<div data-testid="clock" style={{ "height": "200px", "width": "200px" }}>
        <StyledTimer progress={(refinedValue - stopTime)/refinedValue * 100} color="#000" />
    </div>);
}

const ClockPage: React.FC = () => {
    const router = useRouter();
    // TODO: Don't set default values like this
    const query = router && router.query.value ? router.query : { value: 20, unit: TIME_UNIT.s }
    const { value, unit } = query

    const goBack = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        Router.push({
            pathname: '/',
        })
    }

    return (<StyledContainer>
        <Clock unit={unit as TIME_UNIT | undefined} value={Number(value)} />
        <StyledButton data-testid="start-button">
            start button
        </StyledButton>
        <StyledButton data-testid="back-button" onClick={goBack}>
            Go to timer setup page
        </StyledButton>
    </StyledContainer>)
}

export default ClockPage;