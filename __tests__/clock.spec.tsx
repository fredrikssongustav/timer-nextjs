import * as React from 'react';
import { render, wait } from '@testing-library/react';
import ClockPage from '../pages/clock';
import { Clock } from '../src/components/Clock';


describe('Clock component', () => {
  describe('should exist', () => {
    it('should be able to count seconds accurately', async () => {
      // Interval 50ms
      // Jest timeout is 5000 ms => We must test for less than that
      const timerValue = 1;
      const timeNow = Date.now();
      const { getByTestId } = render(<Clock
        state={{ S: timerValue.toString() }}
        startClock
      />);
      await wait(() => getByTestId('done-counting'));
      const timeThen = Date.now();
      // Maximum error should be 50ms (interval), i.e. 50/1000 = 5%< 6 %
      expect((timeThen - timeNow) / (1000 * timerValue) - 1).toBeLessThan(0.08);
    });

    it('should be able to know when something is wrong', () => {
      const { getByTestId } = render(<Clock
        state={{ S: 'asd' }}
        startClock
      />);
      expect(getByTestId('failed-clock')).toBeTruthy();
    });

    it('should be able to know something to count', () => {
      const { getByTestId } = render(<Clock
        state={{ S: '2' }}
        startClock={false}
      />);
      expect(getByTestId('clock-svg')).toBeTruthy();
    });
  });

  it('should render', () => {
    const { getByTestId } = render(<Clock
      state={{ S: '2' }}
      startClock={false}
    />);
    expect(getByTestId('clock-svg')).toBeTruthy();
  });
});


describe('Clock page', () => {
  describe('should have a back button', () => {
    it('that is existing', () => {
      const { getByTestId } = render(<ClockPage />);
      expect(getByTestId('back-button')).toBeTruthy();
    });
  });

  describe('should on init', () => {
    it('show fail due to lacking default values and query params', () => {
      const { getByTestId } = render(<ClockPage />);
      expect(getByTestId('failed-clock')).toBeTruthy();
    });

    it('show some button to start clock', () => {
      const { getByTestId } = render(<ClockPage />);
      expect(getByTestId('start-button')).toBeTruthy();
    });

    it('not break on render', () => {
      const { getByTestId } = render(<ClockPage />);
      expect(getByTestId).toBeTruthy();
    });
  });
});
