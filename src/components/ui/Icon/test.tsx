import { render, screen } from '@testing-library/react'

import Icon from '.'

describe('<Icon />', () => {
  it.skip('should render something', () => {
    const { container } = render(<Icon />)

    expect(screen.getByRole('heading', { name: /Icon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
