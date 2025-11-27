import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/dom'
import Home from './Home'

describe('<Home />', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('Should render the Login title', () => {
    expect(screen.getByText('Login to access content')).toBeInTheDocument()
  })

  it('Should render a Login form', () => {
    expect(screen.getByTestId('login-form')).toBeInTheDocument()
  })
})
