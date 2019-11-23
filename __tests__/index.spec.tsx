import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import IndexPage, { IndexForm } from '../pages/index/index'

describe('Pages', () => {

  describe('Form', () => {

    it('should have a button that when fired submits the form', () => {
      const spyFunction = jest.fn()
      const { getByTestId } = render(<IndexForm someCallback={spyFunction} />)
      const submitButton = getByTestId('submit-button')
      expect(submitButton).toBeTruthy()
      fireEvent.click(submitButton)
      expect(spyFunction).toBeCalledTimes(1)
    })

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
  });

  describe('Index', () => {

    it('should render some type of form', function () {
      const { getByTestId } = render(<IndexPage />)
      expect(getByTestId('index-form')).toBeTruthy()
    })

    it('should render without throwing an error', function () {
      const { getByTestId } = render(<IndexPage />)
      expect(getByTestId).toBeTruthy()
    })
  });


});