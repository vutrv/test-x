import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '../../../../../components'

describe('Button Component', () => {
  let consoleErrorSpy: jest.SpyInstance

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleErrorSpy.mockRestore()
  })

  it('renders the button with the provided label', () => {
    render(<Button label="Toggle Theme" />)
    expect(screen.getByText('Toggle Theme')).toBeInTheDocument()
  })

  it('adds data-testid when markToTest is true and required props are provided', () => {
    render(
      <Button
        label="Toggle Theme"
        markToTest={true}
        func="toggle-theme"
        pageName="home"
        position={1}
      />,
    )
    const button = screen.getByTestId('toggle-theme-button-home-1')
    expect(button).toBeInTheDocument()
  })

  it('does not add data-testid when markToTest is false', () => {
    render(<Button label="No Test ID" />)
    const button = screen.getByText('No Test ID')
    expect(button).toBeInTheDocument()
    expect(button).not.toHaveAttribute('data-testid')
  })

  it('throws an error if markToTest is true but func is missing', () => {
    const renderWithError = () => {
      render(
        <Button label="Save" markToTest={true} pageName="home" position={1} />,
      )
    }
    expect(renderWithError).toThrow(
      'func is required when component marked to test',
    )
  })

  it('throws an error if markToTest is true but pageName is missing', () => {
    const renderWithError = () => {
      render(<Button label="Save" markToTest={true} func="save" position={1} />)
    }
    expect(renderWithError).toThrow(
      'pageName is required when component marked to test',
    )
  })

  it('throws an error if markToTest is true but position is invalid', () => {
    const renderWithError = () => {
      render(
        <Button
          label="Save"
          markToTest={true}
          func="save"
          pageName="home"
          position={0}
        />,
      )
    }
    expect(renderWithError).toThrow(
      'position must be greater than 0 when component marked to test',
    )
  })
})
