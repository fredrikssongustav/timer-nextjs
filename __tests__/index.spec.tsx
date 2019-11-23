import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import IndexPage from '../pages/index/index'

describe('Pages', () => {

  describe('Index', () => {

    it('should render sense-making input fields', function () {
      const { getByTestId } = render(<IndexPage />)
      const timeUnitField = getByTestId('field-timeunit') as HTMLInputElement
      expect(timeUnitField).toBeTruthy()
      fireEvent.change(timeUnitField, { target: { value: "23" } })
      expect(timeUnitField.value).toBe("23")

      const timeAmountField = getByTestId('field-timetype') as HTMLInputElement
      expect(timeAmountField).toBeTruthy()
      fireEvent.change(timeAmountField, { target: { value: "23" } })
      expect(timeAmountField.value).toBe("23")

    })

    it('should render some type of form', function () {
      const { getByTestId } = render(<IndexPage />)
      expect(getByTestId('index-form')).toBeTruthy()
    })

    it('should render without throwing an error', function () {
      const { getByTestId } = render(<IndexPage />)
      expect(getByTestId).toBeTruthy()
    })
  })


})