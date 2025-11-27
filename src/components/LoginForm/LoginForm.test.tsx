import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import LogginForm from './LoginForm'

describe('<LoginForm />', () => {
  beforeEach(() => {
    render(<LogginForm />)
  })

  it("Should render 2 inputs 'username' & 'email'", () => {
    const inputs = screen.getAllByRole('textbox')

    expect(inputs).toHaveLength(2)
    expect(inputs[0]).toHaveAttribute('placeholder', 'username')
    expect(inputs[1]).toHaveAttribute('placeholder', 'email')
  })

  it('Should have a submit button', () => {
    const submitButton = screen.getByRole('button')

    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveTextContent('Login')
  })
})
