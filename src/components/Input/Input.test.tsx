import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './Input'

describe('<Input />', () => {
  const inputProps = {
    name: 'test-field',
    register: vi.fn().mockReturnValue({
      onChange: vi.fn(),
      onBlur: vi.fn(),
      name: 'test-field',
      ref: vi.fn(),
    }),
  }
  beforeEach(() => {
    render(<Input name={inputProps.name} register={inputProps.register} />)
  })

  it.concurrent('Calls the register onChange event', async () => {
    const input = screen.getByRole('textbox')
    const user = userEvent.setup()

    await user.type(input, 'abc')
    expect(inputProps.register).toHaveBeenCalledTimes(1)
    expect(input).toHaveValue('abc')
  })
})
