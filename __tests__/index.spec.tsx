import * as React from 'react'
import { render } from '@testing-library/react'
import IndexPage from '../pages/index/index'

describe('Pages', () => {

  describe('Index', () => {

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