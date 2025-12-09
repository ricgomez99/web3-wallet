import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import HeaderTitle from './HeaderTitle'

describe('<HeaderTitle />', () => {
  it('Should render component', () => {
    render(<HeaderTitle title="test" />)
  })
})
