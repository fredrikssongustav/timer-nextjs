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

      fireEvent.change(getByTestId('field-s'), { target: { value: "4" } })
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
      const timeUnitFieldS = getByTestId('field-s') as HTMLInputElement
      expect(timeUnitFieldS).toBeTruthy()
      fireEvent.change(timeUnitFieldS, { target: { value: "10" } })
      expect(timeUnitFieldS.value).toBe("10")

      const timeAmountFieldH = getByTestId('field-h') as HTMLInputElement
      expect(timeAmountFieldH).toBeTruthy()
      fireEvent.change(timeAmountFieldH, { target: { value: "2" } })
      expect(timeAmountFieldH.value).toBe("2")

      const timeAmountFieldD = getByTestId('field-d') as HTMLInputElement
      expect(timeAmountFieldD).toBeTruthy()
      fireEvent.change(timeAmountFieldD, { target: { value: "2" } })
      expect(timeAmountFieldD.value).toBe("2")

      const timeAmountFieldY = getByTestId('field-y') as HTMLInputElement
      expect(timeAmountFieldY).toBeTruthy()
      fireEvent.change(timeAmountFieldY, { target: { value: "2" } })
      expect(timeAmountFieldY.value).toBe("2")
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