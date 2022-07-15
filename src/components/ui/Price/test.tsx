import { render, screen } from '@testing-library/react'

import Price from '.'

describe('<Price />', () => {
  it.skip('should render something', () => {
    const { container } = render(<Price />)

    expect(screen.getByRole('heading', { name: /Price/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
