import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import LoginForm from './LoginForm'
import userEvent from '@testing-library/user-event'
import { login } from '@/api/auth'

describe('<LoginForm />', () => {
  vi.mock('@/api/auth', () => ({
    login: vi.fn(),
  }))

  /** Mocks and useEvent **/
  const user = userEvent.setup()
  const mockOnSubmit = vi.mocked(login)

  /** DOM Elements **/
  let submitButton: HTMLElement
  let emailInput: HTMLElement
  let passwordInput: HTMLElement

  beforeEach(() => {
    render(<LoginForm />)
    submitButton = screen.getByText(/Login/)
    emailInput = screen.getByRole('textbox', { name: 'Email' })
    passwordInput = screen.getByLabelText(/Password/)
  })

  it("Should render 2 inputs 'email' & 'password'", () => {
    expect(emailInput).toHaveAttribute('placeholder', 'email')
    expect(passwordInput).toHaveAttribute('placeholder', 'password')
  })

  it('Should have a submit button', () => {
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveTextContent('Login')
  })

  // TODO: Implement test for submit and error handling in form
  it('Should display "required" error when submit form with invalid values', async () => {
    await user.click(submitButton)

    expect(await screen.findAllByRole('alert')).toHaveLength(2)
    expect(mockOnSubmit).not.toBeCalled()
  })

  it('Should display an error when email is invalid', async () => {
    await user.type(emailInput, 'test')
    await user.type(passwordInput, 'password')
    await user.click(submitButton)

    expect(await screen.findAllByRole('alert')).toHaveLength(1)
    expect(mockOnSubmit).not.toBeCalled()
    expect(emailInput).toHaveValue('test')
    expect(passwordInput).toHaveValue('password')
  })

  it('Should display a length error when the password is to short', async () => {
    const message = 'The password should have at least 5 characters'

    await user.type(passwordInput, '123')
    await user.click(submitButton)

    expect(await screen.findByText(message)).toBeInTheDocument()
    expect(passwordInput).toHaveValue('123')
    expect(mockOnSubmit).not.toBeCalled()
  })

  it('Should submit values when valid', async () => {
    await user.type(emailInput, 'test@mail.com')
    await user.type(passwordInput, 'password123')
    await user.click(submitButton)

    await waitFor(() => {
      screen.debug(screen.queryAllByRole('alert'))
      expect(screen.queryAllByRole('alert')).toHaveLength(0)
      expect(mockOnSubmit).toBeCalledWith('test@mail.com', 'password123')
      expect(mockOnSubmit).toHaveBeenCalledTimes(1)
      expect(emailInput).toHaveValue('')
      expect(passwordInput).toHaveValue('')
    })
  })
})
