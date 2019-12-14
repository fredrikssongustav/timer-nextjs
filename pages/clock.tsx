import * as React from 'react';
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { StyledButton } from '../src/atoms/StyledButton';
import { StyledContainer } from '../src/containers/StyledContainer/StyledContainer';
import { StyledTimer } from '../src/organisms/StyledTimer/StyledTimer';

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


    return (
        <StyledTimer progress={(refinedValue - stopTime) / refinedValue * 100} color="#000" />
    );
}

const ClockPage: React.FC = () => {
    const router = useRouter();
    // TODO: Don't set default values like this
    const query = router && router.query.value ? router.query : { value: 20, unit: TIME_UNIT.s }
    const { value, unit } = query

    const [reInitiateTimer, setReInitiateTimer] = useState<boolean>(false)

    const goBack = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        Router.push({
            pathname: '/',
        })
    }

    return (<StyledContainer>
        <div style={{ height: "400px", width: "400px" }}>
            {reInitiateTimer ?
                <Clock unit={unit as TIME_UNIT | undefined} value={Number(value)} /> :
                <StyledTimer />
            }
        </div>
        <StyledButton data-testid="start-button" onClick={() => {
            setReInitiateTimer(true)
        }}>
            start button
        </StyledButton>

        <StyledButton data-testid="back-button" onClick={goBack}>
            Go to timer setup page
        </StyledButton>
    </StyledContainer>)
}

export default ClockPage;