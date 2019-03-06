// Test away
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

import Dashboard from './Dashboard'

describe('<Dashboard />', ()=>{
  it('should display Open Gate when the gate is closed', ()=>{
    const { getByText } = render(<Dashboard closed={true} />)
    const button = getByText(/close gate/i)

    fireEvent.click(button)

    expect(button).toHaveTextContent(/open gate/i)
  })
})
