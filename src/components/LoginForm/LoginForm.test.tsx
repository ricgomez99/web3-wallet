import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import LogginForm from './LoginForm'

describe('<LoginForm />', () => {
  beforeEach(() => {
    render(<LogginForm />)
  })

  it.concurrent("Should render 2 inputs 'email' & 'password'", () => {
    const inputs = screen.getAllByRole('textbox')

    expect(inputs).toHaveLength(2)
    expect(inputs[0]).toHaveAttribute('placeholder', 'email')
    expect(inputs[1]).toHaveAttribute('placeholder', 'password')
  })

  it.concurrent('Should have a submit button', () => {
    const submitButton = screen.getByRole('button')

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveTextContent('Login')
  })

  // TODO: Implement test for submit and error handling in form
})
