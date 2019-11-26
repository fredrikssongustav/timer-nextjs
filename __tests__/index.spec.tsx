import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import IndexPage, { IndexForm } from '../pages/index'

describe('Pages', () => {

  describe('Form', () => {

    it('should have the ability to change some state', () => {
      const mockSubmitForm = jest.fn()
      const mockUpdateState = jest.fn()
      const mockState = { unit: "s", value: "2" }
      const { getByTestId } = render(<IndexForm submitForm={mockSubmitForm} formState={mockState} updateState={mockUpdateState} />)

      fireEvent.change(getByTestId('field-timeunit'), { target: { value: "4" } })
    })

    it('should have a button that when fired submits the form', () => {
      const mockSubmitForm = jest.fn()
      const mockUpdateState = jest.fn()
      const mockState = { unit: "s", value: "2" }
      const { getByTestId } = render(<IndexForm submitForm={mockSubmitForm} formState={mockState} updateState={mockUpdateState} />)

      const submitButton = getByTestId('submit-button')
      expect(submitButton).toBeTruthy()
      fireEvent.click(submitButton)
      expect(mockSubmitForm).toBeCalledTimes(1)
    })

    it('should render sense-making input fields', function () {
      const { getByTestId } = render(<IndexPage />)
      const timeUnitField = getByTestId('field-timeunit') as HTMLInputElement
      expect(timeUnitField).toBeTruthy()
      fireEvent.change(timeUnitField, { target: { value: "s" } })
      expect(timeUnitField.value).toBe("s")

      const timeAmountField = getByTestId('field-timevalue') as HTMLInputElement
      expect(timeAmountField).toBeTruthy()
      fireEvent.change(timeAmountField, { target: { value: "2" } })
      expect(timeAmountField.value).toBe("2")
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