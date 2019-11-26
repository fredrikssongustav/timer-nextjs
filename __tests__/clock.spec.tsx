import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ClockPage from '../pages/clock'


describe('Clock page', () => {
    describe('should on init', () => {
        it('show something refered to as clock', () => {
            const { getByTestId } = render(<ClockPage />)
            expect(getByTestId('clock')).toBeTruthy()
        })

        it('show some button to start clock', () => {
            const { getByTestId } = render(<ClockPage />)
            expect(getByTestId('start-button')).toBeTruthy()
        })

        it('not break on render', () => {
            const { getByTestId } = render(<ClockPage />)
            expect(getByTestId).toBeTruthy()
        })
    })
})