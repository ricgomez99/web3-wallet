import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import LoginForm from './LoginForm'
import userEvent from '@testing-library/user-event'

describe('<LoginForm />', () => {
  const user = userEvent.setup()
  const mockOnSubmit = vi.fn(() => {
    return Promise.resolve()
  })

  beforeEach(() => {
    render(<LoginForm />)
  })

  it("Should render 2 inputs 'email' & 'password'", () => {
    const inputs = screen.getAllByRole('textbox')

    expect(inputs).toHaveLength(2)
    expect(inputs[0]).toHaveAttribute('placeholder', 'email')
    expect(inputs[1]).toHaveAttribute('placeholder', 'password')
  })

  it('Should have a submit button', () => {
    const submitButton = screen.getByText(/Login/)

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveTextContent('Login')
  })

  // TODO: Implement test for submit and error handling in form
  it('Should display "required" error when submit form with invalid values', async () => {
    const submitButton = screen.getByRole('button')
    await user.click(submitButton)

    expect(await screen.findAllByRole('alert')).toHaveLength(2)
    expect(mockOnSubmit).not.toBeCalled()
  })
})
