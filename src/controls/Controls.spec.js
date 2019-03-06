// Test away!
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import Controls from './Controls'

describe('<Controls />', ()=>{
  it('closed toggle button should call the passed function', ()=>{
    const mockFn = jest.fn()
    const { getByText } = render(<Controls toggleClosed={mockFn} />)
    const button = getByText(/close gate/i)

    fireEvent.click(button)

    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

it('locked toggle button should call the passed function', ()=>{
  const mockFn = jest.fn()
  const { getByText } = render(<Controls toggleLocked = {mockFn} closed />)
  const button = getByText(/lock gate/i)

  fireEvent.click(button)

  expect(mockFn).toHaveBeenCalledTimes(1)
})

it('should disable locked toggle button if the gate is open', ()=>{
  const mockFn = jest.fn()
  const { getByText } = render(
    <Controls toggleLocked={mockFn} closed={false} />  )
  const button = getByText(/lock gate/i)

  expect(button).toBeDisabled()
  fireEvent.click(button)
  expect(mockFn).not.toHaveBeenCalled()
})

it('should disable closed toggle button if gate is locked', ()=>{
  const mockFn = jest.fn()
  const { getByText } = render(
    <Controls toggleLocked={mockFn} locked={true} />  )
  const button = getByText(/close gate/i)

  expect(button).toBeDisabled()
  fireEvent.click(button)
  expect(mockFn).not.toHaveBeenCalled()
})
