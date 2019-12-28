import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import IndexPage, { IndexForm } from '../pages/index';

describe('Pages', () => {
  describe('Form', () => {
    it('should have the ability to change some state', () => {
      const mockSubmitForm = jest.fn();
      const mockUpdateState = jest.fn();
      const mockState = {};
      const { getAllByTestId } = render(<IndexForm
        submitForm={mockSubmitForm}
        formState={mockState}
        updateState={mockUpdateState}
      />);

      fireEvent.change(getAllByTestId('select-field')[0].querySelector('input'), { target: { value: '4' } });

      expect(getAllByTestId('select-field')[0].querySelector('input')).toHaveProperty('value', '4');
    });

    it('should have a button that when pressed submits the form', () => {
      const mockSubmitForm = jest.fn();
      const mockUpdateState = jest.fn();
      const mockState = { S: '10' };
      const { getByTestId } = render(<IndexForm
        submitForm={mockSubmitForm}
        formState={mockState}
        updateState={mockUpdateState}
      />);

      const submitButton = getByTestId('submit-button');
      expect(submitButton).toBeTruthy();
      fireEvent.click(submitButton);
      expect(mockSubmitForm).toBeCalledTimes(1);
    });
  });

  describe('Index', () => {
    it('should render some type of form', () => {
      const { getByTestId } = render(<IndexPage />);
      expect(getByTestId('index-form')).toBeTruthy();
    });

    it('should render without throwing an error', () => {
      const { getByTestId } = render(<IndexPage />);
      expect(getByTestId).toBeTruthy();
    });
  });
});
